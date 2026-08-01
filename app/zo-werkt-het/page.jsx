import Link from 'next/link';
import { Byline, Slot } from '@/components/Bouwstenen';

export const metadata = {
  title: 'Zo werkt het | van proefles tot praktijkexamen',
  description:
    'Van proefles tot praktijkexamen, stap voor stap. Hoeveel lessen je gemiddeld nodig hebt en hoe snel je kunt beginnen.',
  alternates: { canonical: '/zo-werkt-het/' },
};

export default function ZoWerktHet() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Het traject</span>
          <h1>Van proefles tot rijbewijs</h1>
          <p className="sub">
            Vier stappen. Geen verrassingen, en je weet na elke les waar je staat.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap tekst">
          <h2>Stap 1 — De proefles</h2>
          <p>
            We rijden samen en ik schat in waar je staat: je handigheid, je concentratie, hoe serieus
            je erin zit en je verkeersinzicht. Daarna vertel ik je eerlijk wat ik zie.
          </p>
          <Link className="verder" href="/proefles/">
            Vraag een proefles aan <span aria-hidden="true">→</span>
          </Link>

          <h2>Stap 2 — Het lesplan</h2>
          <p>
            Op basis van de proefles bespreken we hoe we het aanpakken. Losse lessen of een pakket
            inclusief het praktijkexamen: dat kies je zelf.
          </p>
          <p>
            <strong>Hoeveel lessen heb ik nodig?</strong> Gemiddeld 30 als je nog nooit gereden hebt,
            gemiddeld 15 als je al ervaring hebt. Ben je een keer gezakt en ga je voor een herexamen,
            dan zijn dat er gemiddeld 8 extra. Dit zijn gemiddelden uit de praktijk. Een exact aantal
            beloof ik je nooit, want dat verschilt per persoon.
          </p>

          <h2>Stap 3 — De lessen, en tussentijds bijsturen</h2>
          <p>
            We rijden, en na elke les hoor je waar je staat. Als je ergens op vastloopt, pakken we dat
            aan voordat het een gewoonte wordt. Dat is waar ik goed in ben: het probleem eruit halen
            en er de goede oplossing bij zoeken.
          </p>

          <h2>Stap 4 — Het praktijkexamen</h2>
          <p>
            Als je eraan toe bent, ga je op voor je praktijkexamen. Je rijdt dat in dezelfde auto
            waarin je al je lessen hebt gehad. Wanneer je terecht kunt bepaalt het CBR, dus daar doe
            ik geen toezeggingen over.
          </p>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <div className="grid k2">
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>Hoe snel kan ik beginnen?</h3>
              <p>
                Normaal kun je binnen 8 dagen starten. Met een spoedtraject binnen 3 dagen.
              </p>
              <Link className="verder" href="/spoedcursus/">
                Lees meer over het spoedtraject <span aria-hidden="true">→</span>
              </Link>
            </article>
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>En de theorie?</h3>
              <p>Koop je een pakket bij me, dan krijg je de theorie er gratis bij.</p>
              <Link className="verder" href="/tarieven/">
                Bekijk de tarieven <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
          <Byline />
        </div>
      </section>

      <Slot kop="Beginnen bij stap 1?" tekst="Eén les, en je weet waar je staat." />
    </>
  );
}
