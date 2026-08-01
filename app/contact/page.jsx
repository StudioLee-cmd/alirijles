import Link from 'next/link';
import ProeflesForm from '@/components/ProeflesForm';
import { Byline } from '@/components/Bouwstenen';
import { BEDRIJF, ZINNEN, whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Contact | Autorijschool Zoetermeer',
  description:
    'Bel of app 06 22 54 67 05, of vraag online een proefles aan. Appen mag altijd, bellen tussen 09:00 en 19:00.',
  alternates: { canonical: '/contact/' },
};

export default function Contact() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Contact</span>
          <h1>Contact</h1>
          <p className="sub">
            Het makkelijkst is een berichtje. Appen mag altijd, bellen kan tussen 09:00 en 19:00.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Zo bereik je me</h2>
          <div className="grid k3">
            <article className="kaart rv">
              <h3>Telefoon en WhatsApp</h3>
              <p>
                <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
                  {BEDRIJF.telefoonWeergave}
                </a>
                <br />
                Appen mag op elk moment. Bellen kan tussen 09:00 en 19:00.
                <br />
                <a
                  className="inline"
                  href={whatsappLink('Hoi Ali, ik heb een vraag.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stuur een appje
                </a>
              </p>
            </article>
            <article className="kaart rv">
              <h3>E-mail</h3>
              <p>
                <a className="inline" href={`mailto:${BEDRIJF.email}`}>
                  {BEDRIJF.email}
                </a>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Online</h3>
              <p>
                <Link className="inline" href="/proefles/">
                  Vraag een proefles aan
                </Link>
                , dan bel ik je terug.
              </p>
            </article>
          </div>

          <div className="blok">
            <h3>Wanneer ik lesgeef</h3>
            <p>
              Op alle dagen en tijdstippen, behalve <strong>woensdagmiddag</strong> en{' '}
              <strong>zondagmiddag</strong>.
            </p>
            <p style={{ marginTop: 14 }}>
              {BEDRIJF.naam} · KvK {BEDRIJF.kvk}
            </p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="formblok">
          <div className="in">
            <div>
              <span className="kick">Bericht</span>
              <h2>Stuur me een bericht</h2>
              <p>
                Laat je naam en je telefoonnummer achter, dan bel ik je terug. {ZINNEN.telefoonRegel}
              </p>
              <p className="direct">
                Liever direct?{' '}
                <a href={`tel:${BEDRIJF.telefoonLink}`}>{BEDRIJF.telefoonWeergave}</a>
              </p>
            </div>
            <ProeflesForm variant="contact" />
          </div>
        </div>
        <div className="wrap">
          <Byline />
        </div>
      </section>
    </>
  );
}
