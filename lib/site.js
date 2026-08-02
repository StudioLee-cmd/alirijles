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
  prijzen: false,
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
