import Link from 'next/link';
import { BEDRIJF, ZINNEN, whatsappLink } from '@/lib/site';

/** De primaire CTA. Eén per scherm (design.md), altijd naar /proefles/. */
export function CtaKnop({ label = ZINNEN.cta, href = '/proefles/' }) {
  return (
    <Link className="btn" href={href}>
      {label}
    </Link>
  );
}

/** De secundaire CTA: bellen of appen. Nooit gevuld in accentkleur (design.md). */
export function BelKnop({ label = ZINNEN.ctaSecundair, tekst }) {
  return (
    <a className="btn ghost" href={whatsappLink(tekst)} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

/** Het slot-blok onderaan elke inhoudelijke pagina. */
export function Slot({ kop, tekst, bel = false, belTekst, children }) {
  return (
    <section className="slot">
      <div className="wrap in">
        <h2>{kop}</h2>
        {tekst ? <p>{tekst}</p> : null}
        {children}
        <div className="cta-rij">
          {bel ? <BelKnop tekst={belTekst} /> : null}
          <CtaKnop />
        </div>
      </div>
    </section>
  );
}

/** De E-E-A-T-byline (site-structuur.md §7 regel 4). */
export function Byline() {
  return (
    <p className="byline">
      {ZINNEN.byline}{' '}
      <Link className="inline" href="/over-ali/">
        Over Ali
      </Link>
    </p>
  );
}

/** De telefoon-regel als losse zin, met werkende links. */
export function Bereikbaar() {
  return (
    <>
      <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
        {BEDRIJF.telefoonWeergave}
      </a>{' '}
      — {ZINNEN.telefoonRegel.toLowerCase()}
    </>
  );
}

/** Het signature-beeld uit de gekozen look: de weg naar de zon. */
export function Zonneweg() {
  return (
    <div className="zonneweg rv">
      <div className="zon" />
      <svg className="weg" viewBox="0 0 560 440" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path
          d="M-20 440 C 140 320, 240 400, 320 300 S 480 180, 580 210 L 580 440 Z"
          fill="#C98A54"
          opacity=".35"
        />
        <path
          d="M-20 440 C 120 360, 300 420, 420 330 S 560 260, 600 280 L 600 440 Z"
          fill="#B9764A"
          opacity=".5"
        />
        <path
          d="M60 440 C 170 340, 300 330, 380 250 C 440 190, 480 160, 520 150"
          stroke="#6B5138"
          strokeWidth="58"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="wegdash"
          d="M60 440 C 170 340, 300 330, 380 250 C 440 190, 480 160, 520 150"
          stroke="#FAF4EA"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <div className="plaat">
        <span className="l">L</span> Vandaag je eerste meter gereden
      </div>
    </div>
  );
}
