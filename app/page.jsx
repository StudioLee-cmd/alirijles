import Link from 'next/link';
import { Byline, BelKnop, CtaKnop, Zonneweg } from '@/components/Bouwstenen';
import ProeflesForm from '@/components/ProeflesForm';
import { BEDRIJF, FLAGS, ZINNEN } from '@/lib/site';

export const metadata = {
  title: 'Rijschool Zoetermeer | rijles in een automaat',
  description:
    'Rijles in een automaat in Zoetermeer en omgeving, al sinds 2012. Altijd dezelfde instructeur. Vraag een proefles aan.',
  alternates: { canonical: '/' },
};

const AANBOD = [
  {
    ico: '🚗',
    kop: 'Rijles in een automaat',
    tekst:
      'Ik geef uitsluitend les in een automaat, in een Toyota Yaris. Geen koppeling, geen schakelmomenten, alle aandacht voor het verkeer.',
  },
  {
    ico: '🎯',
    kop: 'Proefles',
    tekst:
      'De eerste les waarin ik inschat waar je staat. Ik let op je handigheid, je concentratie, hoe serieus je erin zit en je verkeersinzicht.',
  },
  {
    ico: '📦',
    kop: 'Lespakket met praktijkexamen',
    tekst:
      'Een pakket inclusief het praktijkexamen. Koop je een pakket, dan krijg je de theorie er gratis bij.',
  },
  {
    ico: '⚡',
    kop: 'Spoedtraject',
    tekst: 'Heb je haast, dan kun je binnen 3 dagen beginnen. Normaal start je binnen 8 dagen.',
  },
];

