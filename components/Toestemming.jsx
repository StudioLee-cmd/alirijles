import Link from 'next/link';
import { TOESTEMMING } from '@/lib/toestemming';

/**
 * Het toestemmings-blok van een lead-formulier. Twee vinkjes, bewust gescheiden.
 *
 * ⚑ WAAROM DIT EEN EIGEN COMPONENT IS EN GEEN PAAR REGELS IN HET FORMULIER.
 * Gemeten 02-08-2026 over de hele vloot: 34 formulieren die persoonsgegevens vragen, 30 zonder
 * enig vinkje. Het juiste vinkje was één keer goed gebouwd (op free-trial) en is nooit het
 * PATROON geworden — juist het herbruikbare contact-blok droeg 'm niet, dus elke site die
 * daaruit gekopieerd werd startte zonder. Eén component, en de volgende site erft 'm gratis.
 *
 * ⚑ DE TEKST STAAT HIER NIET MEER, EN DAT IS DE HELE FIX (03-08-2026). De zinnen komen uit
 * `lib/toestemming.js`, en die bouwt ze uit `BEDRIJF` + `PROMOTIE_BELOFTE` in lib/site.js.
 * Reden: tot 03-08 stond hier letterlijk "Ali mag me af en toe iets sturen over de rijschool.
 * Maximaal 3 tot 4 keer per jaar, en nooit verkooppraat" — twee toezeggingen namens een klant
 * die geen van beide had gedaan, in een blok dat juist bedoeld is om naar de volgende site te
 * reizen. De tekst is bovendien DATA en geen opmaak: 'ie reist bij élke inzending mee naar de
 * ledger (`consent_tekst` + `consent_versie`), dus 'ie ligt bij iedere lead vast als bewijsstuk
 * van wat er beloofd is. Een belofte hoort dus bij de klant thuis, niet bij het blok.
 */

// Doorgeven, zodat wie dit blok gebruikt niet twee imports nodig heeft. De bron blijft
// lib/toestemming.js — hier staat geen tekst, alleen de doorgifte.
export { TOESTEMMING };

export default function Toestemming({ fout }) {
  return (
    <div className="toestemming">
      <div className="vink">
        <input
          id="consent_contact"
          name="consent_contact"
          type="checkbox"
          required
          aria-invalid={fout ? 'true' : undefined}
          aria-describedby={fout ? 'fout-consent' : 'uitleg-consent'}
        />
        <label htmlFor="consent_contact">
          {TOESTEMMING.contact} <span className="req">*</span>
        </label>
      </div>

      <div className="vink">
        <input id="consent_promotie" name="consent_promotie" type="checkbox" />
        <label htmlFor="consent_promotie">{TOESTEMMING.promotie}</label>
      </div>

      {fout ? (
        <span className="fout" id="fout-consent">
          {fout}
        </span>
      ) : null}

      <span className="fnote" id="uitleg-consent">
        Je gegevens gebruik ik alleen waar je hierboven ja op zegt. Ik plan niets automatisch in.
        We spreken het moment samen af. Wat ik bewaar en hoe lang staat in de{' '}
        <Link className="inline" href="/privacy/">
          privacyverklaring
        </Link>
        .
      </span>
    </div>
  );
}
