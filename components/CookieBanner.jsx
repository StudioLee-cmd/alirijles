'use client';
import { useState, useEffect } from 'react';
import { FLAGS } from '@/lib/site';

/**
 * DE COOKIE-DEUR — en 'ie hangt aan FLAGS.chatbot, niet aan een eigen schakelaar.
 *
 * WAAROM DIE KOPPELING EN GEEN LOSSE VLAG (Tim 02-08, en het is dezelfde redenering waarmee
 * `bouw_privacyverklaring.py` de cookie-zin afleidt): deze site zet vandaag NUL cookies —
 * `next/font` host de letters zelf, er is geen analytics, en de enige externe hosts in de HTML
 * zijn een schema.org-string en een wa.me-link. Een banner tonen op een site die niets zet is
 * een leugen in de andere richting, en 'm weglaten zodra de chat aangaat is er een in de eerste.
 * Door 'm aan dezelfde vlag te hangen die de widget aanzet, kan die tegenspraak niet ontstaan:
 * chat aan → cookies → banner. Chat uit → geen cookies → geen banner.
 *
 * DE VOLGORDE IS HET HELE PUNT (Tims eigen vorm): de HighLevel-widget laadt PAS na akkoord.
 * Niet laden-en-verbergen, maar niet-laden. Wie 'm bij het renderen al inlaadt heeft de cookie
 * al gezet voordat de bezoeker iets koos, en dan is het vinkje decoratie.
 *
 * BRON: components/CookieBanner.tsx in de niche-repos (schilderai en zusjes) — dezelfde werking,
 * hier geport naar .jsx en naar Ali's eigen tokens (--acc terracotta i.p.v. het StudioLee-groen).
 * Bij de sweep over de templates hoort DEZE vorm de bron te zijn, niet een nieuwe.
 */

function laadChat(widgetId) {
  if (!widgetId) return;
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[src*="leadconnectorhq"]')) return;
  const s = document.createElement('script');
  s.src = 'https://widgets.leadconnectorhq.com/loader.js';
  s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
  s.setAttribute('data-widget-id', widgetId);
  document.body.appendChild(s);
}

export default function CookieBanner({ widgetId = '' }) {
  const [toon, setToon] = useState(false);

  useEffect(() => {
    if (!FLAGS.chatbot) return;               // geen chat = geen cookies = geen banner
    const keuze = localStorage.getItem('cookie_consent');
    if (keuze === 'accepted') { laadChat(widgetId); return; }
    if (keuze === 'declined') return;
    setToon(true);
  }, [widgetId]);

  if (!FLAGS.chatbot || !toon) return null;

  const knop = {
    border: 'none', borderRadius: '100px', padding: '9px 20px',
    fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit',
  };

  return (
    <div
      role="dialog"
      aria-label="Cookies voor de chatfunctie"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
        padding: '12px', display: 'flex', justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '560px', width: '100%', background: 'var(--wit)',
          border: '1px solid var(--line)', borderRadius: 'var(--rad)',
          padding: '16px 20px', display: 'flex', alignItems: 'center',
          gap: '14px', flexWrap: 'wrap',
          boxShadow: '0 -6px 32px rgba(51, 41, 31, 0.16)',
        }}
      >
        <p style={{ flex: '1 1 240px', color: 'var(--ink-80)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
          We gebruiken cookies voor de chat. Meer hierover staat in de{' '}
          <a href="/privacy/" style={{ color: 'var(--acc)', textDecoration: 'underline' }}>
            privacyverklaring
          </a>
          .
        </p>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => { localStorage.setItem('cookie_consent', 'declined'); setToon(false); }}
            style={{ ...knop, background: 'transparent', color: 'var(--mut)', border: '1px solid var(--line)' }}
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem('cookie_consent', 'accepted');
              setToon(false);
              laadChat(widgetId);
            }}
            style={{ ...knop, background: 'var(--acc)', color: 'var(--bg)', fontWeight: 700 }}
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
