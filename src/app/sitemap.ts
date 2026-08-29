import { MetadataRoute } from 'next';
import { SERVICIOS, PROYECTOS } from '@/lib/data';

// Rutas estáticas de la aplicación
const staticRoutes = [
  { path: '', changefreq: 'daily', priority: 1.0 },
  { path: '/servicios', changefreq: 'weekly', priority: 0.9 },
  { path: '/portafolio', changefreq: 'weekly', priority: 0.8 },
  { path: '/contacto', changefreq: 'monthly', priority: 0.7 },
  { path: '/galeria', changefreq: 'monthly', priority: 0.6 },
] as const;

// Última modificación (fecha del build)
const lastModified = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev';

  // Generar rutas estáticas
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changefreq: route.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: route.priority,
  }));

  // Generar rutas dinámicas para servicios (si tuvieran slugs)
  // Actualmente no hay páginas individuales de servicio, pero si las hubiera:
  // const serviceUrls = SERVICIOS.map((servicio) => ({
  //   url: `${baseUrl}/servicios/${servicio.id}`,
  //   lastModified,
  //   changefreq: 'monthly' as const,
  //   priority: 0.6,
  // }));

  // Generar rutas dinámicas para proyectos (si tuvieran slugs)
  // const projectUrls = PROYECTOS.map((proyecto) => ({
  //   url: `${baseUrl}/portafolio/${proyecto.id}`,
  //   lastModified,
  //   changefreq: 'monthly' as const,
  //   priority: 0.5,
  // }));

  return [...staticUrls];
}