import { Fraunces, Archivo } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CookieBanner from '@/components/CookieBanner';
import { BEDRIJF, SITE_URL } from '@/lib/site';
import { bedrijfSchema } from '@/lib/schema';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rijschool Zoetermeer | rijles in een automaat',
    template: '%s',
  },
  description:
    'Rijles in een automaat in Zoetermeer en omgeving, al sinds 2012. Altijd dezelfde instructeur. Vraag een proefles aan.',
  applicationName: BEDRIJF.naam,
  authors: [{ name: 'Ali' }],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: BEDRIJF.naam,
  },
  // ⛔ De site staat pas op 1 september live op het echte domein (Ali's eigen datum).
  //    Tot dan mag de preview-URL niet geïndexeerd worden: dat zou het echte domein
  //    beconcurreren met een dubbele van zichzelf. Zet NEXT_PUBLIC_INDEXEERBAAR=1 op de
  //    livegang-dag (todo ali-livegang-alirijles-1-september).
  robots:
    process.env.NEXT_PUBLIC_INDEXEERBAAR === '1'
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export const viewport = {
  themeColor: '#FAF4EA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${archivo.variable}`}>
      <head>
        <link
          rel="icon"
          href={
            'data:image/svg+xml,' +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#C96F4A"/><text x="32" y="44" font-family="Georgia,serif" font-size="34" font-weight="bold" fill="#FAF4EA" text-anchor="middle">A</text></svg>'
            )
          }
        />
        {/* Twee dingen vóór de eerste paint:
            ① `js` op <html> — de scroll-reveals verbergen hun element alléén onder `html.js`,
               dus zonder JavaScript blijft alle copy gewoon zichtbaar.
            ② een vangnet-timer — gaat er iets mis met hydratie of met de IntersectionObserver,
               dan zet `rv-uit` na 2 seconden alles alsnog zichtbaar. Werkt de reveal gewoon,
               dan is 'ie allang klaar en verandert deze vlag niets. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('rv-uit')},2000)",
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bedrijfSchema()) }}
        />
      </head>
      <body>
        <a className="skip" href="#hoofd">
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="hoofd">{children}</main>
        <SiteFooter />
        <Reveal />
        {/* De cookie-deur hangt aan FLAGS.chatbot: geen chat = geen cookies = geen banner.
            De HighLevel-widget laadt PAS na akkoord, niet bij het renderen. */}
        <CookieBanner />
      </body>
    </html>
  );
}
