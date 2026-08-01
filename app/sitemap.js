import { PAGINAS, SITE_URL } from '@/lib/site';

export default function sitemap() {
  const nu = new Date();
  return PAGINAS.map((p) => ({
    url: `${SITE_URL}${p.pad}`,
    lastModified: nu,
    changeFrequency: 'monthly',
    priority: p.prio,
  }));
}
