# Plan de Fase 4: Optimización y Escalabilidad

**Versión**: 1.0  
**Fecha**: 2025-08-24  
**Estado**: Planificado - Listo para ejecución  
**Fase anterior**: 3 (IA y SEO) ✅ Completada  
**Fase siguiente**: 5 (Funcionalidades Avanzadas) - Requiere Fase 4 completa

---

## Objetivos de la Fase

1. **SEO Técnico Completo**: Metadata dinámica, sitemap, robots, Open Graph
2. **Performance Core Web Vitals**: LCP < 2.5s, CLS < 0.1, TBT < 300ms
3. **Accesibilidad WCAG 2.1 AA**: Auditoría + remediación automatizada
4. **Testing Foundation**: Unit + Integration + E2E + A11y testing
5. **Observabilidad**: Analytics + Error tracking + Performance monitoring

---

## Módulos y Tareas Detalladas

### MÓDULO 4.1: SEO On-Page Dinámico (Prioridad: ALTA)
**Artesano Asignado**: @backend-artisan + @frontend-artisan  
**Dependencias**: Fase 3 (Genkit flow `generateSeoMetadata` listo)  
**Estimación**: 2-3 días

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.1.1 | **Crear helper SEO reutilizable** | Función `generatePageMetadata(pageType, content, keywords)` en `lib/seo.ts` que llama al flow Genkit | `src/lib/seo.ts` (nuevo) | @backend-artisan |
| 4.1.2 | **Implementar `generateMetadata` en layout.tsx** | Metadata base del sitio + fallback estático si Genkit falla | `src/app/layout.tsx` | @backend-artisan |
| 4.1.3 | **Metadata dinámica: Home (/)** | Usar contenido hero + stats + servicios para generar metaTitle/Description | `src/app/page.tsx` | @backend-artisan |
| 4.1.4 | **Metadata dinámica: Servicios (/servicios)** | Iterar `SERVICIOS` para contenido + keywords por servicio | `src/app/servicios/page.tsx` | @backend-artisan |
| 4.1.5 | **Metadata dinámica: Portafolio (/portafolio)** | Contenido filtrado por categoría + proyectos destacados | `src/app/portafolio/page.tsx` | @backend-artisan |
| 4.1.6 | **Metadata dinámica: Contacto (/contacto)** | Keywords: contacto, Falcón, consultoría IA, soporte técnico | `src/app/contacto/page.tsx` | @backend-artisan |
| 4.1.7 | **Metadata dinámica: Galería (/galeria)** | Keywords: galería, proyectos, casos de estudio | `src/app/galeria/page.tsx` | @backend-artisan |
| 4.1.8 | **Añadir Open Graph + Twitter Cards** | `openGraph` y `twitter` fields en cada `generateMetadata` | Todas las páginas | @frontend-artisan |
| 4.1.9 | **Imagen OG por defecto** | Crear `/public/og-default.jpg` (1200x630) + referenciar en metadata | `public/og-default.jpg` (nuevo) | @frontend-artisan |
| 4.1.10 | **Testing SEO** | Verificar meta tags en HTML renderizado + Lighthouse SEO score | Script de verificación | @qa-artisan |

#### Criterios de Aceptación
- [ ] Cada página tiene `generateMetadata` async que retorna title, description, openGraph, twitter
- [ ] metaTitle < 60 chars, metaDescription < 160 chars (validado por Zod en flow)
- [ ] Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
- [ ] Twitter: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Fallback estático si Genkit falla (try/catch + default metadata)
- [ ] Lighthouse SEO score ≥ 90 en todas las páginas
- [ ] `npm run typecheck` + `npm run lint` + `npm run build` pasan

---

### MÓDULO 4.2: Sitemap.xml y Robots.txt (Prioridad: ALTA)
**Artesano Asignado**: @devops-artisan + @backend-artisan  
**Dependencias**: Módulo 4.1 (URLs canónicas definidas)  
**Estimación**: 0.5-1 día

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.2.1 | **Crear `app/sitemap.ts`** | Genera sitemap dinámico con todas las rutas públicas + lastmod | `src/app/sitemap.ts` (nuevo) | @backend-artisan |
| 4.2.2 | **Crear `app/robots.ts`** | Robots.txt con allow all + sitemap reference | `src/app/robots.ts` (nuevo) | @backend-artisan |
| 4.2.3 | **Configurar `lastmod` dinámico** | Usar fecha de último deploy o git commit para páginas estáticas | `src/app/sitemap.ts` | @backend-artisan |
| 4.2.4 | **Excluir rutas privadas** | No incluir `/api/*`, `/_next/*`, rutas de admin futuras | `src/app/robots.ts` | @backend-artisan |
| 4.2.5 | **Validar sitemap** | Verificar XML válido + URLs responden 200 | Script + curl | @qa-artisan |

