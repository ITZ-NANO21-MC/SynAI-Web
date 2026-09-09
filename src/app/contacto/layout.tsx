import { generateStaticMetadata } from '@/lib/seo';

// Metadata estática para la página de contacto (Server Component)
// Se separa del page.tsx porque los archivos con 'use client' no pueden exportar generateMetadata
export async function generateMetadata() {
  return generateStaticMetadata(
    "Contacto SynAI - Diseño web, Chatbots e Inventario en Coro, Falcón",
    "Solicita tu demo gratis: diseño web con 31 días de prueba, chatbots para WhatsApp, sistema de inventario y soporte técnico en Falcón, Venezuela.",
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