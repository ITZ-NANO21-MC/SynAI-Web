# SYNAI - Registro de Decisiones de Arquitectura (ADR)

## Formato ADR

Cada decisión sigue el formato:
- **Título**: Breve y descriptivo
- **Fecha**: YYYY-MM-DD
- **Estado**: Propuesta / Aceptada / Rechazada / Obsoleta
- **Contexto**: Qué problema resuelve
- **Decisión**: Qué se eligió
- **Alternativas**: Qué se consideró
- **Consecuencias**: Impactos positivos/negativos

---

## ADR-001: Framework Principal - Next.js 15 App Router

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Necesidad de un framework React moderno con SSR/SSG, optimización de imágenes, routing basado en archivos y soporte nativo para Server Components.

### Decisión
Usar **Next.js 15** con **App Router** (React Server Components por defecto).

### Alternativas
- **Remix**: Buena DX pero menor ecosistema
- **Astro**: Excelente para contenido estático, menos para apps interactivas
- **Vite + React Router**: Requiere configuración manual de SSR/SEO
- **Next.js 14 Pages Router**: Legacy, sin RSC

### Consecuencias
- ✅ RSC por defecto reduce bundle client-side
- ✅ Server Actions para mutaciones seguras
- ✅ Streaming SSR nativo
- ✅ Excelente SEO out-of-the-box
- ⚠️ Curva de aprendizaje RSC/Server Actions
- ⚠️ Turbopack aún en beta (usado en dev)

---

## ADR-002: Lenguaje y Tipado - TypeScript Strict Mode

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Proyecto de consultoría que requiere mantenibilidad a largo plazo y prevención de errores en producción.

### Decisión
**TypeScript 5.x** con `strict: true` en `tsconfig.json`. No uso de `any`, preferir `unknown` + type guards.

### Alternativas
- **JavaScript + JSDoc**: Menos verboso pero sin enforcement en compile-time
- **TypeScript non-strict**: Permite migración gradual pero pierde garantías

### Consecuencias
- ✅ Detección temprana de bugs
- ✅ Refactoring seguro
- ✅ Documentación viva en tipos
- ✅ IntelliSense superior
- ⚠️ Verbosidad inicial mayor
- ⚠️ Curva de aprendizaje para tipos avanzados

---

## ADR-003: Estilos - Tailwind CSS + CSS Variables (HSL)

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Necesidad de design system consistente, theming light/dark, y desarrollo rápido sin CSS custom.

### Decisión
**Tailwind CSS 3.4** con variables CSS HSL para colores semánticos (`--primary`, `--accent`, etc.) y `darkMode: 'class'`.

### Alternativas
- **CSS Modules / Styled Components**: Más control pero más boilerplate
- **Tailwind sin CSS variables**: Theming limitado a clase `dark`
- **Vanilla CSS + PostCSS**: Control total pero lento desarrollo

### Consecuencias
- ✅ Theming dinámico sin rebuild (cambio de clase en `<html>`)
- ✅ Consistencia via design tokens
- ✅ Bundle CSS mínimo (purge automático)
- ✅ Responsive design mobile-first nativo
- ⚠️ Clases verbose en JSX
- ⚠️ Requiere conocimiento de utilidades Tailwind

---

## ADR-004: Componentes UI - Shadcn UI (Radix UI Primitives)

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Necesidad de componentes accesibles, personalizables y sin dependencia de libreria pesada.

### Decisión
**Shadcn UI** - Componentes copiados al proyecto (no npm package), basados en **Radix UI** primitives + Tailwind.

### Alternativas
- **Material UI / Chakra UI**: Completos pero opinados, difícil customización profunda
- **Headless UI**: Solo lógica, requiere más CSS custom
- **Componentes propios desde cero**: Control total pero reinventar accesibilidad

### Consecuencias
- ✅ Accesibilidad WAI-ARIA garantizada (Radix)
- ✅ Código en tu repo = control total, sin breaking changes
- ✅ Tree-shaking automático (solo importas lo que usas)
- ✅ Personalización via Tailwind + className
- ⚠️ 30+ archivos de componentes a mantener
- ⚠️ Actualizaciones manuales (no `npm update`)

