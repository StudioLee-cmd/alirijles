import Link from 'next/link';
import { BEDRIJF, NAV, PLAATSEN, ZINNEN } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="voet">
      <div className="in">
        <div>
          <b className="kop">{BEDRIJF.naam}</b>
          <p>KvK {BEDRIJF.kvk}</p>
          <p>
            <a className="inline" href={`tel:${BEDRIJF.telefoonLink}`}>
              {BEDRIJF.telefoonWeergave}
            </a>
          </p>
          <p>
            <a className="inline" href={`mailto:${BEDRIJF.email}`}>
              {BEDRIJF.email}
            </a>
          </p>
          <p style={{ marginTop: 12 }}>{ZINNEN.telefoonRegel}</p>
          <p>{ZINNEN.lesdagen}</p>
        </div>

        <div>
          <b className="kop">Lesgebied</b>
          <p>{PLAATSEN.join(' · ')}</p>
          <p style={{ marginTop: 10 }}>
            Ophalen kan ook bij Den Haag Centraal en op het Spaarneplein.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link className="inline" href="/lesgebied/">
              Bekijk het lesgebied
            </Link>
          </p>
        </div>

        <div>
          <b className="kop">Snel naar</b>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/spoedcursus/">Spoedcursus</Link>
            </li>
            <li>
              <Link href="/veelgestelde-vragen/">Veelgestelde vragen</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="/proefles/">Proefles aanvragen</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="onder">
        <span>
          © {new Date().getFullYear()} {BEDRIJF.naam} · {BEDRIJF.domein}
        </span>
        <span>Rijles in een automaat · rijbewijs B</span>
        <span>
          <Link href="/privacy/">Privacyverklaring</Link>
        </span>
        {/* Powered by — Tim 02-08: hoort op elke klantsite en op elk template.
            Bewust in --mut en klein: het is een credit, geen tweede merk op Ali's site. */}
        <span style={{ color: 'var(--mut)' }}>
          Powered by{' '}
          <a href="https://studiolee.nl" rel="noopener" style={{ color: 'inherit' }}>
            StudioLee
          </a>
        </span>
      </div>
    </footer>
  );
}
