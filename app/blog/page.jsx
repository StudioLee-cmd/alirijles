import Link from 'next/link';
import { ARTIKELEN } from '@/lib/blog';
import './blog.css';

export const metadata = {
  title: 'Blog | Praktische uitleg over rijles bij Ali',
  description: 'Je eerste rijles, een pakket kiezen en leren rijden in een automaat. Praktische uitleg van Autorijschool Zoetermeer.',
  alternates: { canonical: '/blog/' },
};

export default function Blog() {
  return (
    <>
      <div className="hero smal"><div>
        <span className="kick">Goed voorbereid op weg</span>
        <h1>Meer weten over rijles</h1>
        <p className="sub">Uitleg voor je eerste les en de keuzes die daarna komen.</p>
      </div></div>
      <section className="strak"><div className="wrap blog-grid">
        {ARTIKELEN.map((artikel) => (
          <article className="blog-card" key={artikel.slug}>
            <Link href={`/blog/${artikel.slug}/`} aria-label={artikel.titel}>
              <img src={artikel.beeld} alt={artikel.alt} width="1672" height="941" />
            </Link>
            <div className="blog-card-body">
              <time dateTime={artikel.datum}>8 oktober 2026</time>
              <h2><Link href={`/blog/${artikel.slug}/`}>{artikel.titel}</Link></h2>
              <p>{artikel.omschrijving}</p>
              <Link className="verder" href={`/blog/${artikel.slug}/`}>Lees het artikel <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div></section>
    </>
  );
}