---

## ADR-005: IA Generativa - Google Genkit + Gemini 2.5 Flash

**Fecha**: 2025-08-04  
**Estado**: Aceptada

### Contexto
Necesidad de generar metadatos SEO automáticos desde contenido de páginas/proyectos.

### Decisión
**Google Genkit** (framework orquestación IA) con modelo **Gemini 2.5 Flash** via `@genkit-ai/google-genai`.

### Alternativas
- **OpenAI API directo**: Funciona pero sin framework de flows/observabilidad
- **LangChain**: Pesado, overkill para flows simples
- **Vercel AI SDK**: Bueno para streaming chat, menos para flows estructurados
- **Custom wrapper**: Reinventar prompt chaining, schemas, tracing

### Consecuencias
- ✅ Flows tipados con Zod (input/output validation)
- ✅ Observabilidad built-in (traces, metrics)
- ✅ Prompt templates versionables
- ✅ Server Actions nativas (`'use server'`)
- ✅ Modelo rápido y barato (Flash)
- ⚠️ Dependencia Google Cloud (billing, quotas)
- ⚠️ Genkit aún en evolución (v1.x)

---

## ADR-006: Mapas - MapLibre GL + Geoapify

**Fecha**: 2025-08-04  
**Estado**: Aceptada

### Contexto
Mostrar ubicación física de la agencia en página de contacto con controles interactivos.

### Decisión
**MapLibre GL** (fork open-source de Mapbox GL) + **Geoapify** para tiles y geocodificación.

### Alternativas
- **Mapbox GL JS**: Propietario, requiere token, costos en escala
- **Leaflet**: Más simple pero menos fluido, sin 3D/tilt
- **Google Maps JS API**: Costoso, términos restrictivos
- **Imagen estática**: No interactiva

### Consecuencias
- ✅ Open source, sin costos de licencia
- ✅ Tiles vectoriales fluidos, controles zoom/rotación
- ✅ Geoapify genera tiles OSM con estilo personalizable
- ✅ Marcadores personalizados (color cian SYNAI)
- ⚠️ Bundle size mayor (~500KB gzipped)
- ⚠️ Requiere WebGL (fallback necesario)

---

## ADR-007: Formularios y Email - React Hook Form + EmailJS

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Formulario de contacto en página `/contacto` sin backend propio.

### Decisión
**React Hook Form** (validación client-side) + **Zod** (schema) + **EmailJS** (servicio email serverless).

### Alternativas
- **Next.js API Routes + Nodemailer**: Requiere servidor SMTP propio
- **Formspree / Netlify Forms**: SaaS, menos control
- **Server Action + Resend/SendGrid**: Requiere dominio verificado, API keys

### Consecuencias
- ✅ Sin backend propio necesario
- ✅ Validación robusta client + server (Zod)
- ✅ EmailJS gratuito hasta 200 emails/mes
- ✅ Template management en dashboard EmailJS
- ⚠️ Claves públicas en client (service ID, template ID, public key)
- ⚠️ Rate limits y dependencia servicio tercero

---

## ADR-008: Estado Global - React Context + Local State

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Gestión de tema (light/dark), toasts, y UI state simple.

### Decisión
- **Tema**: `next-themes` (Context interno)
- **Toasts**: Custom `use-toast.ts` (Reducer + Context)
- **UI State**: `useState`/`useReducer` local por componente

### Alternativas
- **Zustand / Jotai / Redux Toolkit**: Para estado global complejo
- **React Context para todo**: Provider hell, re-renders innecesarios

### Consecuencias
- ✅ Zero dependencias extra para estado simple
- ✅ Predecible, fácil de debuggear
- ✅ Sin boilerplate para features pequeñas
- ⚠️ No escala bien si app crece significativamente
- ⚠️ Toasts custom requieren mantenimiento

---

## ADR-009: Datos Estáticos - TypeScript Const Objects

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Servicios, portafolio, estadísticas - datos que cambian raramente.

