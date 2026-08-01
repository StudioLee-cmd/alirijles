import Link from 'next/link';
import { Byline, CtaKnop, Slot } from '@/components/Bouwstenen';
import { ZINNEN } from '@/lib/site';

/**
 * Eén template voor de locatiepagina's, lokaal ingevuld (site-copy.md "De vier locatiepagina's").
 * Alleen de plaatsnaam, de ophaalzin en de ophaalpunt-alinea verschillen — de rest is bewust
 * identiek, want op een locatiepagina telt herkenbaarheid en niet verrassing (site-structuur.md §3).
 *
 * `ophaalAlinea` is een array van alinea's; JSX mag erin, zodat een plaats naar een buurpagina
 * kan linken zonder dat dit template dat hoeft te weten.
 */
export default function LocatiePagina({ plaats, ophaalzin, ophaalAlinea = [], buren = [] }) {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Lesgebied</span>
          <h1>Rijles in {plaats}</h1>
          <p className="sub">
            Ik geef rijles in {plaats} en de omgeving. {ophaalzin} Je rijdt in een automaat, een
            Toyota Yaris, en altijd met mij.
          </p>
          <div className="cta-rij">
            <CtaKnop />
          </div>
        </div>
      </div>

      <section className="strak">
        <div className="wrap tekst">
          <h2>Ophalen in {plaats}</h2>
          {ophaalAlinea.map((a, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>{a}</p>
          ))}
          <p>{ZINNEN.lesdagen}</p>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wat je hier krijgt</h2>
          <ul className="vinkjes">
            <li>Rijles in een automaat, in een Toyota Yaris</li>
            <li>Altijd dezelfde instructeur: ik</li>
            <li>Rijschoolhouder sinds 2012, CBR-erkend en IBKI-gecertificeerd</li>
            <li>Ook les in het Engels</li>
            <li>Beginnen kan binnen 8 dagen, met spoed binnen 3 dagen</li>
          </ul>

          <div className="buren">
            <Link href="/lesgebied/">← Lesgebied</Link>
            {buren.map((b) => (
              <Link key={b.href} href={b.href}>
                {b.label}
              </Link>
            ))}
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