#### Criterios de Aceptación
- [ ] `/sitemap.xml` accesible y válido (XML schema)
- [ ] Incluye: `/`, `/servicios`, `/portafolio`, `/contacto`, `/galeria`
- [ ] `<lastmod>` en formato ISO 8601
- [ ] `/robots.txt` permite crawling + referencia sitemap
- [ ] `npm run build` genera archivos en `.next/server/app/`

---

### MÓDULO 4.3: Performance - Core Web Vitals (Prioridad: MEDIA)
**Artesano Asignado**: @frontend-artisan + @devops-artisan  
**Dependencias**: Módulos 4.1, 4.2 (metadata no bloqueante)  
**Estimación**: 2-3 días

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.3.1 | **Auditoría Lighthouse baseline** | Ejecutar `npx lhci autorun` o PageSpeed Insights en todas las páginas | Reporte baseline | @frontend-artisan |
| 4.3.2 | **Optimizar imágenes Hero (LCP)** | `priority=true` + `fetchPriority="high"` + sizes correctos en Home | `src/app/page.tsx`, `src/app/servicios/page.tsx` | @frontend-artisan |
| 4.3.3 | **Preload fonts críticas** | `<link rel="preload" as="font" crossorigin>` para Inter + Space Grotesk | `src/app/layout.tsx` | @frontend-artisan |
| 4.3.4 | **Optimizar MapLibre GL (Contacto)** | Dynamic import + `loading="lazy"` + suspense boundary | `src/app/contacto/page.tsx` | @frontend-artisan |
| 4.3.5 | **Code splitting Genkit** | Dynamic import del flow SEO solo cuando se necesite | `src/lib/seo.ts` | @backend-artisan |
| 4.3.6 | **Reducir bundle JS** | Analizar con `@next/bundle-analyzer`, eliminar imports barrel innecesarios | `package.json`, imports | @devops-artisan |
| 4.3.7 | **Configurar `next.config.ts` optimizaciones** | `swcMinify: true`, `compress: true`, `poweredByHeader: false` | `next.config.ts` | @devops-artisan |
| 4.3.8 | **Imágenes: formatos modernos** | Verificar `next.config.ts` permite AVIF/WebP, placeholders blur | `next.config.ts`, placeholders | @frontend-artisan |
| 4.3.9 | **Third-party scripts lazy** | Geoapify, EmailJS, Genkit - cargar solo cuando necesarios | `src/app/contacto/page.tsx`, `src/lib/seo.ts` | @frontend-artisan |
| 4.3.10 | **Lighthouse CI en PR** | Configurar budget: LCP<2.5s, CLS<0.1, TBT<300ms, Performance>90 | `lighthouse-ci.config.js` (nuevo) | @devops-artisan |

#### Criterios de Aceptación
- [ ] LCP < 2.5s en todas las páginas (mobile + desktop)
- [ ] CLS < 0.1 en todas las páginas
- [ ] TBT < 300ms en todas las páginas
- [ ] Lighthouse Performance score ≥ 90
- [ ] Bundle JS total < 200KB gzipped (analizar con bundle-analyzer)
- [ ] No layout shifts visibles en carga inicial
- [ ] Fonts cargadas sin flash (FOUT/FOIT minimizado)

---

