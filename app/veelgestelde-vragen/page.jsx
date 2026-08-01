import Faq from '@/components/Faq';
import { BelKnop, Byline, CtaKnop } from '@/components/Bouwstenen';
import { faqSchema, JsonLd } from '@/lib/schema';

export const metadata = {
  title: 'Veelgestelde vragen | Autorijschool Zoetermeer',
  description:
    'Hoeveel lessen heb je nodig, hoe snel kun je starten, kun je in termijnen betalen? De antwoorden op een rij.',
  alternates: { canonical: '/veelgestelde-vragen/' },
};

// Alle antwoorden zijn Ali's eigen antwoorden uit kennisbank.md §F, §B, §D en §G.
// ⚠️ Drie veelgezochte vragen staan hier bewust NIET: vanaf welke leeftijd mag je rijles,
//    moet je je theorie al hebben vóór je eerste rijles, en hoe lang duurt een rijles.
//    Samen 960 zoekopdrachten/mnd op KD 0, maar het antwoord staat niet in de kennisbank en
//    verzinnen is verboden. Drie zinnen van Ali maken ze alle drie beantwoordbaar —
//    site-structuur.md §8 vragen 4 en 5.
const VRAGEN = [
  {
    v: 'Hoeveel lessen heb ik nodig?',
    a: 'Gemiddeld 30 als je nog geen rij-ervaring hebt, gemiddeld 15 als je die wel hebt. Ga je voor een herexamen, dan zijn dat gemiddeld 8 lessen extra. Een exact aantal beloof ik nooit, want dat verschilt per persoon.',
  },
  {
    v: 'Wat kost mijn rijbewijs in totaal?',
    a: 'Het halen van een autorijbewijs kost ongeveer €3.050, bij gemiddeld 45 lessen, in een automaat. Dat is een indicatie en geen offerte. Wat het voor jou wordt, kan ik pas zeggen na je proefles.',
  },
  {
    v: 'Doen jullie ook theorie?',
    a: 'Theorie krijg je gratis van mij als je een pakket koopt.',
  },
  {
    v: 'Schakel of automaat?',
    a: 'Ik geef uitsluitend les in een automaat, in een Toyota Yaris.',
  },
  {
    v: 'Hoe snel kan ik starten of afrijden?',
    a: 'Regulier kun je binnen 8 dagen starten, met spoed binnen 3 dagen. Binnen een maand na je laatste betaaltermijn kun je afrijden. Wanneer je op examen kunt, bepaalt het CBR.',
  },
  {
    v: 'Wat als ik niet tevreden ben over een les?',
    a: 'Als je na een rijles niet tevreden bent over díe les, mag je het lesgeld van die specifieke les terugvragen.',
  },
  {
    v: 'Kan ik in termijnen betalen?',
    a: 'Ja, als het pakket het praktijkexamen bevat. Het examengeld betaal je vooraf. De rest mag gespreid, mits alles voldaan is voordat 70% van de lessen gereden is.',
  },
  {
    v: 'In welke plaatsen geef je les?',
    a: 'Zoetermeer, Bleiswijk, Leidschenveen, Lansingerland, Nootdorp en Benthuizen. Ophalen kan ook bij Den Haag Centraal en op het Spaarneplein. Woon je er net buiten, vraag het dan even.',
  },
  {
    v: 'Wanneer kan ik les krijgen?',
    a: 'Op alle dagen en tijdstippen, behalve woensdagmiddag en zondagmiddag.',
  },
  {
    v: 'Hoe bereik ik je?',
    a: 'Op 06 22 54 67 05. Appen mag altijd, bellen kan tussen 09:00 en 19:00. Aanvragen doe je het makkelijkst via het formulier.',
  },
  {
    v: 'Do you give lessons in English?',
    a: 'Yes, I also give driving lessons in English.',
  },
  {
    v: 'Geef je ook les op motor, bromfiets of met een aanhanger?',
    a: 'Nee. Ik geef uitsluitend rijles voor rijbewijs B in een automaat.',
  },
];

export default function Vragen() {
  return (
    <>
      <JsonLd data={faqSchema(VRAGEN)} />

      <div className="hero smal">
        <div>
          <span className="kick">Antwoorden</span>
          <h1>Veelgestelde vragen</h1>
          <p className="sub">
            De vragen die ik het vaakst krijg, met mijn eigen antwoord erbij.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <Faq items={VRAGEN} />
          <Byline />
        </div>
      </section>

      <section className="slot">
        <div className="wrap in">
          <h2>Staat je vraag er niet bij?</h2>
          <p>Stel 'm gewoon, dan geef ik je gewoon antwoord.</p>
          <div className="cta-rij">
            <BelKnop tekst="Hoi Ali, ik heb een vraag over rijles." />
            <CtaKnop />
          </div>
        </div>
      </section>
    </>
  );
}
