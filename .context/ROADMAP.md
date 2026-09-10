# SYNAI - Roadmap del Proyecto

## Fases del Proyecto

### Fase 1: Fundación y Core (COMPLETADA)
**Objetivo**: Establecer la base técnica, diseño system y páginas principales

| Módulo | Archivos | Estado |
|--------|----------|--------|
| Configuración base | `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts` | ✅ |
| Design System | `globals.css` (CSS variables), `tailwind.config.ts` (fonts, colors) | ✅ |
| Componentes UI base | 30+ componentes en `src/components/ui/` (Shadcn) | ✅ |
| Layout principal | `src/app/layout.tsx`, `Header.tsx`, `Footer.tsx` | ✅ |
| Sistema de temas | `theme-provider.tsx`, `ThemeToggle.tsx` | ✅ |
| Página Home | `src/app/page.tsx` (Hero, Stats, Servicios, CTA) | ✅ |
| Datos estáticos | `src/lib/data.ts` (Servicios, Portafolio, Stats) | ✅ |
| Placeholders imágenes | `src/lib/placeholder-images.ts/json` | ✅ |

**Dependencias**: Ninguna (fase inicial)

---

### Fase 2: Páginas de Contenido (COMPLETADA)
**Objetivo**: Implementar páginas de servicios, portafolio, contacto y galería

| Módulo | Archivos | Estado |
|--------|----------|--------|
| Página Servicios | `src/app/servicios/page.tsx` (Grid, cards, detalles) | ✅ |
| Página Portafolio | `src/app/portafolio/page.tsx` (Filtros, Grid, Modal detalle) | ✅ |
| Página Contacto | `src/app/contacto/page.tsx` (Formulario, Mapa Geoapify, Canales) | ✅ |
| Página Galería | `src/app/galeria/page.tsx` (Masonry grid visual) | ✅ |
| WhatsApp Button | `src/components/shared/WhatsAppButton.tsx` | ✅ |
| Hooks auxiliares | `use-mobile.tsx`, `use-toast.ts` | ✅ |

**Dependencias**: Fase 1 completada

---

### Fase 3: Inteligencia Artificial y SEO (COMPLETADA)
**Objetivo**: Integrar Genkit para generación automática de metadatos SEO

| Módulo | Archivos | Estado |
|--------|----------|--------|
| Config Genkit | `src/ai/genkit.ts` (Gemini 2.5 Flash) | ✅ |
| Entry point dev | `src/ai/dev.ts` | ✅ |
| Flujo SEO | `src/ai/flows/generate-seo-metadata.ts` (Server Action) | ✅ |
| Prompt estructurado | Schema Zod + Prompt template optimizado | ✅ |

**Dependencias**: Fase 1 completada

---

### Fase 4: Optimización y Escalabilidad (EN PROGRESO)
**Objetivo**: Mejorar rendimiento, SEO, accesibilidad y prepara para crecimiento

| Módulo | Archivos | Estado | Prioridad |
|--------|----------|--------|-----------|
| **SEO On-Page** | `lib/seo.ts` + `generateMetadata` en todas las páginas | ✅ Completado | Alta |
| **Sitemap/Robots** | `app/sitemap.ts` + `app/robots.ts` | ✅ Completado¹ | Alta |
| **Open Graph** | `app/og/route.tsx` + tags OG/Twitter por página | ✅ Completado | Media |
| **Performance** | Code-split MapLibre/Genkit (`/contacto` 324→117 kB), AVIF/WebP, `poweredByHeader:false` | ✅ Completado | Media |
| **Accesibilidad** | Auditoría WCAG 2.1 AA, focus-visible, jerarquía heading, ARIA | ✅ Completado | Media |
| **Testing** | Unit tests (Vitest), E2E (Playwright), A11y (axe-core) | 🔄 Pendiente (Ver plan) | Baja |
| **Analytics** | Vercel Analytics / GA4 integration | 🔄 Pendiente (Ver plan) | Baja |

¹ *Pendiente operativo: definir `NEXT_PUBLIC_BASE_URL` en Netlify para que el sitemap apunte al dominio correcto (hoy usa el fallback `https://synai.dev`).*

**Dependencias**: Fases 1-3 completadas  
**Plan Detallado**: `.context/plans/phase-4-plan.md` (47 tareas, 6 módulos, 4 semanas)

---

### Fase 5: Funcionalidades Avanzadas (FUTURO)
**Objetivo**: Añadir capacidades de negocio y automatización

| Módulo | Descripción | Prioridad |
|--------|-------------|-----------|
| **Blog/Recursos** | CMS headless (Contentlayer/MDX) para artículos técnicos | Media |
| **Cotizador Online** | Formulario multi-paso con cálculo automático de precios | Media |
| **Área Cliente** | Portal con autenticación (NextAuth), dashboard proyectos | Baja |
| **Webhooks** | Integración CRM (HubSpot/Pipedrive) desde formulario contacto | Baja |
| **Multi-idioma** | i18n (es/en) con next-intl | Baja |
| **PWA** | Service Worker, manifest, offline support | Baja |

**Dependencias**: Fase 4 completada

---

## Resumen de Estado Actual

| Fase | Nombre | Progreso | Bloqueos |
|------|--------|----------|----------|
| 1 | Fundación y Core | 100% | Ninguno |
| 2 | Páginas de Contenido | 100% | Ninguno |
| 3 | IA y SEO | 100% | Ninguno |
| 4 | Optimización | ~70% | NEXT_PUBLIC_BASE_URL en Netlify |
| 5 | Funcionalidades Avanzadas | 0% | Requiere Fase 4 (Testing/Analytics) |

---

## Próximos Pasos Inmediatos

1. ✅ **Ejecutar `/plan-phase --phase 4`** - Plan creado en `.context/plans/phase-4-plan.md`
2. ✅ **Módulos 4.1-4.4 completados**: SEO On-Page, Sitemap/Robots, Open Graph, Performance y Accesibilidad
3. **Configurar `NEXT_PUBLIC_BASE_URL` en Netlify** para el sitemap y assets OG
4. **Iniciar Módulo 4.5**: Configurar Vitest + tests unitarios (seo.ts, data.ts, form contacto)
5. **Iniciar Módulo 4.5 (cont.)**: Playwright E2E (navegación, formulario, a11y) + axe-core
6. **Iniciar Módulo 4.6**: Analytics (Vercel Analytics / GA4)
7. **Artesanos**: @backend-artisan (lead 4.1), @devops-artisan (lead 4.2), @frontend-artisan (OG images), @qa-artisan (verification)
8. **ADRs Pendientes**: @architecture-artisan → ADR-012 (Testing Stack), ADR-013 (Analytics Provider)