### MÓDULO 4.4: Accesibilidad WCAG 2.1 AA (Prioridad: MEDIA)
**Artesano Asignado**: @frontend-artisan + @qa-artisan  
**Dependencias**: Módulo 4.3 (performance no rompe a11y)  
**Estimación**: 2-3 días

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.4.1 | **Auditoría axe-core automatizada** | Ejecutar `npx @axe-core/playwright` en todas las páginas | Reporte violaciones | @qa-artisan |
| 4.4.2 | **Fix: Contraste de colores** | Verificar ratios 4.5:1 (texto) / 3:1 (UI) en light/dark mode | `globals.css`, `tailwind.config.ts` | @frontend-artisan |
| 4.4.3 | **Fix: Focus visible** | `focus-visible:ring-2 focus-visible:ring-ring` en TODOS interactivos | `components/ui/*.tsx`, páginas | @frontend-artisan |
| 4.4.4 | **Fix: Labels en formularios** | `htmlFor` + `id` en todos los inputs, `aria-describedby` para errores | `src/app/contacto/page.tsx` | @frontend-artisan |
| 4.4.5 | **Fix: Heading hierarchy** | h1 → h2 → h3 semántico en todas las páginas | Todas las páginas | @frontend-artisan |
| 4.4.6 | **Fix: ARIA en componentes compuestos** | Dialog, Tabs, Select, DropdownMenu - roles/estados correctos | `components/ui/dialog.tsx`, `tabs.tsx`, `select.tsx`, `dropdown-menu.tsx` | @frontend-artisan |
| 4.4.7 | **Fix: Skip link** | "Saltar al contenido principal" al inicio de `layout.tsx` | `src/app/layout.tsx` | @frontend-artisan |
| 4.4.8 | **Fix: Landmarks** | `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>` semánticos | `src/app/layout.tsx`, páginas | @frontend-artisan |
| 4.4.9 | **Fix: Imágenes decorativas** | `alt=""` + `role="presentation"` para imágenes puramente decorativas | Todas las páginas | @frontend-artisan |
| 4.4.10 | **Testing A11y en CI** | Playwright + axe-core en pipeline, fallar si violations > 0 | `.github/workflows/qa.yml` | @qa-artisan |

#### Criterios de Aceptación
- [ ] 0 violaciones axe-core (automatizadas) en todas las páginas
- [ ] Contraste ≥ 4.5:1 texto normal, ≥ 3:1 large text/UI en light + dark
- [ ] Focus visible claro y consistente en todos los elementos interactivos
- [ ] Navegación 100% por teclado (Tab, Enter, Escape, Arrow keys)
- [ ] Screen reader compatible (NVDA/VoiceOver testing manual)
- [ ] Heading hierarchy correcta (h1 único por página)
- [ ] Landmarks semánticos presentes
- [ ] Lighthouse Accessibility score ≥ 95

---

### MÓDULO 4.5: Testing Foundation (Prioridad: BAJA)
**Artesano Asignado**: @qa-artisan + @backend-artisan + @frontend-artisan  
**Dependencias**: Módulos 4.1-4.4 (código estable para testear)  
**Estimación**: 3-4 días

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.5.1 | **ADR-012: Decidir Testing Stack** | Evaluar Vitest vs Jest, documentar en DECISIONS.md | `.context/DECISIONS.md` | @architecture-artisan |
| 4.5.2 | **Setup Vitest + RTL** | `vitest.config.ts`, `vitest.setup.ts`, deps en package.json | Config files | @qa-artisan |
| 4.5.3 | **Setup Playwright** | `playwright.config.ts`, `e2e/` folder, deps | Config files | @qa-artisan |
| 4.5.4 | **Setup MSW (Mock Service Worker)** | Handlers para EmailJS, Geoapify, Genkit API | `mocks/handlers.ts`, `mocks/server.ts` | @qa-artisan |
| 4.5.5 | **Unit Tests: Utils & Helpers** | `cn()`, `generateSeoMetadata` wrapper, data validation | `src/lib/utils.test.ts`, `src/lib/seo.test.ts` | @qa-artisan |
| 4.5.6 | **Unit Tests: Components UI** | Button, Card, Dialog, Form, Toast - variants + a11y | `components/ui/*.test.tsx` | @qa-artisan + @frontend-artisan |
| 4.5.7 | **Unit Tests: Hooks** | `use-toast`, `use-mobile` | `hooks/*.test.ts` | @qa-artisan |
| 4.5.8 | **Integration Tests: Server Actions** | `generateSeoMetadata` flow, contact form submission | `ai/flows/*.test.ts` | @qa-artisan + @backend-artisan |
| 4.5.9 | **E2E Tests: Critical Paths** | 1) Home → Contacto → Submit, 2) Portafolio filters, 3) Theme toggle, 4) Mobile nav | `e2e/*.spec.ts` | @qa-artisan |
| 4.5.10 | **A11y Tests Automatizados** | Playwright + axe-core en suite E2E | `e2e/a11y.spec.ts` | @qa-artisan |
| 4.5.11 | **CI Pipeline QA** | GitHub Actions: typecheck + lint + test + test:e2e + test:a11y | `.github/workflows/qa.yml` | @devops-artisan |
| 4.5.12 | **Coverage Thresholds** | Configurar mínimos: lines 70%, functions 70%, branches 60% | `vitest.config.ts` | @qa-artisan |

