import Link from 'next/link';
import { BelKnop, Byline, CtaKnop, Slot } from '@/components/Bouwstenen';

export const metadata = {
  title: 'Automaat rijles Zoetermeer | uitsluitend automaat',
  description:
    'Ik geef uitsluitend rijles in een automaat, in een Toyota Yaris. Wat dat betekent voor je rijbewijs en voor je lessen.',
  alternates: { canonical: '/automaat-rijles/' },
};

export default function AutomaatRijles() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Automaat</span>
          <h1>Rijles in een automaat, en niets anders</h1>
          <p className="sub">
            Geen schakelen, geen koppeling, geen afslaan bij het stoplicht. Al je aandacht gaat naar
            het verkeer. Ik rijd in één auto, een Toyota Yaris automaat, en daar leer je in.
          </p>
          <div className="cta-rij">
            <CtaKnop />
          </div>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Waarom ik alleen automaat doe</h2>
          <div className="tekst">
            <p>
              Dat is een keuze, geen beperking. Ik geef al sinds 2012 rijles en ik doe één ding, in
              één auto, met één instructeur: ik. Daardoor ken ik die auto en die lessen door en door,
              en jij rijdt elke keer in precies dezelfde auto waarin je straks examen doet.
            </p>
            <p>
              Voor veel mensen gaat leren rijden in een automaat ook gewoon sneller. Je hoeft niet
              twee dingen tegelijk te leren, dus je kunt je meteen op het verkeer richten.
            </p>
          </div>
        </div>
      </section>

      <div className="citaat">
        <section>
          <div className="wrap">
            <h2>“Mag ik met een automaat-rijbewijs later ook een andere auto rijden?”</h2>
            <div className="tekst">
              <p>
                Dat hangt af van je situatie en van de regels die het CBR daarvoor hanteert. Ik geef
                zelf uitsluitend les in een automaat, dus ik ga je daar geen halve uitleg over geven.
                Vraag het me gerust, dan vertel ik je precies hoe het voor jou zit.
              </p>
            </div>
            <div className="cta-rij">
              <BelKnop tekst="Hoi Ali, ik heb een vraag over het automaat-rijbewijs." />
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="wrap">
          <span className="kick">Wat je krijgt</span>
          <h2>Wat je bij mij krijgt</h2>
          <div className="grid k2">
            <article className="kaart rv">
              <h3>Altijd dezelfde instructeur</h3>
              <p>
                Je rijdt elke les met mij. Geen wisselende invallers, geen nieuw gezicht dat opnieuw
                moet uitzoeken waar je staat.
              </p>
            </article>
            <article className="kaart rv">
              <h3>Sinds 2012, CBR-erkend en IBKI-gecertificeerd</h3>
              <p>
                Ik doe dit al ruim veertien jaar. Mijn rijschool is erkend door het CBR en ik ben
                IBKI-gecertificeerd als instructeur.
              </p>
            </article>
            <article className="kaart rv">
              <h3>Ook les in het Engels</h3>
              <p>
                Spreek je liever Engels, dan kan dat. <em>I also give driving lessons in English.</em>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Duidelijk en geduldig</h3>
              <p>Ik leg uit tot je het snapt. Zo vaak als nodig is.</p>
            </article>
          </div>
          <p style={{ marginTop: 26 }}>
            <Link className="verder" href="/automaat-rijles-den-haag/">
              Automaat rijles met ophalen in Den Haag <span aria-hidden="true">→</span>
            </Link>
          </p>
          <Byline />
        </div>
      </section>

      <Slot
        kop="Wil je weten of automaat bij je past?"
        tekst="Plan een proefles. Dan rijden we samen en weet je het na een uur."
      />
    </>
  );
}
