'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BEDRIJF, NAV, ZINNEN } from '@/lib/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pad = usePathname();

  // Route-wissel sluit het menu — anders blijft 'ie op de nieuwe pagina openstaan.
  useEffect(() => setOpen(false), [pad]);

  useEffect(() => {
    if (!open) return undefined;
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  const huidig = (href) => (pad === href ? 'page' : undefined);

  return (
    <header className="top">
      <div className="in">
        <Link className="brand" href="/" aria-label={`${BEDRIJF.naam}, naar de homepage`}>
          <span className="mark" aria-hidden="true">
            A
          </span>
          <span>
            <span className="nm">Autorijschool Zoetermeer</span>
            <small>{BEDRIJF.domein}</small>
          </span>
        </Link>

        <nav className="hoofd" aria-label="Hoofdmenu">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={huidig(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>

        <Link className="btn kop" href="/proefles/">
          {ZINNEN.cta}
        </Link>

        <button
          className="menuknop"
          type="button"
          aria-expanded={open}
          aria-controls="mobielmenu"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen((v) => !v)}
        >
          <i /> <i /> <i />
        </button>
      </div>

      <div className={`mobielmenu${open ? ' open' : ''}`} id="mobielmenu">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={huidig(n.href)}>
            {n.label}
          </Link>
        ))}
        <Link href="/veelgestelde-vragen/">Veelgestelde vragen</Link>
        <Link href="/contact/">Contact</Link>
        <Link className="btn" href="/proefles/">
          {ZINNEN.cta}
        </Link>
      </div>
    </header>
  );
}
