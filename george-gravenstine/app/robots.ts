import type { MetadataRoute } from 'next';

// While the build is a preview, nothing is indexable.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: '/' }
  };
}
