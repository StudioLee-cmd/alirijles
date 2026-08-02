// middleware.js — de wachtwoord-deur vóór de site, tot de oplevering.
//
// WAAROM DIT BESTAAT. De site draait op z'n echte domein vóórdat de klant 'm heeft goedgekeurd:
// canonicals, sitemap, formulieren en DNS gedragen zich daar anders dan op een preview-URL, en
// dat wil je gemeten hebben vóór de livegang. Maar een domein dat wijst is publiek. Deze
// middleware zet er een deur voor, tot de dag dat 'ie open mag.
//
// AAN EN UIT MET ÉÉN ENV-VAR, zonder code te wijzigen:
//   SITE_WACHTWOORD gezet   → de gate staat AAN, niemand komt binnen zonder het wachtwoord
//   SITE_WACHTWOORD leeg/weg → de gate is er niet; de site gedraagt zich alsof dit bestand er
//                              niet is (één `next()`, geen enkel neveneffect)
// Op Vercel wordt een env-var bij de BUILD meegegeven, dus na het zetten of weghalen hoort er een
// redeploy achteraan. `livegang_klantsite.py --gate-aan/--gate-uit` doet dat allebei in één keer.
//
// ⚠️ NOOIT `NEXT_PUBLIC_SITE_WACHTWOORD` — alles met die prefix bakt Next.js in de browser-bundle
//    en dan staat het wachtwoord in de JS die elke bezoeker downloadt.
//
// Gegenereerd door alpha1/scripts/bouw_wachtwoord_gate.py — wijzig het dáár, niet hier, anders
// drift de deur per klant en is de volgende site weer handwerk.
import { NextResponse } from 'next/server';

const COOKIE = 'sl_toegang';
const VELD = 'sl_wachtwoord';
const ZOUT = 'studiolee-toegang-v1';
const DAGEN = 30;

// De cookie draagt niet het wachtwoord maar een hash ervan. Wie de cookie onderschept heeft
// daarmee toegang tot deze ene site, maar niet het wachtwoord zelf — en dat is het enige dat
// hergebruikt zou kunnen worden.
async function hash(tekst) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${ZOUT}|${tekst}`));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Vergelijken in vaste tijd. Op twee hashes van gelijke lengte, dus de lengte verraadt niets.
function gelijk(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let verschil = 0;
  for (let i = 0; i < a.length; i++) verschil |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return verschil === 0;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function deurPagina(host, fout) {
  const domein = esc(host || 'deze site');
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>${domein} — nog niet openbaar</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100dvh; display: grid; place-items: center; padding: 24px;
    font: 16px/1.55 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    color: #e9edf1;
    background: radial-gradient(1100px 620px at 50% -12%, #1d2a24 0%, #0d0f12 62%, #0a0b0d 100%);
  }
  main {
    width: 100%; max-width: 27rem; padding: 2.25rem 2rem 1.75rem;
    background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.09);
    border-radius: 18px; backdrop-filter: blur(6px);
    box-shadow: 0 24px 60px -28px rgba(0,0,0,.85);
  }
  .slot {
    width: 44px; height: 44px; display: grid; place-items: center; margin-bottom: 1.15rem;
    border-radius: 12px; background: rgba(193,255,114,.11); border: 1px solid rgba(193,255,114,.22);
  }
  .slot svg { width: 21px; height: 21px; stroke: #c1ff72; fill: none; stroke-width: 1.7; }
  h1 { margin: 0 0 .5rem; font-size: 1.3rem; line-height: 1.3; letter-spacing: -.01em; font-weight: 620; }
  p { margin: 0 0 1.5rem; color: #9aa4ae; font-size: .93rem; }
  p strong { color: #c9d2da; font-weight: 560; }
  label { display: block; margin-bottom: .4rem; font-size: .8rem; color: #9aa4ae; }
  input {
    width: 100%; padding: .72rem .85rem; font-size: 1rem; color: #e9edf1;
    background: rgba(0,0,0,.32); border: 1px solid rgba(255,255,255,.14); border-radius: 10px;
    transition: border-color .16s ease, box-shadow .16s ease;
  }
  input:focus {
    outline: 0; border-color: rgba(193,255,114,.55); box-shadow: 0 0 0 3px rgba(193,255,114,.13);
  }
  button {
    width: 100%; margin-top: .8rem; padding: .74rem 1rem; font-size: .95rem; font-weight: 600;
    color: #0f1511; background: #c1ff72; border: 0; border-radius: 10px; cursor: pointer;
    transition: filter .16s ease, transform .16s ease;
  }
  button:hover { filter: brightness(1.06); }
  button:active { transform: translateY(1px); }
  .fout {
    margin: .9rem 0 0; padding: .6rem .75rem; font-size: .85rem; color: #ffc9c9;
    background: rgba(255,90,90,.09); border: 1px solid rgba(255,90,90,.22); border-radius: 9px;
  }
  .klein { margin: 1.6rem 0 0; padding-top: 1.1rem; font-size: .78rem; color: #6b747d;
           border-top: 1px solid rgba(255,255,255,.07); }
  .klein a { color: #8f9aa4; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.16); }
  .klein a:hover { color: #c1ff72; border-color: rgba(193,255,114,.4); }
</style>
</head>
<body>
<main>
  <div class="slot" aria-hidden="true">
    <svg viewBox="0 0 24 24"><rect x="4" y="10.5" width="16" height="10" rx="2.2"/><path d="M8 10.5V7.4a4 4 0 0 1 8 0v3.1"/></svg>
  </div>
  <h1>Deze site is nog niet openbaar</h1>
  <p><strong>${domein}</strong> wordt nog gebouwd. Heb je het wachtwoord gekregen, vul het hieronder in.</p>
  <form method="post" autocomplete="on">
    <label for="w">Wachtwoord</label>
    <input id="w" name="${VELD}" type="password" autocomplete="current-password" autofocus required>
    <button type="submit">Bekijk de site</button>
  </form>
  ${fout ? '<p class="fout">Dat wachtwoord klopt niet. Probeer het opnieuw.</p>' : ''}
  <p class="klein">Gemaakt door <a href="https://studiolee.nl">StudioLee</a></p>
</main>
</body>
</html>`;
}

