import Link from 'next/link';
import { BEDRIJF } from '@/lib/site';

// ⚑ GEGENEREERD door alpha1/scripts/bouw_privacyverklaring.py — bewerk die, niet dit bestand.
//   Elke ontvanger hieronder is gemeten aan app/api/proefles/route.js. Verandert die route,
//   dan hoort deze pagina opnieuw gegenereerd te worden: een verzwegen ontvanger is precies
//   wat AVG art. 13 verbiedt.

export const metadata = {
  title: 'Privacyverklaring | Autorijschool Zoetermeer',
  description:
    'Wat er met je gegevens gebeurt als je een proefles aanvraagt of een bericht stuurt. Wie ze krijgt, hoe lang ze blijven staan en hoe je ze laat verwijderen.',
  alternates: { canonical: '/privacy/' },
};
// ⚑ BEWUST GEEN eigen `robots` hier. De root-layout zet index/noindex op basis van
//    NEXT_PUBLIC_INDEXEERBAAR, zodat de preview-URL het echte domein niet beconcurreert vóór
//    de livegang. Een `robots` op deze pagina zou die schakelaar stil overrulen.

export default function Privacy() {
  return (
    <>
      <div className="hero smal">
        <div>
          <span className="kick">Privacy</span>
          <h1>Wat er met je gegevens gebeurt</h1>
          <p className="sub">
            Je vult een formulier in om een proefles aan te vragen of een vraag te stellen. Hieronder
            staat precies wat ik daarmee doe, wie het verder ziet en hoe je het laat weghalen.
          </p>
        </div>
      </div>

      <section className="strak">
        <div className="wrap">
          <h2>Wat ik van je vraag</h2>
          <p>
            Alleen wat nodig is om je terug te bellen over rijles. Meer staat er niet in het
            formulier, en er wordt niets bijgekocht of van elders aangevuld.
          </p>
          <ul>
            <li>
              <strong>je naam</strong>, om je aan te kunnen spreken en terug te bellen
            </li>
            <li>
              <strong>je telefoonnummer</strong>, want het antwoord komt per telefoon of WhatsApp
            </li>
            <li>
              <strong>waar je opgehaald wilt worden</strong>, om te kijken of dat binnen het lesgebied valt
            </li>
            <li>
              <strong>wanneer het je ongeveer schikt</strong>, om een moment voor te stellen
            </li>
            <li>
              <strong>je bericht</strong>, alleen wat je er zelf bij typt
            </li>
          </ul>
          <p style={{ marginTop: 14 }}>
            Je hoeft dit niet in te vullen. Doe je het niet, dan kan ik alleen niet terugbellen.
            Bellen of appen op{' '}
            <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
              {BEDRIJF.telefoonWeergave}
            </a>{' '}
            kan altijd.
          </p>

          <div className="blok">
            <h3>Waarom ik het mag vragen</h3>
            <p>
              Omdat je er zelf om vraagt. Je vult het formulier in om een proefles of een gesprek
              te regelen, en dat zijn de stappen vóór een lesovereenkomst. Dat is de grondslag in
              de wet; ik gebruik je gegevens niet voor reclame en verkoop ze aan niemand.
            </p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wie het verder ziet</h2>
          <p>
            Ik lees je aanvraag zelf. Om hem bij mij te krijgen loopt hij langs een paar systemen,
            en die noem ik hier bij naam, ook al zie je ze niet.
          </p>
          <div className="grid k3">
            <article className="kaart rv">
              <h3>Supabase</h3>
              <p>
                De database waarin de aanvraag wordt vastgelegd. Zonder vastlegging kan een melding wegvallen zonder dat iemand het merkt.
                <br />
                <span style={{ color: 'var(--bg-75)' }}>Staat op servers binnen de Europese Unie (Ierland).</span>
              </p>
            </article>
            <article className="kaart rv">
              <h3>n8n</h3>
              <p>
                De automatiseringsserver die DigitalStudioLee zelf beheert en die de melding doorzet. Die server heeft de koppeling met de mailprovider; de website zelf niet.
                <br />
                <span style={{ color: 'var(--bg-75)' }}>Staat op een eigen server van DigitalStudioLee in Nederland.</span>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Brevo</h3>
              <p>
                De mailprovider die de melding als e-mail bezorgt. Brevo laat alleen bekende servers mailen, en daarom loopt de mail via n8n en niet rechtstreeks vanaf de website.
                <br />
                <span style={{ color: 'var(--bg-75)' }}>Staat op een Europese aanbieder (Sendinblue SAS, Frankrijk).</span>
              </p>
            </article>
          </div>
          <p style={{ marginTop: 18 }}>
            De website en die koppelingen zijn gebouwd en worden beheerd door{' '}
            <a
              className="inline"
              href="https://www.studiolee.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitalStudioLee
            </a>{' '}
            (KvK 98933353, 3448 CJ Woerden). Zij werken alleen in mijn
            opdracht en mogen je gegevens nergens anders voor gebruiken. Dat staat vast in een
            verwerkersovereenkomst.
          </p>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Hoe lang het blijft staan</h2>
          <p>Een aanvraag blijft bewaard zolang hij nog tot lesafspraken kan leiden, en wordt daarna verwijderd. Er is geen vaste termijn afgesproken.</p>
          <p style={{ marginTop: 12 }}>
            Word je leerling, dan hoort je aanvraag bij mijn gewone leerlingadministratie en
            bewaar ik hem zolang dat voor de lessen en de administratie nodig is.
          </p>

          <div className="blok">
            <h3>Cookies</h3>
            <p>
              Deze site zet geen cookies. Er staat geen Google Analytics op, geen advertentiepixel
              en geen meekijk-script, en de lettertypen worden vanaf deze site zelf geladen in
              plaats van bij Google opgehaald. Daarom zie je hier ook geen cookiemelding: er valt
              niets te accepteren of te weigeren.
            </p>
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <h2>Wat je kunt vragen</h2>
          <p>
            Je mag altijd vragen wat ik van je heb, het laten aanpassen als het niet klopt, of het
            laten weghalen. Eén berichtje is genoeg en er hoeft geen reden bij.
          </p>
          <div className="grid k3">
            <article className="kaart rv">
              <h3>Bellen of appen</h3>
              <p>
                <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
                  {BEDRIJF.telefoonWeergave}
                </a>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Mailen</h3>
              <p>
                <a className="inline" href={`mailto:${BEDRIJF.email}`}>
                  {BEDRIJF.email}
                </a>
              </p>
            </article>
            <article className="kaart rv">
              <h3>Klopt er iets niet?</h3>
              <p>
                Kom je er met mij niet uit, dan kun je terecht bij de{' '}
                <a
                  className="inline"
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autoriteit Persoonsgegevens
                </a>
                .
              </p>
            </article>
          </div>

          <div className="blok">
            <h3>Wie verantwoordelijk is</h3>
            <p>
              {BEDRIJF.naam}, KvK {BEDRIJF.kvk}.
              <br />
              <a className="inline" href={`mailto:${BEDRIJF.email}`}>
                {BEDRIJF.email}
              </a>{' '}
              ·{' '}
              <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
                {BEDRIJF.telefoonWeergave}
              </a>
            </p>
            <p style={{ marginTop: 14 }}>
              <Link className="inline" href="/contact/">
                Naar de contactpagina
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
