import Link from 'next/link';
import { BelKnop, Byline, CtaKnop } from '@/components/Bouwstenen';
import { BEDRIJF, ZINNEN } from '@/lib/site';

export const metadata = {
  title: 'Spoedcursus rijbewijs Zoetermeer | binnen 3 dagen',
  description:
    'Haast met je rijbewijs? Met een spoedtraject kun je binnen 3 dagen beginnen met rijlessen in Zoetermeer en omgeving.',
  alternates: { canonical: '/spoedcursus/' },
};

export default function Spoedcursus() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Spoed</span>
          <h1>Haast met je rijbewijs?</h1>
          <p className="sub">
            Met een spoedtraject kun je binnen 3 dagen beginnen. Normaal is dat binnen 8 dagen.
          </p>
          <div className="cta-rij">
            <CtaKnop />
          </div>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <div className="grid k2">
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>Wat een spoedtraject wel is</h3>
              <p>
                Sneller <strong>beginnen</strong>. In plaats van binnen 8 dagen zit je binnen 3 dagen
                in de auto, en we plannen je lessen dichter op elkaar.
              </p>
            </article>
            <article className="blok wit rv" style={{ marginTop: 0 }}>
              <h3>Wat het niet is</h3>
              <p>
                Het is geen kortere weg naar je rijbewijs. Je hebt nog steeds het aantal lessen nodig
                dat jij nodig hebt, en dat blijft gemiddeld 30 zonder ervaring en 15 met ervaring. Ik
                beloof je geen aantal lessen en ik beloof je geen examendatum: wanneer je op examen
                kunt, bepaalt het CBR.
              </p>
            </article>
          </div>
          <div className="tekst" style={{ marginTop: 26 }}>
            <p>
              Wat ik je wél kan beloven: je begint binnen 3 dagen, en je rijdt met mij.
            </p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wat kost een spoedtraject extra?</h2>
          <div className="tekst">
            <p>
              Niets. Ik reken geen toeslag voor spoed, en ook niet voor avonden of weekenden.
            </p>
          </div>
          <Link className="verder" href="/tarieven/">
            Bekijk de tarieven <span aria-hidden="true">→</span>
          </Link>
          <Byline />
        </div>
      </section>

      <section className="slot">
        <div className="wrap in">
          <h2>Bel of app me even</h2>
          <p>
            Bij haast is bellen het snelst.{' '}
            <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
              {BEDRIJF.telefoonWeergave}
            </a>
            , tussen 09:00 en 19:00. Appen mag altijd.
          </p>
          <div className="cta-rij">
            <BelKnop tekst="Hoi Ali, ik heb haast met mijn rijbewijs. Kan ik snel starten?" />
            <CtaKnop label={ZINNEN.cta} />
          </div>
        </div>
      </section>
    </>
  );
}
