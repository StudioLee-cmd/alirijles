import { SITE_URL } from '@/lib/site';

// Tot de livegang op het echte domein (1 september, Ali's eigen datum) staat de preview op
// disallow: een tweede vindbare kopie van de site zou het echte domein beconcurreren.
// Op de livegang-dag: NEXT_PUBLIC_INDEXEERBAAR=1 als env-var op het Vercel-project.
const indexeerbaar = process.env.NEXT_PUBLIC_INDEXEERBAAR === '1';

export default function robots() {
  return {
    rules: indexeerbaar
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: indexeerbaar ? `${SITE_URL}/sitemap.xml` : undefined,
  };
}
