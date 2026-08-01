import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * De voordeur van de site: een proefles-aanvraag of een bericht via /contact/.
 *
 * De aanvraag landt op TWEE plekken, en dat is bewust:
 *   1. Supabase `public.client_site_leads` — de leesbare ledger. Zonder ledger is een
 *      weggevallen melding onzichtbaar, en dat is precies de faalmodus waar de lead-voordeuren
 *      van StudioLee zelf ooit op stukliepen.
 *   2. De meld-rail `POST /webhook/site-aanvraag` op n8n, die de mail via Brevo stuurt.
 *
 * ⚑ WAAROM DE MAIL LANGS N8N GAAT EN NIET RECHTSTREEKS NAAR BREVO — gemeten, geen voorkeur:
 *    Brevo hanteert een IP-allowlist en geeft vanaf elk ander IP `401 unauthorized`
 *    ("unrecognised IP address"). Vercel-functies draaien op roterende egress-IP's die daar
 *    per definitie niet op staan. n8n heeft de credential én een IP dat het wel mag.
 *    Bijvangst: deze repo hoeft geen Brevo-sleutel te dragen.
 *
 * ⚑ WIE DE MELDING KRIJGT STAAT IN DE FLOW, NIET HIER. Zou deze route het adres meesturen,
 *    dan is die webhook een open relay. De site stuurt alleen `client_slug`.
 *
 * De aanvraag wordt als GESLAAGD gemeld zodra ÉÉN van de twee routes het haalt — een bezoeker
 * mag nooit een fout zien voor een lead die wél is vastgelegd. Wat faalde staat in de response
 * én in de log, zodat het meetbaar is en niet stil.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const MELD_URL =
  process.env.AANVRAAG_WEBHOOK_URL || 'https://n8n.aireclamestudio.nl/webhook/site-aanvraag';
const CLIENT = 'ali-rijschool';

// n8n zit achter Cloudflare en weigert een kale bot-User-Agent met 403.
const UA = 'Mozilla/5.0 (compatible; alirijles-site/1.0)';

const kort = (v, n = 800) => {
  if (typeof v !== 'string') return null;
  const s = v.trim().slice(0, n);
  return s || null;
};

async function naarLedger(rij) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return { ok: false, reden: 'ledger niet geconfigureerd' };
  const res = await fetch(`${SUPABASE_URL}/rest/v1/client_site_leads`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(rij),
  });
  if (!res.ok) return { ok: false, reden: `supabase ${res.status}: ${await res.text()}` };
  const [opgeslagen] = await res.json();
  return { ok: true, id: opgeslagen?.id };
}

async function naarMelding(rij, ledgerId) {
  const res = await fetch(MELD_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
    body: JSON.stringify({ ...rij, client_slug: CLIENT, ledger_id: ledgerId || null }),
  });
  const tekst = await res.text();
  if (!res.ok) return { ok: false, reden: `meldrail ${res.status}: ${tekst}` };
  let uit = {};
  try {
    uit = JSON.parse(tekst);
  } catch {
    /* een niet-JSON body telt als mislukt, niet als stil geslaagd */
  }
  return uit.ok === true ? { ok: true } : { ok: false, reden: `meldrail weigerde: ${tekst}` };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'ongeldige body' }, { status: 400 });
  }

  // spam-val: een ingevuld honeypot-veld krijgt een nette 200 en gaat nergens heen
  if (kort(body.website)) return NextResponse.json({ ok: true });

  const naam = kort(body.naam, 120);
  const telefoon = kort(body.telefoon, 40);
  if (!naam || !telefoon) {
    return NextResponse.json({ error: 'naam en telefoonnummer zijn verplicht' }, { status: 400 });
  }

  const rij = {
    client_slug: CLIENT,
    domein: 'alirijles.nl',
    formulier: body.formulier === 'contact' ? 'contact' : 'proefles',
    naam,
    telefoon,
    ophaalplaats: kort(body.ophaalplaats, 80),
    voorkeur_moment: kort(body.voorkeur_moment, 200),
    onderwerp: kort(body.onderwerp, 80),
    bericht: kort(body.bericht, 2000),
    bron: 'website',
  };

  const ledger = await naarLedger(rij);
  const melding = await naarMelding(rij, ledger.id);

  if (!ledger.ok && !melding.ok) {
    console.error('[aanvraag] beide routes gefaald', ledger.reden, melding.reden);
    return NextResponse.json({ error: 'aanvraag niet opgeslagen' }, { status: 502 });
  }
  if (!ledger.ok) console.error('[aanvraag] ledger gefaald', ledger.reden);
  if (!melding.ok) console.error('[aanvraag] melding gefaald', melding.reden);

  return NextResponse.json({
    ok: true,
    ledger: ledger.ok,
    melding: melding.ok,
    id: ledger.id ?? null,
  });
}
