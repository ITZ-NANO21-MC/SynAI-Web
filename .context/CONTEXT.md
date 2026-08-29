# SYNAI - Contexto del Proyecto

## Visión Global

SYNAI es una plataforma web de alto rendimiento para una agencia de consultoría en Inteligencia Artificial y arquitectura de software basada en Falcón, Venezuela. El proyecto destaca por su enfoque minimalista, eficiencia operativa y estética futurista, sirviendo como carta de presentación y generador de leads para la agencia.

**Objetivo**: Presentar servicios de consultoría IA, desarrollo de software a medida, automatización y soporte técnico, mostrando un portafolio de proyectos reales que demuestren capacidad técnica.

**Usuarios objetivo**:
- Empresas que buscan consultoría en IA y arquitectura de software
- Clientes locales en Falcón/Venezuela que necesitan soporte técnico
- Startups que requieren desarrollo de MVP y presencia digital

## Stack Tecnológico (Versiones Exactas)

| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| **Framework** | Next.js | 15.5.9 (App Router) |
| **Lenguaje** | TypeScript | 5.x (strict mode) |
| **Runtime** | React | 19.2.1 |
| **Estilos** | Tailwind CSS | 3.4.1 |
| **Componentes UI** | Shadcn UI / Radix UI | Múltiples @radix-ui/* ^1.x |
| **IA Generativa** | Google Genkit | 1.28.0 |
| **Modelo IA** | Google Gemini | gemini-2.5-flash |
| **Iconografía** | Lucide React | 0.475.0 |
| **Mapas** | MapLibre GL | 4.7.1 |
| **Geocodificación** | Geoapify | API Key integrada |
| **Email** | EmailJS (Browser) | 4.4.1 |
| **Temas** | next-themes | 0.4.4 |
| **Formularios** | React Hook Form | 7.54.2 |
| **Validación** | Zod | 3.24.2 |
| **Gráficos** | Recharts | 2.15.1 |
| **Carousel** | Embla Carousel | 8.6.0 |
| **Fecha** | date-fns | 3.6.0 |
| **Utilidades** | clsx, tailwind-merge | 2.1.1, 3.0.1 |
| **Linting** | ESLint (Next.js) | Integrado |
| **Typecheck** | TypeScript | `tsc --noEmit` |

## Estructura de Carpetas

```
src/
├── app/                    # Rutas y páginas (App Router)
│   ├── page.tsx           # Home / Landing
│   ├── servicios/page.tsx # Página de servicios
│   ├── portafolio/page.tsx# Portafolio con filtros y modales
│   ├── contacto/page.tsx  # Contacto con mapa y formulario
│   ├── galeria/page.tsx   # Galería visual
│   ├── layout.tsx         # Layout raíz con providers
│   └── globals.css        # Estilos globales + CSS variables
├── components/
│   ├── ui/                # 30+ componentes base (Shadcn UI)
│   ├── layout/            # Header, Footer
│   ├── shared/            # ThemeToggle, WhatsAppButton
│   ├── theme-provider.tsx # Wrapper next-themes
│   └── [component].tsx    # Componentes específicos
├── ai/
│   ├── genkit.ts          # Configuración Genkit + Gemini
│   ├── dev.ts             # Entry point para genkit dev
│   └── flows/
│       └── generate-seo-metadata.ts # Flujo IA para SEO
├── lib/
│   ├── data.ts            # Datos estáticos (servicios, portafolio, stats)
│   ├── placeholder-images.ts/json # Imágenes placeholder
│   └── utils.ts           # Helper cn() para classnames
├── hooks/
│   ├── use-toast.ts       # Sistema de notificaciones
│   └── use-mobile.tsx     # Hook detección móvil
└── public/                # Assets estáticos (logo, imágenes)
```

## Entidades de Datos Principales

| Entidad | Descripción | Campos Clave |
|---------|-------------|--------------|
| **Servicio** | Ofertas comerciales | id, titulo, telefono, descripcion, detalles[], precio, categoria, icono, imagen |
| **Proyecto** | Casos de estudio del portafolio | id, titulo, cliente, categoria (Web/App/ML), descripcion, resumen, caracteristicas[], tecnologias[], arquitecturaTitulo, arquitectura, tareas[], imagen, destacado |
| **TareaAutomatizada** | Sub-elemento de proyecto | titulo, descripcion, icono (Clock/Database/Zap/BrainCircuit) |
| **Estadistica** | KPIs en home | valor, etiqueta, sufijo |
| **ImagePlaceholder** | Metadatos de imágenes | id, description, imageUrl, imageHint |

## Reglas de Negocio Fijas

1. **Idioma**: Código en inglés, comentarios en español, UI en español
2. **Tipado estricto**: TypeScript strict mode activado, no `any`
3. **Componentes**: Shadcn UI como base, composición sobre herencia
4. **Estilos**: Tailwind CSS con variables CSS (HSL) para theming
5. **Temas**: Soporte nativo light/dark/system via next-themes
6. **Imágenes**: Next.js Image component obligatorio, placeholders con `data-ai-hint`
7. **IA**: Genkit flows como Server Actions (`'use server'`)
8. **Formularios**: React Hook Form + Zod validation
9. **Notificaciones**: Sistema toast personalizado (use-toast)
10. **Despliegue**: Firebase App Hosting (apphosting.yaml presente)
11. **Git**: Convenciones de commit semánticas (ver CHANGELOG.md)
12. **Calidad**: Lint y typecheck en CI (`npm run lint`, `npm run typecheck`)