import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Rutas internas y de API
          '/api/',
          '/_next/',
          '/.next/',
          '/__*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/.next/',
        ],
        crawlDelay: 1, // Respetuoso con el servidor
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}