import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { generateStaticMetadata } from "@/lib/seo";

// Metadata base estática (fallback para toda la aplicación)
// Las páginas individuales pueden sobrescribir con su propio generateMetadata
export async function generateMetadata(): Promise<Metadata> {
  return generateStaticMetadata(
    "SynAI | Diseño web, Chatbots e Inventario en Coro, Falcón",
    "Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario. ¡Contáctanos!"
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload de fuentes críticas (Inter y Space Grotesk) para mejorar LCP */}
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/spacesgrotesk/v14/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        {/* Skip link para navegación por teclado (WCAG 2.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-accent-foreground focus:p-4 focus:font-bold focus:ring-2 focus:ring-ring focus:rounded-md"
        >
          Saltar al contenido principal
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
