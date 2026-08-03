import Link from 'next/link';
import { Byline, Slot } from '@/components/Bouwstenen';
import { PRIJZEN, euro } from '@/lib/site';

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

      {/* De prijzen komen uit PRIJZEN in lib/site.js, dat is de enige bron. Ali's eigen bord van 02-08.
          De ACTIE staat er bewust naast de normale prijs en niet in plaats daarvan: zijn bord zegt zelf
          "TIJDELIJK ACTIE" en "OP IS OP", dus een actieprijs als vaste prijs tonen is een belofte die
          over een paar maanden niet meer klopt. Loopt de actie af, dan gaat PRIJZEN.actieLoopt op false
          en verdwijnt de kolom vanzelf. Wat er BEWUST niet staat (de pakketten inclusief examen, de
          proefles-prijs, en of dit ook buiten Zoetermeer geldt) is bij Ali uitgevraagd op 02-08. */}
      <section className="strak">
        <div className="wrap">
          <h2>Lesprijzen</h2>
          <p className="sub">
            Een les duurt {PRIJZEN.lesduurMinuten} minuten. Deze prijzen gelden voor {PRIJZEN.gebied}.
          </p>

          <div className="blok wit" style={{ marginTop: 20 }}>
            <h3>Losse les</h3>
            <p style={{ fontSize: '1.6rem', margin: '8px 0' }}>
              {PRIJZEN.actieLoopt ? (
                <>
                  <strong>&euro; {euro(PRIJZEN.losseLes.actie)}</strong>{' '}
                  <span style={{ textDecoration: 'line-through', color: 'var(--mut)', fontSize: '1rem' }}>
                    &euro; {euro(PRIJZEN.losseLes.normaal)}
                  </span>
                </>
              ) : (
                <strong>&euro; {euro(PRIJZEN.losseLes.normaal)}</strong>
              )}
            </p>
            {PRIJZEN.actieLoopt && (
              <p style={{ color: 'var(--mut)', margin: 0 }}>Tijdelijke actie, op is op.</p>
            )}
          </div>

          <h3 style={{ marginTop: 28 }}>Pakketten</h3>
          <table className="prijstabel" style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid var(--line)' }}>Pakket</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid var(--line)' }}>Lessen</th>
                <th style={{ textAlign: 'right', padding: '10px 8px', borderBottom: '1px solid var(--line)' }}>Prijs</th>
              </tr>
            </thead>
            <tbody>
              {PRIJZEN.pakketten.map((p) => (
                <tr key={p.naam}>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid var(--line)' }}>Pakket {p.naam}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid var(--line)' }}>{p.lessen}</td>
                  <td style={{ padding: '10px 8px', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>
                    {PRIJZEN.actieLoopt ? (
                      <>
                        <strong>&euro; {euro(p.actie)}</strong>{' '}
                        <span style={{ textDecoration: 'line-through', color: 'var(--mut)' }}>
                          &euro; {euro(p.normaal)}
                        </span>
                      </>
                    ) : (
                      <strong>&euro; {euro(p.normaal)}</strong>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: 'var(--mut)', marginTop: 10 }}>
            Je volgt minimaal {PRIJZEN.minimumLessenVoorExamen} lessen voordat je examen doet.
          </p>

          <h3 style={{ marginTop: 28 }}>Examens</h3>
          <ul className="vinkjes">
            {PRIJZEN.examens.map((e) => (
              <li key={e.wat}>
                {e.wat}: <strong>&euro; {euro(e.bedrag)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
