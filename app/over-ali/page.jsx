import Link from 'next/link';
import { Slot } from '@/components/Bouwstenen';
import { BEDRIJF } from '@/lib/site';

export const metadata = {
  title: 'Over Ali | rijinstructeur in Zoetermeer sinds 2012',
  description:
    'Ali geeft sinds 2012 rijles in Zoetermeer. Een instructeur, een auto, en uitleg tot je het snapt. CBR-erkend en IBKI-gecertificeerd.',
  alternates: { canonical: '/over-ali/' },
};

/**
 * De author-page van de site (site_structure_research stap 6): de E-E-A-T-laag die een
 * twijfelende ouder én een AI-antwoordmachine leest vóór ze Ali aanraden.
 * 📷 Een foto van Ali hoort hier zodra die er is — kennisbank.md §H staat op `tracking volgt`.
 *    Gebruik in beeld nooit een andere auto dan een Toyota Yaris automaat (design.md).
 */
export default function OverAli() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Over Ali</span>
          <h1>Over Ali</h1>
          <p className="sub">
            Ik geef sinds 2012 rijles. {BEDRIJF.naam} is mijn rijschool, ik rijd alleen, en je krijgt
            bij mij dus elke les dezelfde instructeur.
          </p>
        </div>
      </div>

      <div className="citaat">
        <section>
          <div className="wrap">
            <h2>Hoe ik lesgeef</h2>
            <blockquote className="quote rv">
              “ik kan goed de probleem van de leerling herkennen en de goede oplossing.”
            </blockquote>
            <div className="tekst">
              <p>
                Dat is waar het bij mij om draait. De meeste mensen die vastlopen, lopen niet vast op
                wat ze denken. Ik zoek uit waar het echt misgaat en leg het uit tot je het snapt.
                Duidelijk, en met geduld. Zo vaak als nodig is.
              </p>
              <p>
                Ik beloof je nooit een exact aantal lessen. Dat verschilt per persoon, en iets anders
                beweren zou niet eerlijk zijn.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Waar ik voor sta</h2>
          <div className="grid k3">
            <article className="kaart rv">
              <h3>Sinds 2012</h3>
              <p>
                Ik ben al ruim veertien jaar rijschoolhouder. {BEDRIJF.naam} staat ingeschreven bij
                de KvK onder nummer {BEDRIJF.kvk}.
              </p>
            </article>
            <article className="kaart rv">
              <h3>CBR-erkend en IBKI-gecertificeerd</h3>
              <p>
                Mijn rijschool is erkend door het CBR en ik ben als instructeur IBKI-gecertificeerd.
              </p>
            </article>
            <article className="kaart rv">
              <h3>Eén instructeur</h3>
              <p>
                Ik rijd alleen. Je krijgt nooit een invaller die opnieuw moet uitzoeken waar je
                staat.
              </p>
            </article>
            <article className="kaart rv">
              <h3>Eén auto</h3>
              <p>Een Toyota Yaris automaat. Je leert erin en je doet er examen in.</p>
            </article>
            <article className="kaart rv">
              <h3>Ook in het Engels</h3>
              <p>
                <em>I also give driving lessons in English.</em>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Waar ik lesgeef</h3>
              <p>
                Zoetermeer, Bleiswijk, Leidschenveen, Lansingerland, Nootdorp en Benthuizen. Ophalen
                kan ook bij Den Haag Centraal en op het Spaarneplein.
              </p>
            </article>
          </div>
          <Link className="verder" href="/lesgebied/">
            Bekijk het lesgebied <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Slot kop="Zullen we een keer rijden?" tekst="Begin met een proefles, dan weet je het." />
    </>
  );
}
