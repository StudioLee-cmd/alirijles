import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTIKELEN, artikelTekst } from '@/lib/blog';
import { BEDRIJF, SITE_URL } from '@/lib/site';
import { JsonLd, kruimelSchema } from '@/lib/schema';
import '../blog.css';

export const dynamicParams = false;
export function generateStaticParams() {
  return ARTIKELEN.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const artikel = ARTIKELEN.find((item) => item.slug === params.slug);
  if (!artikel) return {};
  const url = `/blog/${artikel.slug}/`;
  return {
    title: artikel.titel,
    description: artikel.omschrijving,
    alternates: { canonical: url },
    openGraph: {
      type: 'article', title: artikel.titel, description: artikel.omschrijving,
      url, publishedTime: artikel.datum, locale: 'nl_NL', siteName: BEDRIJF.naam,
      images: [{ url: artikel.beeld, width: 1672, height: 941, alt: artikel.alt }],
    },
    twitter: { card: 'summary_large_image', title: artikel.titel, description: artikel.omschrijving, images: [artikel.beeld] },
  };
}

export default function Artikel({ params }) {
  const artikel = ARTIKELEN.find((item) => item.slug === params.slug);
  if (!artikel) notFound();
  const tekst = artikelTekst(artikel.slug);
  const andere = ARTIKELEN.filter((item) => item.slug !== artikel.slug);
  return (
    <article className="blog-article">
      <div className="wrap blog-heading">
        <nav aria-label="Kruimelpad" className="blog-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/blog/">Blog</Link></nav>
        <span className="kick">Praktische uitleg</span>
        <h1>{artikel.titel}</h1>
        <p className="blog-meta">Autorijschool Zoetermeer · <time dateTime={artikel.datum}>8 oktober 2026</time></p>
      </div>
      <figure className="wrap blog-hero">
        <img src={artikel.beeld} alt={artikel.alt} width="1672" height="941" fetchPriority="high" />
      </figure>
      <div className="wrap tekst blog-body" dangerouslySetInnerHTML={{ __html: tekst }} />
      <aside className="wrap tekst blog-related" aria-label="Verder lezen">
        <h2>Verder lezen</h2>
        {andere.map((item) => <p key={item.slug}><Link className="inline" href={`/blog/${item.slug}/`}>{item.titel}</Link></p>)}
        <p><Link href="/blog/">Alle artikelen</Link></p>
      </aside>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'BlogPosting',
        headline: artikel.titel, description: artikel.omschrijving,
        image: `${SITE_URL}${artikel.beeld}`, datePublished: artikel.datum, dateModified: artikel.datum,
        mainEntityOfPage: `${SITE_URL}/blog/${artikel.slug}/`, inLanguage: 'nl-NL',
        author: { '@type': 'Organization', name: BEDRIJF.naam, url: `${SITE_URL}/over-ali/` },
        publisher: { '@id': `${SITE_URL}/#bedrijf` },
      }} />
      <JsonLd data={kruimelSchema([{ naam: 'Home', pad: '/' }, { naam: 'Blog', pad: '/blog/' }, { naam: artikel.titel, pad: `/blog/${artikel.slug}/` }])} />
    </article>
  );
}
