import fs from 'node:fs';
import path from 'node:path';

export const ARTIKELEN = [
  {
    slug: 'spanning-voor-je-rijles',
    titel: 'Spanning voor je rijles: zo bespreek je die',
    omschrijving: 'Spanning voor je rijles? Lees hoe je lastige momenten bespreekt, vragen stelt en met je instructeur een duidelijk leerdoel kiest.',
    datum: '2026-10-25',
    beeld: '/images/blog/spanning-voor-je-rijles.webp',
    alt: 'Clayillustratie van een lesauto en gespreksballonnen met de titel Spanning voor je rijles.',
  },
  {
    slug: 'kijktechniek-tijdens-rijles',
    titel: 'Kijktechniek tijdens rijles: leren vooruitkijken',
    omschrijving: 'Leren vooruitkijken en spiegelen tijdens rijles? Begrijp welke informatie je zoekt en welke vragen je daarover aan je instructeur stelt.',
    datum: '2026-10-25',
    beeld: '/images/blog/kijktechniek-tijdens-rijles.webp',
    alt: 'Clayillustratie van een lesauto, weg en achteruitkijkspiegel met de titel Kijktechniek tijdens rijles.',
  },
  {
    slug: 'eerste-rijles-automaat-wat-verwachten',
    titel: 'Je eerste rijles in een automaat: wat kun je verwachten?',
    omschrijving: 'Binnenkort je eerste rijles in een automaat? Lees hoe je je voorbereidt, wat je oefent en welke vragen je na de proefles kunt stellen.',
    datum: '2026-10-08',
    beeld: '/images/blog/eerste-rijles-automaat.webp',
    alt: 'Clayillustratie van een lesauto met de titel Je eerste rijles in een automaat.',
  },
  {
    slug: 'rijlespakket-kiezen',
    titel: 'Rijlespakket kiezen: waar let je op?',
    omschrijving: 'Een rijlespakket kiezen begint met je startpunt. Vergelijk lestijd, inbegrepen onderdelen en afspraken voordat je een pakket neemt.',
    datum: '2026-10-08',
    beeld: '/images/blog/rijlespakket-kiezen.webp',
    alt: 'Clayillustratie van een lesauto, checklist en klok met de titel Een rijlespakket kiezen.',
  },
];

export function artikelTekst(slug) {
  if (!ARTIKELEN.some((artikel) => artikel.slug === slug)) return null;
  return fs.readFileSync(path.join(process.cwd(), 'content', 'blog', `${slug}.html`), 'utf8');
}
