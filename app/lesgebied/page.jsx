import Link from 'next/link';
import { BelKnop, Byline, CtaKnop } from '@/components/Bouwstenen';

export const metadata = {
  title: 'Lesgebied | rijles in Zoetermeer en omgeving',
  description:
    'Ik geef rijles in Zoetermeer, Bleiswijk, Leidschenveen, Lansingerland, Nootdorp en Benthuizen. Ophalen kan ook in Den Haag.',
  alternates: { canonical: '/lesgebied/' },
};

const KAARTEN = [
  { naam: 'Zoetermeer', href: '/', onder: 'Mijn thuisbasis. Ophalen kan onder andere in Centrumwest, bij de treinhalte en in Zoetermeer Oost.' },
  { naam: 'Nootdorp', href: '/rijschool-nootdorp/', onder: 'Ophalen kan bij de metrohalte.' },
  { naam: 'Lansingerland', href: '/rijschool-lansingerland/', onder: 'Ophalen kan bij station Lansingerland.' },
  { naam: 'Leidschenveen', href: '/rijschool-leidschenveen/', onder: 'Ophalen op een plek die jou uitkomt.' },
  { naam: 'Bleiswijk', href: '/rijschool-bleiswijk/', onder: 'Ophalen op een plek die jou uitkomt.' },
  { naam: 'Benthuizen', href: null, onder: 'Ook hier geef ik les. Vraag het even bij je aanvraag.' },
];

export default function Lesgebied() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Lesgebied</span>
          <h1>Waar ik lesgeef</h1>
          <p className="sub">
            Ik rijd in Zoetermeer en de omgeving daaromheen. Je wordt opgehaald op een plek die jou
            uitkomt, en na de les zet ik je daar weer af.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>De plaatsen</h2>
          <div className="plaatsen">
            {KAARTEN.map((k) =>
              k.href ? (
                <Link className="rv" key={k.naam} href={k.href}>
                  <b>{k.naam}</b>
                  <small>{k.onder}</small>
                </Link>
              ) : (
                <span className="rv" key={k.naam}>
                  <b>{k.naam}</b>
                  <small>{k.onder}</small>
                </span>
              )
            )}
          </div>

          <div className="blok">
            <h3>Ophalen in Den Haag</h3>
            <p>
              Ook in Den Haag kun je opgehaald worden: bij <strong>Den Haag Centraal</strong> en op
              het <strong>Spaarneplein</strong>.
            </p>
            <Link className="verder" href="/automaat-rijles-den-haag/">
              Meer over rijles in Den Haag <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Woon je er net buiten?</h2>
          <div className="tekst">
            <p>
              Vraag het gewoon even. Dan kijk ik of het te doen is. Ik zeg liever eerlijk nee dan dat
              ik iets toezeg wat ik niet kan waarmaken.
            </p>
          </div>
          <div className="cta-rij">
            <BelKnop tekst="Hoi Ali, ik woon net buiten je lesgebied. Kun je bij mij lesgeven?" />
            <CtaKnop />
          </div>
          <Byline />
        </div>
      </section>
    </>
  );
}
