# SYNAI - Estado Actual del Proyecto

## Estado General

| Campo | Valor |
|-------|-------|
| **Fase Actual** | 4 - Optimización y Escalabilidad |
| **Módulo Actual** | 4.1 - SEO On-Page Dinámico (Planificado) |
| **Última Acción** | Plan de Fase 4 creado: `.context/plans/phase-4-plan.md` con 6 módulos, 47 tareas, asignación a artesanos, criterios de aceptación y timeline de 4 semanas |
| **Próxima Acción** | Iniciar Módulo 4.1: Crear helper SEO `lib/seo.ts` + implementar `generateMetadata` en layout.tsx y páginas |
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

### Fase 4: Optimización y Escalabilidad 🔄 EN PROGRESO (0%)
- [ ] **SEO On-Page**: Metadata dinámica en layout.tsx y páginas
- [ ] **Sitemap**: Generación automática (next-sitemap / app/sitemap.ts)
- [ ] **Open Graph**: OG tags + Twitter cards por página
- [ ] **Performance**: Core Web Vitals, optimización imágenes
- [ ] **Accesibilidad**: Auditoría WCAG 2.1 AA
- [ ] **Testing**: Unit tests + E2E tests
- [ ] **Analytics**: Vercel Analytics / GA4

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
| **ESLint** | ✅ Configurado | `next lint` pasa (ignoreDuringBuilds) |
| **Build** | ✅ Exitoso | `npm run build` funciona |
| **Dev Server** | ✅ Funcional | Turbopack en puerto 9002 |
| **Genkit Dev** | ✅ Funcional | `npm run genkit:dev` levanta UI |
| **Tests** | ❌ Ausentes | No hay suite de tests |
| **CI/CD** | ⚠️ Parcial | Solo build/lint en apphosting.yaml |

## Deuda Técnica Identificada

| Área | Descripción | Impacto | Esfuerzo |
|------|-------------|---------|----------|
| **Imágenes** | Placeholders usan placehold.co/unsplash; faltan imágenes reales optimizadas | Medio | Medio |
| **SEO** | Metadata estática en layout.tsx; no usa flujo Genkit | Alto | Bajo |
| **Testing** | 0% cobertura; sin configuración Jest/Playwright | Alto | Alto |
| **Accesibilidad** | Sin auditoría formal; focus states básicos | Medio | Medio |
| **Bundle** | No hay análisis de bundle size | Bajo | Bajo |
| **Error Handling** | Try/catch básico en formulario; sin boundary global | Medio | Bajo |

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
# Configurado en apphosting.yaml para Firebase App Hosting
```

## Decisiones Pendientes (para DECISIONS.md)

1. **Testing Framework**: Jest + React Testing Library vs Vitest + Playwright
2. **CMS para Blog**: Contentlayer (MDX) vs Sanity vs Headless WP
3. **Auth para Área Cliente**: NextAuth.js vs Clerk vs Supabase Auth
4. **Analytics**: Vercel Analytics (gratis) vs GA4 vs Plausible
5. **Imágenes reales**: Migración a Cloudinary / Vercel Blob / Firebase Storage