// Eén bron voor alles wat op meer dan één pagina staat.
// Elk feit hieronder komt uit clients/ali-rijschool/kennisbank.md via site-copy.md — niets verzonnen.
// Wijzigt een feit daar, dan wijzigt het HIER, nooit in een pagina.

export const BEDRIJF = {
  naam: 'Autorijschool Zoetermeer',
  merk: 'Autorijschool Zoetermeer',
  kort: 'Ali',
  domein: 'alirijles.nl',
  kvk: '27252332',
  telefoonWeergave: '06 22 54 67 05',
  telefoonLink: '+31622546705',
  whatsapp: '31622546705',
  email: 'ali003170@yahoo.com',
  sinds: 2012,
  auto: 'Toyota Yaris',
};

// ── WAT DE KLANT ZELF HEEFT TOEGEZEGD OVER PROMOTIE-BERICHTEN ─────────────────────────────────
// Het tweede vinkje onder de formulieren is optioneel: de bezoeker geeft er toestemming mee voor
// berichten die niet over z'n eigen aanvraag gaan. De KALE zin daarvoor staat in
// lib/toestemming.js en doet geen enkele toezegging. Alles wat de klant er zélf bovenop heeft
// beloofd — een maximum per jaar, "nooit verkooppraat", alleen bepaalde onderwerpen — hoort HIER,
// want dat is een eigenschap van deze klant en niet van het gedeelde blok.
//
// ⚑ NOOIT INVULLEN ZONDER BRON. De zin die je hier zet wordt bij ELKE inzending als bewijsstuk
//    vastgelegd in `consent_tekst`: doet de klant later iets anders, dan ligt er bij iedere lead
//    een vastgelegde tegenspraak met onze naam eronder. `lib/toestemming.js` weigert daarom een
//    belofte zonder `bron` en valt terug op de kale zin. Vorm:
//
//      export const PROMOTIE_BELOFTE = {
//        zin: 'Maximaal 3 tot 4 keer per jaar, en nooit verkooppraat.',
//        bron: 'Ali, WhatsApp 12-08-2026: "hooguit een paar keer per jaar iets"',
//      };
//
// ⏳ NULL VOOR ALI, EN DAT IS EEN MEETRESULTAAT EN GEEN OMISSIE. Tot 03-08-2026 stond in het
//    vinkje "Maximaal 3 tot 4 keer per jaar, en nooit verkooppraat" — een belofte die niet uit
//    kennisbank.md komt en die Ali nooit gedaan heeft. Wat hij met zijn lijst wil doen is een
//    vraag die nog open staat; tot zijn antwoord doet de site hier geen toezegging.
export const PROMOTIE_BELOFTE = null;

// ── PRIJZEN ────────────────────────────────────────────────────────────────────────────────────
// Ali's eigen prijsbord, binnengekomen 02-08 (kennisbank.md §C). ELK bedrag hieronder stond
// LEESBAAR op dat bord. Wat er NIET leesbaar op stond staat hier bewust niet, en dat is geen
// slordigheid maar de regel: bij een rijschool is een verkeerd lesbedrag een prijs waar iemand
// je aan houdt.
//
// ⛔ BEWUST WEGGELATEN, wacht op Ali's bevestiging (staat als vraag in de mail van 02-08):
//   · de kolom 2009 / 2539 / 3049 / 3539 ("met examen") — losse getallen zonder leesbare
//     koppeling aan een pakket. Gokken welk bedrag bij welk pakket hoort kan niet.
//   · de PROEFLES-prijs — staat helemaal niet op het bord, terwijl de site 'm als eerste stap noemt.
//   · of deze prijzen ook BUITEN Zoetermeer gelden — het bord zegt letterlijk "voor de stad
//     Zoetermeer", terwijl de site vijf andere plaatsen als lesgebied voert.
//
// ⏳ DE ACTIE IS TIJDELIJK. Ali's bord zegt zelf "TIJDELIJK ACTIE" en "OP IS OP". Daarom staat de
//    normale prijs er ALTIJD naast: zonder einddatum van Ali mag een actieprijs niet als vaste
//    prijs gepresenteerd worden, anders staat er over drie maanden een aanbieding die niet meer geldt.
export const PRIJZEN = {
  losseLes: { normaal: 64.8, actie: 61.8 },
  lesduurMinuten: 60,
  minimumLessenVoorExamen: 10,
  actieLoopt: true,          // ← op false zodra de actie afloopt; dan verdwijnt de actie-kolom
  gebied: 'de stad Zoetermeer',
  pakketten: [
    { naam: 'A', lessen: 10, normaal: 618, actie: 600 },
    { naam: 'B', lessen: 20, normaal: 1236, actie: 1180 },
    { naam: 'C', lessen: 30, normaal: 1854, actie: 1710 },
    { naam: 'D', lessen: 40, normaal: 2472, actie: 2240 },
    { naam: 'E', lessen: 50, normaal: 3090, actie: 2750 },
    { naam: 'F', lessen: 60, normaal: 3708, actie: 3240 },
  ],
  examens: [
    { wat: 'Praktijkexamen', bedrag: 299 },
    { wat: 'Herexamen', bedrag: 299 },
    { wat: 'Tussentijdse toets', bedrag: 250 },
  ],
};