function deur(request, fout) {
  return new NextResponse(deurPagina(request.headers.get('host'), fout), {
    // 401 en niet 200: een zoekmachine of een scanner die hier langskomt moet aan de STATUS al
    // zien dat er niets te halen valt. De X-Robots-Tag is de tweede grendel, voor het geval een
    // bot de status negeert maar de header wel leest.
    status: 401,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow, noarchive, nosnippet',
      'cache-control': 'no-store, max-age=0',
    },
  });
}

export async function middleware(request) {
  const wachtwoord = process.env.SITE_WACHTWOORD;
  if (!wachtwoord) return NextResponse.next();   // gate uit — de site gedraagt zich normaal

  const sleutel = await hash(wachtwoord);
  if (gelijk(request.cookies.get(COOKIE)?.value || '', sleutel)) return NextResponse.next();

  // Zonder geldige cookie is ELKE request geblokkeerd, dus een POST kan hier alleen de deur-form
  // zijn. Een echte formulier-post van de site komt nooit zover: die bezoeker heeft de cookie.
  if (request.method === 'POST') {
    let ingevuld = '';
    try {
      ingevuld = String((await request.formData()).get(VELD) || '');
    } catch {
      ingevuld = '';   // JSON-body of iets anders — geen inlogpoging, gewoon de deur tonen
    }
    if (ingevuld) {
      if (!gelijk(await hash(ingevuld), sleutel)) return deur(request, true);
      // 303: de browser doet hierna een GET op dezelfde URL, dus een refresh herhaalt de POST niet.
      // `nextUrl.clone()` en niet `new URL(..., request.url)`: achter de proxy van Vercel draagt
      // request.url intern soms http, en dan zou de redirect de bezoeker van https af sturen.
      const door = NextResponse.redirect(request.nextUrl.clone(), 303);
      door.cookies.set(COOKIE, sleutel, {
        httpOnly: true,           // JS op de pagina kan er niet bij
        secure: request.nextUrl.protocol === 'https:',   // op http-localhost zou secure 'm stil wegdrukken
        sameSite: 'lax',
        path: '/',                // één keer invullen geldt voor de hele site (criterium b)
        maxAge: 60 * 60 * 24 * DAGEN,
      });
      return door;
    }
  }
  return deur(request, false);
}

// ALLES, zonder uitzonderingen. Een matcher die `/api`, `_next` of `sitemap.xml` overslaat laat
// precies de dingen door die je wilde afschermen — en de deur-pagina heeft zelf geen enkel
// extern bestand nodig (alle CSS staat inline), dus er is niets dat vrijgelaten móet worden.
export const config = {
  matcher: '/:path*',
};
