import { generateStaticMetadata } from '@/lib/seo';

// Metadata estática para la página de portafolio (Server Component)
// Se separa del page.tsx porque los archivos con 'use client' no pueden exportar generateMetadata
export async function generateMetadata() {
  return generateStaticMetadata(
    'Portafolio SynAI - Proyectos de Diseño Web, Chatbots e Inventario',
    'Casos de estudio de SynAI: sitios web profesionales, chatbots para WhatsApp, sistemas de inventario y soluciones IA desarrollados en Falcón, Venezuela.',
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