// Toont een bedrag als "64,80" — Nederlandse komma, twee decimalen alleen als ze er zijn.
export function euro(n) {
  // Nederlands: punt als duizendtal-scheider, komma voor de centen, en centen alleen als ze er zijn.
  // Handmatig en niet via toLocaleString: die leunt op de locale-data van de omgeving waar 'ie
  // draait, en dat is bij server-rendering niet dezelfde als in de browser van de bezoeker.
  const centen = Number.isInteger(n) ? '' : ',' + n.toFixed(2).slice(-2);
  const heel = String(Math.trunc(Number.isInteger(n) ? n : Number(n.toFixed(2))));
  return heel.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + centen;
}

// De canonieke basis-URL. Tot de livegang (1 september, Ali's eigen datum) is dat de preview-URL;
// op de livegang-dag wordt dit alirijles.nl en verhuizen sitemap + canonicals automatisch mee.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://alirijles.vercel.app'
).replace(/\/$/, '');

// Vaste zinnen — één keer hier, overal hergebruikt (site-copy.md "Terugkerende elementen").
export const ZINNEN = {
  cta: 'Vraag een proefles aan',
  ctaSecundair: 'Bel of app me',
  telefoonRegel:
    'Appen mag altijd, bellen tussen 09:00 en 19:00.',
  lesdagen:
    'Ik geef les op alle dagen en tijdstippen, behalve woensdagmiddag en zondagmiddag.',
  byline:
    'Geschreven door Ali, rijinstructeur sinds 2012. CBR-erkend en IBKI-gecertificeerd.',
};

// Vaste volgorde (site-structuur.md §3 — mentale modellen, nooit door elkaar husselen).
export const NAV = [
  { href: '/automaat-rijles/', label: 'Automaat' },
  { href: '/zo-werkt-het/', label: 'Zo werkt het' },
  { href: '/lesgebied/', label: 'Lesgebied' },
  { href: '/tarieven/', label: 'Tarieven' },
  { href: '/over-ali/', label: 'Over Ali' },
];

export const PLAATSEN = [
  'Zoetermeer',
  'Bleiswijk',
  'Leidschenveen',
  'Lansingerland',
  'Nootdorp',
  'Benthuizen',
];

// De keuzes van het ophaal-veld in het formulier (site-copy.md §3 van /proefles/).
export const OPHAALPLAATSEN = [
  ...PLAATSEN,
  'Den Haag Centraal',
  'Spaarneplein',
  'anders',
];

// ── Schakelaars die op een BESLISSING wachten, niet op werk ────────────────────
// Ze staan hier zodat het aanzetten één regel is en geen zoektocht door de pagina's.
export const FLAGS = {
  // De WACHTWOORD-DEUR staat bewust NIET hier maar in de env-var SITE_WACHTWOORD op het
  // Vercel-project (zie middleware.js). Reden: het wachtwoord zelf mag niet in de repo, en de
  // deur moet aan/uit kunnen zonder commit — anders is de livegang een verbouwing.
  //   aan  : python3 alpha1/scripts/livegang_klantsite.py <slug> --gate-aan
  //   uit  : python3 alpha1/scripts/livegang_klantsite.py <slug> --gate-uit
  //   stand: python3 alpha1/scripts/livegang_klantsite.py <slug> --check
  // De prijs-PDF van Ali (todo ali-prijs-pdf-binnen-of-herinneren). Tot die binnen is staat er
  // NERGENS een bedrag, geen "vanaf" en geen "binnenkort" — site-copy.md /tarieven/ is daar hard in.
  prijzen: true,   // ⚑ AAN sinds 02-08: Ali's prijsbord is binnen (kennisbank.md §C)
  // SEO-content staat op `gated` tot de 279/mo-upgrade (tool-profiel.md). De sectie blijft bestaan.
  blog: false,
  // De HighLevel-chatwidget vervangt bij de livegang het slot rechtsonder (chatbot-config.md §3).
  // Staat uit tot Ali de AI-grenzen bevestigt én de prijs-PDF binnen is.
  chatbot: false,
  // Ali noemde de GEMEENTE Lansingerland, niet de kernen Berkel en Rodenrijs en Bergschenhoek.
  // kennisbank.md §B: "Daarbuiten: niet toezeggen, eerst Ali bevestigen". Tot zijn ja blijven
  // die twee plaatsnamen van de site af (site-copy.md pagina 10, de bouw-blokkade).
  lansingerlandKernen: false,
};

export const PAGINAS = [
  { pad: '/', prio: 1.0 },
  { pad: '/automaat-rijles/', prio: 0.9 },
  { pad: '/proefles/', prio: 0.9 },
  { pad: '/zo-werkt-het/', prio: 0.8 },
  { pad: '/spoedcursus/', prio: 0.7 },
  { pad: '/tarieven/', prio: 0.8 },
  { pad: '/lesgebied/', prio: 0.7 },
  { pad: '/automaat-rijles-den-haag/', prio: 0.7 },
  { pad: '/rijschool-nootdorp/', prio: 0.6 },
  { pad: '/rijschool-lansingerland/', prio: 0.6 },
  { pad: '/rijschool-leidschenveen/', prio: 0.6 },
  { pad: '/rijschool-bleiswijk/', prio: 0.6 },
  { pad: '/over-ali/', prio: 0.7 },
  { pad: '/veelgestelde-vragen/', prio: 0.7 },
  { pad: '/contact/', prio: 0.6 },
  { pad: '/privacy/', prio: 0.3 },
];

export const whatsappLink = (tekst = 'Hoi Ali, ik heb een vraag over rijles.') =>
  `https://wa.me/${BEDRIJF.whatsapp}?text=${encodeURIComponent(tekst)}`;
