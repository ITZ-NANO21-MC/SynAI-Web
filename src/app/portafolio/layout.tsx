import { generateStaticMetadata } from '@/lib/seo';

// Metadata estática para la página de portafolio (Server Component)
// Se separa del page.tsx porque los archivos con 'use client' no pueden exportar generateMetadata
export async function generateMetadata() {
  return generateStaticMetadata(
    'Portafolio SYNAI - Proyectos de IA y Desarrollo de Software',
    'Descubre nuestros casos de estudio en desarrollo web, aplicaciones móviles e inteligencia artificial. Proyectos reales con arquitecturas escalables.',
    'portfolio item'
  );
}

export default function PortafolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}