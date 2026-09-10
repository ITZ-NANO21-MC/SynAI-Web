# SYNAI - Estado Actual del Proyecto

## Estado General

| Campo | Valor |
|-------|-------|
| **Fase Actual** | 4 - Optimización y Escalabilidad |
| **Módulo Actual** | 4.5 - Testing (Planificado) |
| **Última Acción** | Completados módulos 4.1-4.4: SEO On-Page dinámico, sitemap/robots, Open Graph, Performance (code-split `/contacto` 324→117 kB) y Accesibilidad. Deploy a Netlify + realineación de contenido comercial |
| **Próxima Acción** | Iniciar Módulo 4.5: Configurar Vitest + escribir tests unitarios (seo.ts, data.ts, form contacto) |
| **Bloqueos** | Ninguno |

## Progreso por Fase

### Fase 1: Fundación y Core ✅ COMPLETADA
- [x] Configuración Next.js 15 + TypeScript strict
- [x] Tailwind CSS + Shadcn UI (30+ componentes)
- [x] Design System (CSS variables, fonts, colors)
- [x] Layout raíz + Header + Footer
- [x] Sistema de temas (light/dark/system)
- [x] Página Home (Hero, Stats, Servicios preview, CTA)
- [x] Datos estáticos tipados (Servicios, Portafolio, Stats)

### Fase 2: Páginas de Contenido ✅ COMPLETADA
- [x] `/servicios` - Grid de servicios con cards expansibles
- [x] `/portafolio` - Filtros Web/App/ML, Grid, Modal detalle 420x420
- [x] `/contacto` - Formulario EmailJS + Mapa Geoapify/MapLibre + Canales
- [x] `/galeria` - Masonry grid visual
- [x] Componentes compartidos: WhatsAppButton, ThemeToggle

### Fase 3: Inteligencia Artificial y SEO ✅ COMPLETADA
- [x] Genkit configurado con Google Gemini 2.5 Flash
- [x] Flujo `generateSeoMetadata` (Server Action tipado con Zod)
- [x] Prompt optimizado para metaTitle (<60 chars) y metaDescription (<160 chars)
- [x] Entry point para desarrollo (`genkit:dev`, `genkit:watch`)

### Fase 4: Optimización y Escalabilidad 🔄 EN PROGRESO (~70%)
- [x] **SEO On-Page**: Metadata dinámica en layout.tsx y páginas (`lib/seo.ts` + `generateMetadata`)
- [x] **Sitemap**: `app/sitemap.ts` (5 rutas estáticas, último modificado) + `app/robots.ts`
- [x] **Open Graph**: `app/og/route.tsx` (1200x630) + tags OG/Twitter por página
- [x] **Performance**: MapLibre/Genkit code-split (`/contacto` 324→117 kB), imágenes AVIF/WebP, `poweredByHeader:false`
- [x] **Accesibilidad**: Auditoría WCAG 2.1 AA (focus-visible, jerarquía heading, ARIA, skip link, alt descriptivos)
- [ ] **Testing**: Unit tests + E2E tests (pendiente - módulo 4.5)
- [ ] **Analytics**: Vercel Analytics / GA4 (pendiente - módulo 4.6)

### Fase 5: Funcionalidades Avanzadas ⏳ PENDIENTE
- [ ] Blog/Recursos con CMS headless
- [ ] Cotizador online multi-paso
- [ ] Área cliente con autenticación
- [ ] Webhooks CRM
- [ ] Multi-idioma (i18n)
- [ ] PWA

## Métricas de Calidad Actuales

| Métrica | Estado | Observaciones |
|---------|--------|---------------|
| **TypeScript** | ✅ Strict | `tsc --noEmit` pasa |
| **ESLint** | ✅ Configurado | `npm run lint` pasa (0 errores) |
| **Build** | ✅ Exitoso | `npm run build` genera 10 páginas estáticas |
| **Dev Server** | ✅ Funcional | Turbopack en puerto 9002 |
| **Genkit Dev** | ✅ Funcional | `npm run genkit:dev` levanta UI |
| **Tests** | ❌ Ausentes | No hay suite de tests (pendiente módulo 4.5) |
| **CI/CD** | ⚠️ Parcial | Deploy en Netlify conectado a `origin/main`

## Deuda Técnica Identificada

| Área | Descripción | Impacto | Esfuerzo |
|------|-------------|---------|----------|
| **Imágenes** | Placeholders usan placehold.co/unsplash; faltan imágenes reales optimizadas | Medio | Medio |
| **SEO Base URL** | `NEXT_PUBLIC_BASE_URL` aún no definido en Netlify (sitemap usa fallback `synai.dev`) | Medio | Bajo |
| **Testing** | 0% cobertura; sin configuración Vitest/Playwright | Alto | Alto |
| **Accesibilidad** | Auditoría manual completada; falta automatizar con axe-core | Bajo | Bajo |
| **Bundle** | `/contacto` optimizado; sin análisis global de bundle size | Bajo | Bajo |
| **Error Handling** | Try/catch básico en formulario; sin error boundary global | Medio | Bajo |

## Comandos de Verificación

```bash
# Desarrollo
npm run dev              # Next.js + Turbopack (puerto 9002)
npm run genkit:dev       # Genkit UI para probar flujos IA

# Calidad
npm run lint             # ESLint
npm run typecheck        # TypeScript strict check
npm run build            # Build producción

# Despliegue
# Deploy automático en Netlify (synaitech.netlify.app) conectado a origin/main
# Build: npm run build | Publish: .next (Netlify detecta Next.js)
# Pendiente: NEXT_PUBLIC_BASE_URL + NEXT_PUBLIC_* (EmailJS/Geoapify) en Netlify
```

## Decisiones Pendientes (para DECISIONS.md)

1. **Testing Framework**: Jest + React Testing Library vs Vitest + Playwright
2. **CMS para Blog**: Contentlayer (MDX) vs Sanity vs Headless WP
3. **Auth para Área Cliente**: NextAuth.js vs Clerk vs Supabase Auth
4. **Analytics**: Vercel Analytics (gratis) vs GA4 vs Plausible
5. **Imágenes reales**: Migración a Cloudinary / Vercel Blob / Firebase Storage