#### Criterios de Aceptación
- [ ] `npm run test` pasa con coverage ≥ thresholds
- [ ] `npm run test:e2e` pasa 5 critical paths
- [ ] `npm run test:a11y` 0 violations
- [ ] CI pipeline ejecuta todos los gates en PRs
- [ ] Tests determinísticos (no flaky)
- [ ] Mock MSW cubre EmailJS, Geoapify, Genkit
- [ ] Documentation: `TESTING.md` con guía de escritura de tests

---

### MÓDULO 4.6: Analytics y Observabilidad (Prioridad: BAJA)
**Artesano Asignado**: @devops-artisan + @product-artisan  
**Dependencias**: Módulo 4.5 (CI listo para deploy)  
**Estimación**: 1 día

#### Tareas

| ID | Tarea | Descripción | Archivos Afectados | Artesano |
|----|-------|-------------|-------------------|----------|
| 4.6.1 | **Decidir Analytics Provider** | Vercel Analytics (gratis) vs GA4 vs Plausible - ADR | `.context/DECISIONS.md` | @product-artisan + @architecture-artisan |
| 4.6.2 | **Implementar Analytics** | Script en `layout.tsx` + consentimiento (GDPR/CCPA) | `src/app/layout.tsx` | @frontend-artisan |
| 4.6.3 | **Event Tracking** | Clicks CTA, form submits, portfolio views, theme changes | Hook `useAnalytics` (nuevo) | @frontend-artisan |
| 4.6.4 | **Error Tracking** | Sentry o Vercel Error Tracking (opcional) | `sentry.client.config.ts` | @devops-artisan |
| 4.6.5 | **Performance Monitoring** | Vercel Speed Insights / Web Vitals API | `next.config.ts` | @devops-artisan |

#### Criterios de Aceptación
- [ ] Analytics activo en producción
- [ ] Eventos clave trackeados (CTA, forms, portfolio)
- [ ] Consentimiento cookie banner funcional (si GDPR)
- [ ] Error tracking capturando exceptions
- [ ] Core Web Vitals reportados en dashboard

---

## Dependencias y Orden de Ejecución

