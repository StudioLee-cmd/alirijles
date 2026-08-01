import Link from 'next/link';
import { Byline, CtaKnop, Slot } from '@/components/Bouwstenen';
import { ZINNEN } from '@/lib/site';

export const metadata = {
  title: 'Automaat rijles Den Haag | ophalen bij CS en Spaarneplein',
  description:
    'Rijles in een automaat, met ophalen bij Den Haag Centraal of op het Spaarneplein. Altijd dezelfde instructeur, sinds 2012.',
  alternates: { canonical: '/automaat-rijles-den-haag/' },
};

export default function DenHaag() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Den Haag</span>
          <h1>Automaat rijles met ophalen in Den Haag</h1>
          <p className="sub">
            Ik haal je op bij <strong>Den Haag Centraal</strong> of op het{' '}
            <strong>Spaarneplein</strong>, en daar zet ik je na je les ook weer af. Je rijdt in een
            automaat, een Toyota Yaris, en altijd met mij.
          </p>
          <div className="cta-rij">
            <CtaKnop />
          </div>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Waar ik je ophaal</h2>
          <div className="grid k2">
            <article className="kaart rv">
              <h3>Den Haag Centraal</h3>
              <p>Kom je met de trein of de tram, dan is dit het makkelijkste punt.</p>
            </article>
            <article className="kaart rv">
              <h3>Spaarneplein</h3>
              <p>Vlak bij het station, handig als je in de buurt woont.</p>
            </article>
          </div>
          <div className="tekst" style={{ marginTop: 24 }}>
            <p>
              Woon je ergens anders in Den Haag? Vraag het even, dan kijk ik of het te doen is.
            </p>
            <p>{ZINNEN.lesdagen}</p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Waarom automaat</h2>
          <div className="tekst">
            <p>
              Ik geef uitsluitend les in een automaat. Geen koppeling en geen schakelmomenten, dus je
              aandacht kan meteen naar het verkeer. Voor veel mensen gaat het daardoor sneller.
            </p>
          </div>
          <Link className="verder" href="/automaat-rijles/">
            Lees meer over rijles in een automaat <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wat je bij mij krijgt</h2>
          <ul className="vinkjes">
            <li>Altijd dezelfde instructeur: ik rijd alleen</li>
            <li>Rijschoolhouder sinds 2012, CBR-erkend en IBKI-gecertificeerd</li>
            <li>Ook les in het Engels</li>
            <li>Les op alle dagen, behalve woensdagmiddag en zondagmiddag</li>
            <li>Beginnen kan binnen 8 dagen, met spoed binnen 3 dagen</li>
          </ul>

          <div className="buren">
            <Link href="/lesgebied/">← Lesgebied</Link>
            <Link href="/rijschool-leidschenveen/">Leidschenveen</Link>
            <Link href="/rijschool-nootdorp/">Nootdorp</Link>
          </div>
          <Byline />
        </div>
      </section>

      <Slot
        kop="Beginnen met een proefles"
        tekst="Eén les waarin we samen rijden en ik kijk waar je staat."
      />
    </>
  );
}
