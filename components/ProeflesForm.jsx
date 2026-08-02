'use client';

import { useRef, useState } from 'react';
import { BEDRIJF, OPHAALPLAATSEN, ZINNEN, whatsappLink } from '@/lib/site';
import Toestemming, { TOESTEMMING } from '@/components/Toestemming';

const ONDERWERPEN = ['Proefles aanvragen', 'Terugbelverzoek', 'Een andere vraag'];

/**
 * Het aanvraagformulier. Twee varianten uit één component (site-copy.md /proefles/ §3 en
 * /contact/ §4): de contactvariant heeft één extra keuzeveld, de rest is identiek.
 *
 * ⚑ Dit formulier PLANT NIETS IN. Ali's eigen antwoord in de vragenlijst (§L) was: voorlopig
 * alleen het verzoek noteren. Er wordt dus nooit een tijdstip toegezegd en er is geen
 * agenda-koppeling. Het veld `voorkeur_moment` wordt wél al uitgevraagd en meegestuurd, zodat
 * de koppeling later inplugbaar is en geen enkele lead z'n voorkeur mist (chatbot-config.md §2).
 */
export default function ProeflesForm({ variant = 'proefles' }) {
  const [staat, setStaat] = useState('leeg'); // leeg | bezig | klaar | fout
  const [fouten, setFouten] = useState({});
  const [melding, setMelding] = useState('');
  const formRef = useRef(null);

  const contact = variant === 'contact';

  const valideer = (data) => {
    const f = {};
    if (!String(data.naam || '').trim()) f.naam = 'Vul je naam in.';
    const tel = String(data.telefoon || '').replace(/[\s-]/g, '');
    if (!tel) f.telefoon = 'Vul je telefoonnummer in.';
    else if (!/^(\+?\d{8,15})$/.test(tel))
      f.telefoon = 'Dit lijkt geen telefoonnummer. Controleer het even.';
    // Zonder dit vinkje mag ik niet terugbellen, dus dan heeft versturen geen zin.
    if (!data.consent_contact) f.consent = 'Zet dit vinkje aan, anders mag ik je niet terugbellen.';
    return f;
  };

  const verstuur = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const f = valideer(data);
    setFouten(f);
    if (Object.keys(f).length) {
      const eerste = formRef.current?.querySelector('[aria-invalid="true"]');
      eerste?.focus();
      return;
    }

    setStaat('bezig');
    try {
      // mét slash: next.config zet trailingSlash aan, dus /api/proefles zou eerst 308'en
      const res = await fetch('/api/proefles/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // De toestemming reist als DATA mee, niet als tekst op de pagina: twee booleans plus de
        // exacte zinnen waar deze bezoeker ja op zei. Het moment zet de server zelf (§route.js).
        body: JSON.stringify({
          ...data,
          formulier: variant,
          consent_contact: Boolean(data.consent_contact),
          consent_promotie: Boolean(data.consent_promotie),
          consent_versie: TOESTEMMING.versie,
          consent_tekst: { contact: TOESTEMMING.contact, promotie: TOESTEMMING.promotie },
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStaat('klaar');
    } catch (err) {
      setStaat('fout');
      setMelding(
        'Er ging iets mis met versturen. Bel of app me even, dan regelen we het meteen.'
      );
    }
  };

  if (staat === 'klaar') {
    return (
      <div className="gelukt" role="status">
        <h3>Je aanvraag staat genoteerd</h3>
        <p style={{ color: 'var(--bg-75)' }}>
          Ik bel je terug om samen een moment te prikken. Meestal dezelfde of de volgende dag.
        </p>
        <ol>
          <li>Ik krijg je aanvraag binnen.</li>
          <li>Ik bel je terug om een moment af te spreken.</li>
          <li>We rijden je proefles, en daarna weet je waar je staat.</li>
        </ol>
        <p style={{ marginTop: 16, color: 'var(--bg-75)' }}>
          Liever nu al contact?{' '}
          <a
            href={`tel:${BEDRIJF.telefoonLink}`}
            style={{ color: 'var(--sun)', fontWeight: 700 }}
          >
            {BEDRIJF.telefoonWeergave}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="aanvraag" onSubmit={verstuur} noValidate ref={formRef}>
      {contact ? (
        <div className="veld">
          <label htmlFor="onderwerp">Waar gaat je bericht over?</label>
          <select id="onderwerp" name="onderwerp" defaultValue={ONDERWERPEN[0]}>
            {ONDERWERPEN.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="rij2">
        <div className="veld">
          <label htmlFor="naam">
            Je naam <span className="req">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            autoComplete="name"
            aria-invalid={fouten.naam ? 'true' : undefined}
            aria-describedby={fouten.naam ? 'fout-naam' : undefined}
          />
          {fouten.naam ? (
            <span className="fout" id="fout-naam">
              {fouten.naam}
            </span>
          ) : null}
        </div>

        <div className="veld">
          <label htmlFor="telefoon">
            Je telefoonnummer <span className="req">*</span>
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={fouten.telefoon ? 'true' : undefined}
            aria-describedby={fouten.telefoon ? 'fout-telefoon' : undefined}
          />
          {fouten.telefoon ? (
            <span className="fout" id="fout-telefoon">
              {fouten.telefoon}
            </span>
          ) : null}
        </div>
      </div>

      <div className="veld">
        <label htmlFor="ophaalplaats">Waar wil je opgehaald worden?</label>
        <select id="ophaalplaats" name="ophaalplaats" defaultValue="">
          <option value="">Kies een plaats</option>
          {OPHAALPLAATSEN.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="veld">
        <label htmlFor="voorkeur_moment">Wanneer schikt het je ongeveer?</label>
        <input
          id="voorkeur_moment"
          name="voorkeur_moment"
          placeholder="Bijvoorbeeld: doordeweeks 's avonds"
        />
      </div>

      <div className="veld">
        <label htmlFor="bericht">Wil je iets kwijt?</label>
        <textarea id="bericht" name="bericht" rows={3} />
      </div>

      {/* spam-val: onzichtbaar voor mensen, ingevuld door bots */}
      <div className="honing" aria-hidden="true">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Toestemming fout={fouten.consent} />

      <button className="btn" type="submit" disabled={staat === 'bezig'}>
        {staat === 'bezig' ? 'Versturen…' : 'Verstuur mijn aanvraag'}
      </button>

      {staat === 'fout' ? (
        <p className="fout" role="alert">
          {melding}{' '}
          <a
            href={whatsappLink('Hoi Ali, ik wil graag een proefles aanvragen.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--sun)' }}
          >
            {ZINNEN.ctaSecundair}
          </a>
        </p>
      ) : null}
    </form>
  );
}
