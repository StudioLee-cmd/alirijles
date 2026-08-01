import Link from 'next/link';
import ProeflesForm from '@/components/ProeflesForm';
import { Byline } from '@/components/Bouwstenen';
import { BEDRIJF, ZINNEN } from '@/lib/site';

export const metadata = {
  title: 'Proefles aanvragen | Autorijschool Zoetermeer',
  description:
    'Vraag een proefles aan bij Autorijschool Zoetermeer. Ik bel je terug om een moment af te spreken dat jou uitkomt.',
  alternates: { canonical: '/proefles/' },
};

export default function Proefles() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Proefles</span>
          <h1>Begin met een proefles</h1>
          <p className="sub">
            Eén les waarin we samen rijden en ik kijk waar je staat. Geen verplichtingen daarna, en
            je weet meteen of het klikt tussen ons.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Wat er in die eerste les gebeurt</h2>
          <div className="tekst">
            <p>
              We rijden samen, en ik let op vier dingen: hoe handig je bent achter het stuur, hoe je
              concentratie is, hoe serieus je erin zit, en hoe je het verkeer leest.
            </p>
            <p>
              Daarna vertel ik je eerlijk wat ik zie en wat ik denk dat je nodig hebt. Gemiddeld
              heeft iemand zonder rij-ervaring zo’n 30 lessen nodig en met ervaring gemiddeld 15,
              maar dat is een gemiddelde. Een exact aantal beloof ik nooit, want dat verschilt echt
              per persoon.
            </p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="formblok">
          <div className="in">
            <div>
              <span className="kick">Aanvragen</span>
              <h2>Vraag je proefles aan</h2>
              <p>Vul je gegevens in, dan bel ik je terug om een moment af te spreken.</p>
              <p className="direct">
                Liever direct contact?{' '}
                <a href={`tel:${BEDRIJF.telefoonLink}`}>{BEDRIJF.telefoonWeergave}</a>
                <br />
                {ZINNEN.telefoonRegel}
              </p>
            </div>
            <ProeflesForm />
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wat er daarna gebeurt</h2>
          <div className="grid k3 stappen">
            <article className="stap rv">
              <h3>Ik krijg je aanvraag binnen</h3>
              <p>Je hoeft verder niets te doen.</p>
            </article>
            <article className="stap rv">
              <h3>Ik bel je terug</h3>
              <p>Om samen een moment te prikken. Meestal dezelfde of de volgende dag.</p>
            </article>
            <article className="stap rv">
              <h3>We rijden je proefles</h3>
              <p>En daarna weet je waar je staat.</p>
            </article>
          </div>
          <div className="tekst" style={{ marginTop: 26 }}>
            <p>
              Normaal kun je binnen 8 dagen beginnen. Heb je haast, dan kan het binnen 3 dagen.
            </p>
          </div>
          <Link className="verder" href="/spoedcursus/">
            Lees meer over het spoedtraject <span aria-hidden="true">→</span>
          </Link>
          <Byline />
        </div>
      </section>
    </>
  );
}
