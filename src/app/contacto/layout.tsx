import { generateStaticMetadata } from '@/lib/seo';

// Metadata estática para la página de contacto (Server Component)
// Se separa del page.tsx porque los archivos con 'use client' no pueden exportar generateMetadata
export async function generateMetadata() {
  return generateStaticMetadata(
    "Contacto SYNAI - Consultoría en IA y Arquitectura de Software en Falcón",
    "Contacta con SYNAI para consultoría en Inteligencia Artificial, desarrollo de software, automatización y soporte técnico en Falcón, Venezuela.",
    "contact page"
  );
}

export default function ContactoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}