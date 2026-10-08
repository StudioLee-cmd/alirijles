import { PAGINAS, SITE_URL } from '@/lib/site';
import { ARTIKELEN } from '@/lib/blog';

export default function sitemap() {
  const nu = new Date();
  return [...PAGINAS.map((p) => ({
    url: `${SITE_URL}${p.pad}`,
    lastModified: nu,
    changeFrequency: 'monthly',
    priority: p.prio,
  })),
    { url: `${SITE_URL}/blog/`, lastModified: '2026-10-08', changeFrequency: 'weekly', priority: 0.6 },
    ...ARTIKELEN.map((artikel) => ({ url: `${SITE_URL}/blog/${artikel.slug}/`, lastModified: artikel.datum, changeFrequency: 'monthly', priority: 0.5 })),
  ];
}
