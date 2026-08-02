import Link from 'next/link';

/**
 * Het toestemmings-blok van een lead-formulier. Twee vinkjes, bewust gescheiden.
 *
 * ⚑ WAAROM DIT EEN EIGEN COMPONENT IS EN GEEN PAAR REGELS IN HET FORMULIER.
 * Gemeten 02-08-2026 over de hele vloot: 34 formulieren die persoonsgegevens vragen, 30 zonder
 * enig vinkje. Het juiste vinkje was één keer goed gebouwd (op free-trial) en is nooit het
 * PATROON geworden — juist het herbruikbare contact-blok droeg 'm niet, dus elke site die
 * daaruit gekopieerd werd startte zonder. Eén component, en de volgende site erft 'm gratis.
 *
 * ⚑ DE TEKST IS DATA, GEEN OPMAAK. Wat hier staat reist bij élke inzending mee naar de ledger
 * (`consent_tekst` + `consent_versie`), want een vinkje zonder vastgelegde tekst is over een jaar
 * waardeloos: je weet dan wél dat iemand ja zei en niet meer waaróp. Verandert er een woord
 * hieronder, dan verandert VERSIE mee — de oude rijen blijven bewijzen wat zíj gezien hebben.
 */
export const TOESTEMMING = {
  versie: 'v1-2026-08-02',
  contact:
    'Ali mag mijn naam en telefoonnummer gebruiken om contact met me op te nemen over deze aanvraag.',
  promotie:
    'Ali mag me af en toe iets sturen over de rijschool. Maximaal 3 tot 4 keer per jaar, en nooit verkooppraat.',
};

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