```
┌─────────────────────────────────────────────────────────────────┐
│                    PLAN DE EJECUCIÓN FASE 4                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEMANA 1                                                       │
│  ┌─────────────────┐  ┌─────────────────┐                      │
│  │  MÓDULO 4.1     │  │  MÓDULO 4.2     │  (Paralelo)          │
│  │  SEO Dinámico   │  │  Sitemap/Robots │                      │
│  │  (2-3 días)     │  │  (0.5-1 día)    │                      │
│  └────────┬────────┘  └────────┬────────┘                      │
│           │                    │                                │
│           └────────┬───────────┘                                │
│                    ▼                                            │
│  SEMANA 2                                                       │
│  ┌─────────────────┐  ┌─────────────────┐                      │
│  │  MÓDULO 4.3     │  │  MÓDULO 4.4     │  (Paralelo)          │
│  │  Performance    │  │  Accesibilidad  │                      │
│  │  (2-3 días)     │  │  (2-3 días)     │                      │
│  └────────┬────────┘  └────────┬────────┘                      │
│           │                    │                                │
│           └────────┬───────────┘                                │
│                    ▼                                            │
│  SEMANA 3                                                       │
│  ┌─────────────────────────────────────────┐                   │
│  │           MÓDULO 4.5                    │                   │
│  │        Testing Foundation               │                   │
│  │           (3-4 días)                    │                   │
│  └─────────────────┬──────────────────────┘                   │
│                    ▼                                            │
│  SEMANA 4                                                       │
│  ┌─────────────────────────────────────────┐                   │
│  │           MÓDULO 4.6                    │                   │
│  │      Analytics + Observabilidad         │                   │
│  │            (1 día)                      │                   │
│  └─────────────────────────────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Paralelización Recomendada

| Paralelo | Módulos | Artesanos |
|----------|---------|-----------|
| **Bloque 1** | 4.1 + 4.2 | @backend-artisan (lead), @frontend-artisan, @devops-artisan, @qa-artisan |
| **Bloque 2** | 4.3 + 4.4 | @frontend-artisan (lead), @devops-artisan, @qa-artisan |
| **Bloque 3** | 4.5 | @qa-artisan (lead), @backend-artisan, @frontend-artisan, @devops-artisan |
| **Bloque 4** | 4.6 | @devops-artisan, @product-artisan |

---

## Verificación de Completitud (Definition of Done)

### Por Módulo
- [ ] **4.1 SEO**: Todas las páginas tienen `generateMetadata` + OG + Twitter + fallback
- [ ] **4.2 Sitemap**: `/sitemap.xml` y `/robots.txt` válidos y accesibles
- [ ] **4.3 Performance**: Lighthouse ≥ 90, CWV dentro de budget
- [ ] **4.4 A11y**: 0 axe violations, contraste OK, focus visible, keyboard nav
- [ ] **4.5 Testing**: Unit + Integration + E2E + A11y en CI, coverage thresholds
- [ ] **4.6 Analytics**: Deployado y trackeando eventos clave

### Global (Pre-Merge a main)
- [ ] `npm run typecheck` — 0 errores
- [ ] `npm run lint` — 0 warnings
- [ ] `npm run build` — Exitoso
- [ ] `npm run test` — Todos pasan, coverage ≥ thresholds
- [ ] `npm run test:e2e` — Critical paths verdes
- [ ] `npm run test:a11y` — 0 violations
- [ ] Lighthouse CI — Performance ≥ 90, A11y ≥ 95, SEO ≥ 90
- [ ] Bundle analysis — Sin regresiones > 10%
- [ ] CHANGELOG.md actualizado con cambios de Fase 4
- [ ] STATE.md actualizado: Fase 4 → 100%, Fase 5 → Next

---

## Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **Genkit latency en `generateMetadata`** | Media | Alto (TTFB) | Cachear resultados (ISR), fallback síncrono, timeout 2s |
| **MapLibre GL bundle size** | Alta | Medio | Dynamic import + lazy load solo en `/contacto` |
| **Flaky E2E tests** | Media | Alto | Retry logic, test data isolation, waitFor selectores robustos |
| **CSP rompe Geoapify/Genkit** | Media | Medio | Report-only mode primero, nonces para inline scripts |
| **Contraste dark mode insuficiente** | Baja | Alto | Auditar tokens CSS HSL, ajustar `--muted-foreground`, `--secondary` |
| **Bundle size crece con tests** | Baja | Bajo | Excluir test files de build producción (ya por defecto) |

---

## Comandos de Verificación Rápida

```bash
# Desarrollo
npm run dev                    # Puerto 9002
npm run genkit:dev            # UI Genkit para probar flows

# Calidad (ejecutar ANTES de commit)
npm run typecheck             # TypeScript strict
npm run lint                  # ESLint
npm run build                 # Build producción

# Testing (cuando Módulo 4.5 completo)
npm run test                  # Unit + Integration + Coverage
npm run test:e2e              # Playwright E2E
npm run test:a11y             # Axe-core automatizado

# Performance
npm run build && npx @next/bundle-analyzer  # Analizar bundle
npx lhci autorun              # Lighthouse CI (requiere config)

# SEO Verification
curl -s http://localhost:9000 | grep -E "(meta title|meta description|og:|twitter:)"
curl -s http://localhost:9000/sitemap.xml | xmllint --format -
curl -s http://localhost:9000/robots.txt
```

---

## Próximos Pasos Inmediatos

1. **Masterbuilder** aprueba este plan → `STATE.md` actualizado a "En progreso"
2. **Architecture Artisan** crea ADR-012 (Testing Stack) + ADR-013 (Analytics Provider)
3. **Backend Artisan** inicia Módulo 4.1.1 (helper SEO en `lib/seo.ts`)
4. **DevOps Artisan** inicia Módulo 4.2.1 (`app/sitemap.ts`)
5. **Frontend Artisan** prepara imagen OG default + revisa componentes para A11y
6. **QA Artisan** prepara config Vitest/Playwright/MSW

---

## Notas para Artesanos

- **Comunicación**: Usar `@rol` en comentarios PR/issues para notificar
- **Commits**: Conventional Commits (`feat(seo):`, `perf(images):`, `a11y(focus):`, `test(unit):`)
- **Branch**: `feature/phase-4-<modulo>-<descripcion>` desde `develop`
- **PR Template**: Incluir checklist DoD del módulo correspondiente
- **Code Review**: Requerido 1 approval + CI verde + QA review para Módulos 4.1-4.4