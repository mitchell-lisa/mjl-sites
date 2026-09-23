import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const base = 'https://mjl-george-gravenstine.vercel.app';
const routes = [
  '/',
  '/auto-insurance',
  '/home-insurance',
  '/business-insurance',
  '/quote',
  '/about',
  '/team',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date('2026-09-10'),
    changeFrequency: 'monthly' as const,
    priority: r === '/' ? 1 : 0.7
  }));
}
