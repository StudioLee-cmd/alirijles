import { BEDRIJF, PROMOTIE_BELOFTE } from '@/lib/site';

/**
 * De TEKSTEN van het toestemmings-blok. Bewust een lib-module en geen React-component:
 * de server-route moet exact dezelfde zinnen kunnen lezen als de bezoeker zag, en die kan
 * geen JSX importeren. Één bron, drie consumenten: het formulier, de /privacy/-pagina en
 * `app/api/proefles/route.js`.
 *
 * ⚑ WAT HIER STAAT IS KLANT-ONAFHANKELIJK, WAT DE KLANT BELOOFT NIET.
 * Gemeten 02-08-2026 op de eerste klantsite: het promotie-vinkje beloofde "maximaal 3 tot 4
 * keer per jaar, en nooit verkooppraat" — twee toezeggingen die de klant nooit heeft gedaan,
 * in een blok dat juist bedoeld is om door te reizen naar de volgende site. Die belofte werd
 * bij élke inzending als `consent_tekst` vastgelegd, dus 'ie was geen copy maar een bewijsstuk:
 * stuurt de klant straks wekelijks een aanbieding, dan ligt er bij elke lead een vastgelegde
 * tegenspraak met onze naam eronder.
 *
 * Daarom: de KALE zin hieronder doet geen enkele toezegging over frequentie of inhoud, en een
 * klant die zelf iets heeft toegezegd zet dat in `PROMOTIE_BELOFTE` in lib/site.js — mét de
 * bron waar 'ie dat zei. Zonder bron telt de belofte niet (zie de functie `belofte` hieronder):
 * een toezegging die we niet kunnen herleiden is een toezegging die wij bedacht hebben.
 *
 * ⚑ DE VERSIE IS AFGELEID VAN DE TEKST ZELF en niet met de hand bijgehouden. Dat moest wel:
 * zodra de tekst per klant verschilt, zou één vaste string ('v1-2026-08-02') op twee sites met
 * verschillende zinnen staan, en dan bewijst 'ie niets meer. Nu geldt: verandert er één woord,
 * dan verandert de versie mee, automatisch en op elke site apart. Oude leads dragen hun eigen
 * versie plus de letterlijke zinnen, dus die blijven leesbaar op wat ZÍJ gezien hebben.
 */

// De STRUCTUUR-versie: welke vinkjes er staan en wat ze betekenen. Deze bump je met de hand,
// en alleen als de opbouw verandert (een vinkje erbij, een vinkje niet langer verplicht).
// Tekst-wijzigingen zitten in het achtervoegsel hieronder en gaan vanzelf.
const STRUCTUUR = 'v2';

// FNV-1a, 32 bit. Klein, dependency-vrij en bit-identiek in de browser en op de server —
// dat laatste is de eis: de route moet dezelfde versie berekenen als de pagina toonde.
function vingerafdruk(tekst) {
  let h = 0x811c9dc5;
  for (let i = 0; i < tekst.length; i++) {
    h ^= tekst.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

/**
 * De belofte van de klant, of niets. FAIL-CLOSED en dat is de kern van deze fix: een
 * `PROMOTIE_BELOFTE` zonder `bron` wordt genegeerd, want dan weet niemand meer of de klant
 * het gezegd heeft of dat wij het hebben ingevuld. Weglaten is hier de veilige kant: er staat
 * dan een kale zin die misschien minder belooft dan de klant wil, en dat is te repareren —
 * een toezegging die de klant nooit deed is dat niet.
 */
function belofte() {
  const b = PROMOTIE_BELOFTE;
  if (!b || typeof b !== 'object') return null;
  const zin = typeof b.zin === 'string' ? b.zin.trim() : '';
  const bron = typeof b.bron === 'string' ? b.bron.trim() : '';
  if (!zin) return null;
  if (!bron) {
    // Niet stil: een half ingevulde belofte is een fout van ons, geen keuze van de klant.
    console.warn(
      '[toestemming] PROMOTIE_BELOFTE draagt een zin zonder bron en wordt daarom genegeerd. ' +
        'Zet erbij waar de klant dit gezegd heeft, of haal de zin weg.',
    );
    return null;
  }
  return { zin, bron };
}

// Het vinkje staat in de stem van de BEZOEKER ("... mag mijn naam gebruiken"), dus derde
// persoon met de naam van de klant erin. Die naam komt uit BEDRIJF en niet uit deze regel,
// anders zegt de volgende site die dit blok erft nog steeds "Ali".
const CONTACT = `${BEDRIJF.kort} mag mijn naam en telefoonnummer gebruiken om contact met me op te nemen over deze aanvraag.`;

// De kale promotie-zin: wél specifiek genoeg om geldige toestemming te zijn (de bezoeker weet
// van wie en waarover), maar zónder frequentie en zónder inhouds-belofte. Het afmelden staat er
// wel in: dat is geen toezegging van de klant maar een recht van de bezoeker (AVG art. 7(3)).
// `van ${merk}` valt weg als de klant onder z'n eigen merknaam werkt, anders staat er twee keer
// dezelfde naam in één zin ("StudioLee mag ... een aanbieding van StudioLee").
const VAN_MERK = BEDRIJF.merk && BEDRIJF.merk !== BEDRIJF.kort ? ` van ${BEDRIJF.merk}` : '';
const PROMOTIE_KERN = `${BEDRIJF.kort} mag me ook berichten sturen die niet over deze aanvraag gaan, zoals nieuws of een aanbieding${VAN_MERK}.`;
const PROMOTIE_AFMELDEN = 'Ik kan me hier altijd voor afmelden.';

const B = belofte();
const PROMOTIE = B
  ? `${PROMOTIE_KERN} ${B.zin} ${PROMOTIE_AFMELDEN}`
  : `${PROMOTIE_KERN} ${PROMOTIE_AFMELDEN}`;

export const TOESTEMMING = {
  versie: `${STRUCTUUR}.${vingerafdruk(`${CONTACT}|${PROMOTIE}`)}`,
  contact: CONTACT,
  promotie: PROMOTIE,
  // Alleen gevuld als de klant écht iets heeft toegezegd. Reist mee naar de ledger, zodat bij
  // élke lead terug te vinden is wáár die toezegging vandaan komt.
  beloftebron: B ? B.bron : null,
};

/**
 * Dezelfde waarheid, in de vorm die de /privacy/-pagina nodig heeft (AVG art. 13) — daar in de
 * IK-vorm, want die pagina is in de stem van de klant zelf geschreven. Staat hier en niet in
 * die pagina, want twee plekken die los van elkaar hetzelfde beloven is precies hoe de belofte
 * van 02-08 op twee oppervlakken tegelijk terechtkwam: in het vinkje én in de privacyverklaring.
 */
export const PRIVACY_PROMOTIE = B
  ? `Het tweede is vrij. Zet je dat aan, dan mag ik je ook berichten sturen die niet over je eigen aanvraag gaan. ${B.zin} Zet je het niet aan, dan hoor je alleen iets dat over je eigen aanvraag of je eigen lessen gaat.`
  : `Het tweede is vrij. Zet je dat aan, dan mag ik je ook berichten sturen die niet over je eigen aanvraag gaan, zoals nieuws of een aanbieding. Zet je het niet aan, dan hoor je alleen iets dat over je eigen aanvraag of je eigen lessen gaat.`;
