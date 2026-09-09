import type { Metadata } from 'next';

// Tipos de página soportados por el flujo Genkit
type PageType = 'homepage' | 'service page' | 'portfolio item' | 'contact page';

// Configuración para generación de metadata
export interface SeoConfig {
  content: string;
  keywords: string[];
  pageType: PageType;
  titleSuffix?: string; // Ej: " | SYNAI"
  fallbackTitle?: string;
  fallbackDescription?: string;
}

// Metadata estándar para Open Graph + Twitter
interface SeoMetadata extends Metadata {
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
    url?: string;
    type?: 'website' | 'article';
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string | string[];
  };
}

// Cache simple en memoria para evitar llamadas repetidas a Genkit
// TTL de 1 hora (3600 segundos)
const cache = new Map<string, { data: SeoMetadata; timestamp: number }>();
const CACHE_TTL = 3600 * 1000; // 1 hora

/**
 * Genera metadata SEO para una página utilizando el flujo Genkit
 * Con fallback estático y caché para performance
 */
export async function generatePageMetadata(config: SeoConfig): Promise<SeoMetadata> {
  const { content, keywords, pageType, titleSuffix = ' | SYNAI', fallbackTitle, fallbackDescription } = config;

  // Cache key basada en contenido + keywords + pageType
  const cacheKey = `${content.slice(0, 100)}-${keywords.join(',')}-${pageType}`;

  // Verificar caché
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    // Cargar el flow Genkit de forma dinámica solo cuando se necesita (code splitting)
    const { generateSeoMetadata: generateSeoMetadataFlow } = await import('@/ai/flows/generate-seo-metadata');

    // Llamar al flow Genkit (Server Action)
    const result = await generateSeoMetadataFlow({
      content,
      keywords,
      pageType,
    });

    const metadata: SeoMetadata = {
      title: result.metaTitle + titleSuffix,
      description: result.metaDescription,
      openGraph: {
        title: result.metaTitle + titleSuffix,
        description: result.metaDescription,
        type: pageType === 'homepage' ? 'website' : 'article',
        locale: 'es_VE',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev'}/og?title=${encodeURIComponent(result.metaTitle)}`,
            width: 1200,
            height: 630,
            alt: result.metaTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: result.metaTitle + titleSuffix,
        description: result.metaDescription,
        images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev'}/og?title=${encodeURIComponent(result.metaTitle)}`],
      },
    };

    // Guardar en caché
    cache.set(cacheKey, { data: metadata, timestamp: Date.now() });

    return metadata;
  } catch (error) {
    console.error('[SEO] Error generating metadata with Genkit, using fallback:', error);

    // Fallback estático
    const fallback: SeoMetadata = {
      title: fallbackTitle || 'SynAI | Diseño web, Chatbots e Inventario en Coro, Falcón' + titleSuffix,
      description: fallbackDescription || 'Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario. ¡Contáctanos!',
      openGraph: {
        title: fallbackTitle || 'SynAI | Diseño web, Chatbots e Inventario en Coro, Falcón',
        description: fallbackDescription || 'Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario. ¡Contáctanos!',
        type: pageType === 'homepage' ? 'website' : 'article',
        locale: 'es_VE',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev'}/og?title=${encodeURIComponent(fallbackTitle || 'SynAI')}`,
            width: 1200,
            height: 630,
            alt: 'SynAI - Diseño web, Chatbots e Inventario en Falcón',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: fallbackTitle || 'SynAI | Diseño web, Chatbots e Inventario en Coro, Falcón',
        description: fallbackDescription || 'Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario. ¡Contáctanos!',
        images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev'}/og?title=${encodeURIComponent(fallbackTitle || 'SynAI')}`],
      },
    };

    return fallback;
  }
}

/**
 * Limpia la caché de metadata (útil para desarrollo)
 */
export function clearSeoCache(): void {
  cache.clear();
}

/**
 * Genera metadata con contenido estático (sin llamar a Genkit)
 * Útil para páginas que no necesitan generación dinámica
 */
export function generateStaticMetadata(
  title: string,
  description: string,
  pageType: PageType = 'homepage',
  imageUrl?: string
): SeoMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev';
  const ogImage = imageUrl || `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: pageType === 'homepage' ? 'website' : 'article',
      locale: 'es_VE',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}