const STAPPEN = [
  {
    kop: 'Proefles',
    tekst:
      'We rijden samen en ik kijk waar je staat. Daarna weet je precies wat je van me kunt verwachten.',
  },
  {
    kop: 'Een eerlijk lesplan',
    tekst:
      'Gemiddeld heeft iemand zonder rij-ervaring zo’n 30 lessen nodig, met ervaring gemiddeld 15. Dat is een gemiddelde, geen belofte.',
  },
  {
    kop: 'Lessen en tussentijds bijsturen',
    tekst:
      'We rijden, en je hoort na elke les waar je staat. Loop je ergens op vast, dan pakken we dat aan voordat het een gewoonte wordt.',
  },
  {
    kop: 'Examen',
    tekst:
      'Als je eraan toe bent, ga je op voor je praktijkexamen. Wanneer dat kan bepaalt het CBR, niet ik.',
  },
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="kick">Rijschool Zoetermeer · sinds 2012</span>
          <h1>
            Rijles in Zoetermeer, altijd bij <em>dezelfde</em> instructeur
          </h1>
          <p className="sub">
            Ik geef sinds 2012 rijles in een automaat. Je rijdt elke les met mij, in dezelfde auto,
            en je krijgt eerlijk te horen waar je staat.
          </p>
          <div className="cta-rij">
            <CtaKnop />
            <BelKnop tekst="Hoi Ali, ik wil graag een proefles aanvragen." />
          </div>
          <p className="mini">
            Automaat, Toyota Yaris · CBR-erkend en IBKI-gecertificeerd · les op alle dagen behalve
            woensdagmiddag en zondagmiddag
          </p>
        </div>
        <Zonneweg />
      </div>

      <div className="usps rv">
        <div className="in">
          <div className="usp">
            <span className="dot" />
            <div>
              <b>Altijd dezelfde instructeur</b>
              <span>Ik rijd alleen, nooit een wisselende invaller.</span>
            </div>
          </div>
          <div className="usp">
            <span className="dot" />
            <div>
              <b>Uitsluitend automaat</b>
              <span>Eén auto: een Toyota Yaris automaat.</span>
            </div>
          </div>
          <div className="usp">
            <span className="dot" />
            <div>
              <b>Sinds 2012</b>
              <span>CBR-erkend en IBKI-gecertificeerd.</span>
            </div>
          </div>
          <div className="usp">
            <span className="dot" />
            <div>
              <b>Snel beginnen</b>
              <span>Binnen 8 dagen, met spoed binnen 3.</span>
            </div>
          </div>
        </div>
      </div>

      <section id="lessen">
        <div className="wrap">
          <span className="kick">Rijlessen</span>
          <h2>Wat je bij mij leert</h2>
          <p className="lead">
            Van je eerste meter tot je praktijkexamen, in een tempo dat bij jou past.
          </p>
          <div className="grid k4">
            {AANBOD.map((a) => (
              <article className="kaart rv" key={a.kop}>
                <div className="ico" aria-hidden="true">
                  {a.ico}
                </div>
                <h3>{a.kop}</h3>
                <p>{a.tekst}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strak">
        <div className="wrap">
          <span className="kick">Werkwijze</span>
          <h2>Zo werkt het, in vier stappen</h2>
          <div className="grid k4 stappen">
            {STAPPEN.map((s) => (
              <article className="stap rv" key={s.kop}>
                <h3>{s.kop}</h3>
                <p>{s.tekst}</p>
              </article>
            ))}
          </div>
          <Link className="verder" href="/zo-werkt-het/">
            Lees meer over het traject <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className="citaat">
        <section>
          <div className="wrap">
            <span className="kick">Waarom dit werkt</span>
            <h2>Loop je ergens op vast?</h2>
            <p className="lead">Dat is precies waar ik goed in ben.</p>
            <blockquote className="quote rv">
              “ik kan goed de probleem van de leerling herkennen en de goede oplossing.”
            </blockquote>
            <div className="tekst">
              <p>
                Sommige mensen blijven hangen op invoegen, anderen op een rotonde of op zenuwen bij
                het examen. Meestal zit het probleem net ergens anders dan je denkt. Ik zoek uit waar
                het écht misgaat en leg het uit tot je het snapt. Rustig, en zo vaak als nodig is.
              </p>
            </div>
            <div className="cta-rij">
              <CtaKnop />
            </div>
          </div>
        </section>
      </div>

      <section className="strak">
        <div className="wrap">
          <span className="kick">Kosten</span>
          <h2>Wat het kost</h2>
          <div className="tekst">
            <p>
              Een rijbewijs halen kost ongeveer €3.050 en gemiddeld 45 lessen, in een automaat. Dat
              is een indicatie op basis van wat ik in de praktijk zie, geen offerte: hoeveel jij
              nodig hebt, weet ik pas na je proefles.
            </p>
          </div>
          <div className="blok wit">
            <h3>Betalen in termijnen kan</h3>
            <p>
              Koop je een pakket inclusief het praktijkexamen, dan hoef je niet alles in één keer te
              betalen. Het examengeld betaal je vooraf, de rest mag je spreiden. De enige voorwaarde
              is dat het volledige bedrag betaald is voordat je 70% van de lessen uit het pakket
              gereden hebt.
            </p>
            <p>
              <strong>Niet tevreden over een les?</strong> Dan mag je het lesgeld van díe les
              terugvragen.
            </p>
          </div>
          {/* ⛔ De drie prijskaarten uit de gekozen look staan hier bewust NIET.
              Ali's prijzen komen in een PDF die er nog niet is (kennisbank.md §C). Tot dan geen
              bedrag, geen "vanaf"-prijs en geen "binnenkort": de sectie hierboven staat op eigen
              benen. Kaarten komen erbij bij FLAGS.prijzen (todo ali-prijssectie-na-de-pdf). */}
          <Link className="verder" href="/tarieven/">
            Bekijk de tarieven <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* De blog-sectie hoort bij de gekozen look ("Slimmer naar je rijbewijs") maar staat op
          `gated` tot de managed-upgrade (tool-profiel.md). Verborgen, niet verwijderd. */}
      {FLAGS.blog ? (
        <section className="strak">
          <div className="wrap">
            <span className="kick">Blog</span>
            <h2>Slimmer naar je rijbewijs</h2>
          </div>
        </section>
      ) : null}

      <section>
        <div className="formblok">
          <div className="in">
            <div>
              <span className="kick">Proefles</span>
              <h2>Klaar om te beginnen?</h2>
              <p>
                Stuur me een bericht met je naam en je telefoonnummer, dan bel ik je terug om een
                proefles in te plannen. {ZINNEN.telefoonRegel}
              </p>
              <p className="direct">
                Liever direct?{' '}
                <a href={`tel:${BEDRIJF.telefoonLink}`}>{BEDRIJF.telefoonWeergave}</a>
              </p>
            </div>
            <ProeflesForm />
          </div>
        </div>
        <div className="wrap">
          <Byline />
        </div>
      </section>
    </>
  );
}
