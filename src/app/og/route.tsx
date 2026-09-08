import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

// Configuración para la imagen OG
export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'SYNAI';
  const description = searchParams.get('description') || 'Consultoría en IA y Arquitectura de Software';

  // Obtener el dominio base para las URLs
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://synai.dev';

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a0f',
            padding: '60px 80px',
            position: 'relative',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {/* Logo SVG en base64 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '30px',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="#00e5ff" />
              <path
                d="M24 8L8 20V40H40V20L24 8Z"
                stroke="#0a0a0f"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M24 20L32 28L24 36L16 28L24 20Z"
                fill="#0a0a0f"
                opacity="0.8"
              />
              <circle cx="24" cy="40" r="4" fill="#0a0a0f" opacity="0.6" />
            </svg>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              SYNAI
            </span>
          </div>

          {/* Título */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '1000px',
              marginBottom: '20px',
            }}
          >
            {title}
          </h1>

          {/* Descripción */}
          <p
            style={{
              fontSize: '32px',
              fontWeight: 400,
              color: '#a0a0b0',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>

          {/* Barra de acento cian */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '8px',
              background: 'linear-gradient(to right, #00e5ff, #0088ff)',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error('[OG] Error generating image:', error);
    // Fallback: imagen simple con texto
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a0f',
            color: '#ffffff',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '64px', fontWeight: 700 }}>SYNAI</h1>
          <p style={{ fontSize: '32px', color: '#00e5ff' }}>Consultoría en IA y Arquitectura</p>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}