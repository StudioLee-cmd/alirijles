import Link from 'next/link';
import { Byline, Slot } from '@/components/Bouwstenen';

export const metadata = {
  title: 'Tarieven | Autorijschool Zoetermeer',
  description:
    'Wat rijles bij mij kost, hoe je in termijnen kunt betalen en wat er gebeurt als je niet tevreden bent over een les.',
  alternates: { canonical: '/tarieven/' },
};

export default function Tarieven() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Tarieven</span>
          <h1>Wat het kost</h1>
          <p className="sub">
            Een rijbewijs halen kost ongeveer €3.050 en gemiddeld 45 lessen, in een automaat. Dat is
            een indicatie uit mijn eigen praktijk, geen offerte. Wat jij nodig hebt, weet ik pas na
            je proefles.
          </p>
        </div>
      </div>

      {/* ⛔ De losse lesprijs, de proefles-prijs en de pakketten komen uit Ali's prijs-PDF
          (kennisbank.md §C: "dat stuur ik jou in een PDF"). Tot die er is staat hier NIETS:
          geen bedrag, geen "vanaf", geen "binnenkort". Een lege sectie is beter dan een
          verkeerd getal, en Ali is de enige die deze getallen mag leveren.
          Aanzetten: FLAGS.prijzen in lib/site.js — todo ali-prijssectie-na-de-pdf. */}

      <section className="strak">
        <div className="wrap tekst">
          <h2>Betalen in termijnen</h2>
          <p>
            Koop je een pakket inclusief het praktijkexamen, dan hoef je niet alles in één keer te
            betalen.
          </p>
          <ul className="vinkjes">
            <li>
              Het <strong>examengeld</strong> betaal je vooraf.
            </li>
            <li>
              Het <strong>resterende bedrag</strong> mag je spreiden.
            </li>
            <li>
              De voorwaarde: het volledige bedrag is betaald voordat je 70% van de lessen uit je
              pakket gereden hebt.
            </li>
          </ul>
          <p style={{ marginTop: 16 }}>Losse lessen betaal je per les.</p>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <div className="grid k2">
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>Wat er niet bijkomt</h3>
              <p>Geen toeslag voor avonden, weekenden of spoed. Die reken ik niet.</p>
              <p>En koop je een pakket, dan krijg je de theorie er gratis bij.</p>
            </article>
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>Niet tevreden over een les?</h3>
              <p>
                Als je na een rijles niet tevreden bent over díe les, mag je het lesgeld van die
                specifieke les terugvragen. Zeg het gewoon tegen me.
              </p>
            </article>
          </div>
          <Link className="verder" href="/veelgestelde-vragen/">
            Bekijk de veelgestelde vragen <span aria-hidden="true">→</span>
          </Link>
          <Byline />
        </div>
      </section>

      <Slot
        kop="Weten wat het voor jou wordt?"
        tekst="Dat kan ik je pas eerlijk zeggen na een proefles."
      />
    </>
  );
}
