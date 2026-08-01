'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll-reveal voor elk element met class `rv`.
 * design.md: rustige fades, geen harde bounces. prefers-reduced-motion zet 'm in CSS al uit;
 * hier zetten we 'm dan ook direct zichtbaar zodat er nooit onzichtbare tekst blijft staan.
 */
export default function Reveal() {
  const pad = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv'));
    if (!els.length) return undefined;

    const rust = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rust || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }

    // Alles wat al in beeld staat meteen tonen. De IntersectionObserver-callback komt pas bij de
    // volgende frame, en boven de vouw is dat te laat: dan zie je de hero een tel lang leeg.
    const hoogte = window.innerHeight || 0;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < hoogte * 0.9) el.classList.add('in');
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pad]);

  return null;
}