### Decisión
Archivo `src/lib/data.ts` con `const` arrays tipados con interfaces TypeScript.

### Alternativas
- **CMS Headless (Contentful, Sanity)**: Overkill para datos estáticos
- **JSON/Markdown files**: Requiere parsing, menos type safety
- **Base de datos**: Innecesario para contenido mostly-static

### Consecuencias
- ✅ Type safety completo (autocomplete en IDE)
- ✅ Versionado en Git (historial de cambios)
- ✅ Zero runtime cost (tree-shaken, inlined)
- ✅ Fácil edición por developers
- ⚠️ Requiere rebuild para cambios de contenido
- ⚠️ No editable por non-technical users

---

## ADR-010: Despliegue - Firebase App Hosting

**Fecha**: 2025-08-01  
**Estado**: Aceptada

### Contexto
Hosting para Next.js 15 con SSR, CDN global, y integración Firebase ecosystem.

### Decisión
**Firebase App Hosting** (configurado en `apphosting.yaml`).

### Alternativas
- **Vercel**: Creador de Next.js, DX superior, pero costos en escala
- **Netlify**: Bueno, pero App Hosting integra mejor con Firebase services
- **Docker + Cloud Run / AWS ECS**: Control total, más DevOps overhead
- **Static Export**: Pierde SSR/ISR/Server Actions

### Consecuencias
- ✅ SSR/ISR/Server Actions nativos
- ✅ CDN global, auto-scaling
- ✅ Integración nativa Auth, Firestore, Functions
- ✅ Preview channels automáticos en PRs
- ⚠️ Vendor lock-in Firebase/Google Cloud
- ⚠️ Costos impredecibles en alto tráfico

---

## ADR-011: Convenciones de Código - Biome (Pendiente)

**Fecha**: 2025-08-24  
**Estado**: Propuesta

### Contexto
Actualmente solo ESLint (Next.js default). Biome ofrece lint + format en una herramienta Rust rápida.

### Decisión
Evaluar migración a **Biome** para lint + format unificado.

### Alternativas
- **ESLint + Prettier**: Actual, funciona pero dos herramientas
- **Biome**: Single tool, 10-100x más rápido, menos config

### Consecuencias
- ✅ Velocidad extrema (Rust)
- ✅ Configuración mínima (biome.json)
- ✅ Lint + Format en un pass
- ⚠️ Reglas menos maduras que ESLint
- ⚠️ Migración de config existente requerida

---

## ADR-012: Testing Strategy - Pendiente de Definición

**Fecha**: 2025-08-24  
**Estado**: Propuesta

### Contexto
Proyecto sin tests. Necesidad de definir estrategia antes de Fase 4.

### Decisión
Por definir. Opciones en evaluación.

### Alternativas
| Enfoque | Unit/Integration | E2E | Cobertura Objetivo |
|---------|------------------|-----|-------------------|
| **Jest + RTL + Playwright** | ✅ Maduro | ✅ Estándar | 80% unit, critical paths E2E |
| **Vitest + RTL + Playwright** | ✅ Rápido (Vite) | ✅ Estándar | Similar |
| **React Testing Library + Playwright only** | ✅ Simple | ✅ | Solo critical paths |

### Consecuencias
- Pendiente de decisión en Fase 4 planning

---

## Decisiones Futuras (Backlog)

- [ ] **ADR-013**: CMS para Blog/Recursos (Contentlayer vs Sanity vs Notion API)
- [ ] **ADR-014**: Autenticación para Área Cliente (NextAuth vs Clerk vs Supabase)
- [ ] **ADR-015**: Analytics (Vercel Analytics vs GA4 vs Plausible)
- [ ] **ADR-016**: Almacenamiento Imágenes (Vercel Blob vs Cloudinary vs Firebase Storage)
- [ ] **ADR-017**: i18n Strategy (next-intl vs next-i18next vs custom)
- [ ] **ADR-018**: PWA Implementation (next-pwa vs workbox custom)