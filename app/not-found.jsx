import Link from 'next/link';
import { CtaKnop } from '@/components/Bouwstenen';

export const metadata = { title: 'Pagina niet gevonden | Autorijschool Zoetermeer' };

export default function NietGevonden() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 640, textAlign: 'center' }}>
        <span className="kick">Verkeerd afgeslagen</span>
        <h1 style={{ margin: '14px 0 16px' }}>Deze pagina bestaat niet</h1>
        <p className="lead" style={{ margin: '0 auto' }}>
          Misschien is de link verouderd. Ga terug naar de homepage of vraag meteen een proefles aan.
        </p>
        <div className="cta-rij" style={{ justifyContent: 'center' }}>
          <Link className="btn ghost" href="/">
            Naar de homepage
          </Link>
          <CtaKnop />
        </div>
      </div>
    </section>
  );
}
