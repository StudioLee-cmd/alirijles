import { BEDRIJF, PLAATSEN, SITE_URL } from './site';

// JSON-LD. Alleen velden waarvan het feit in kennisbank.md staat — geen openingsuren die we niet
// kennen, geen adres (dat staat op `tracking volgt`), geen aggregateRating (er zijn geen reviews).

export function bedrijfSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    '@id': `${SITE_URL}/#bedrijf`,
    name: BEDRIJF.naam,
    url: `${SITE_URL}/`,
    telephone: BEDRIJF.telefoonLink,
    email: BEDRIJF.email,
    foundingDate: String(BEDRIJF.sinds),
    identifier: { '@type': 'PropertyValue', name: 'KvK', value: BEDRIJF.kvk },
    areaServed: PLAATSEN.map((p) => ({ '@type': 'City', name: p })),
    availableLanguage: ['nl', 'en'],
    knowsLanguage: ['nl', 'en'],
    address: { '@type': 'PostalAddress', addressLocality: 'Zoetermeer', addressCountry: 'NL' },
  };
}

export function faqSchema(vragen) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vragen.map((v) => ({
      '@type': 'Question',
      name: v.v,
      acceptedAnswer: { '@type': 'Answer', text: v.a },
    })),
  };
}

export function kruimelSchema(paden) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: paden.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.naam,
      item: `${SITE_URL}${p.pad}`,
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
