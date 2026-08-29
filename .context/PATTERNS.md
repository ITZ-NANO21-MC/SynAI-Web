# SYNAI - Patrones de Implementación

## Guía de Estilo y Arquitectura

Este documento define los patrones obligatorios para mantener consistencia, calidad y escalabilidad en el codebase.

---

## 1. Backend / Server Layer (Next.js App Router)

### 1.1 Server Components por Defecto
```tsx
// ✅ CORRECTO - Server Component (default)
// app/servicios/page.tsx
import { SERVICIOS } from '@/lib/data';
import { ServiciosGrid } from '@/components/servicios/ServiciosGrid';

export default function ServiciosPage() {
  return <ServiciosGrid servicios={SERVICIOS} />;
}

// ❌ EVITAR - Client Component innecesario
'use client';
export default function ServiciosPage() { ... }
```

### 1.2 Server Actions para Mutaciones
```tsx
// ✅ CORRECTO - Server Action tipada
// ai/flows/generate-seo-metadata.ts
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InputSchema = z.object({ content: z.string(), ... });
const OutputSchema = z.object({ metaTitle: z.string(), ... });

export async function generateSeoMetadata(input: z.infer<typeof InputSchema>) {
  const { output } = await generateSeoMetadataFlow(input);
  return output!;
}
```

### 1.3 Route Handlers (API Routes) - Solo cuando necesario
```tsx
// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const payload = await request.json();
  // Validar con Zod
  // Procesar
  return NextResponse.json({ success: true });
}
```

### 1.4 Metadata Dinámica
```tsx
// ✅ PATRÓN REQUERIDO para Fase 4
// app/servicios/page.tsx
import { generateSeoMetadata } from '@/ai/flows/generate-seo-metadata';
import { SERVICIOS } from '@/lib/data';

export async function generateMetadata() {
  const content = SERVICIOS.map(s => s.titulo + ' ' + s.descripcion).join(' ');
  const seo = await generateSeoMetadata({
    content,
    keywords: ['consultoría IA', 'desarrollo software', 'Falcón'],
    pageType: 'service page'
  });
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: { title: seo.metaTitle, description: seo.metaDescription }
  };
}
```

---

## 2. Frontend / Client Layer

### 2.1 Client Components - Mínimos y Enfocados
```tsx
// ✅ CORRECTO - Solo interactividad client-side
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  // ... lógica tema
}
```

### 2.2 Composición sobre Herencia
```tsx
// ✅ CORRECTO - Componentes compuestos
// components/ui/card.tsx
export const Card = ({ className, ...props }: CardProps) => (
  <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
);
export const CardHeader = ({ className, ...props }) => <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
export const CardTitle = ({ className, ...props }) => <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />;
export const CardContent = ({ className, ...props }) => <div className={cn('p-6 pt-0', className)} {...props} />;
```

### 2.3 Custom Hooks para Lógica Reutilizable
```tsx
// hooks/use-toast.ts - Patrón Reducer + Context
export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);
  // ... dispatcher pattern
  return { ...state, toast, dismiss };
}
```

### 2.4 Formularios - React Hook Form + Zod
```tsx
// ✅ PATRÓN ESTÁNDAR
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje muy corto'),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' }
  });
  
  const onSubmit = async (data) => {
    // Server Action o API call
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* ... campos con form.register */}
    </form>
  );
}
```

---

## 3. Estilos y Theming

### 3.1 Variables CSS Semánticas (Obligatorio)
```css
/* globals.css - NUNCA usar colores hardcoded */
:root {
  --primary: 0 0% 0%;           /* Negro absoluto */
  --primary-foreground: 0 0% 100%;
  --accent: 183 100% 50%;       /* Cian tecnológico */
  --accent-foreground: 0 0% 0%;
  /* ... resto de tokens */
}

.dark {
  --background: 240 33% 8%;     /* Negro profundo */
  --foreground: 0 0% 100%;
  /* ... tokens dark mode */
}
```

```tsx
// ✅ CORRECTO - Usar tokens semánticos
<div className="bg-primary text-primary-foreground border-border hover:bg-accent" />

// ❌ PROHIBIDO - Colores hardcoded
<div className="bg-black text-white border-gray-300 hover:bg-cyan-400" />
```

### 3.2 Utility Helper `cn()`
```tsx
// lib/utils.ts - SIEMPRE usar para className condicionales
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Uso:
<Button className={cn('base-styles', isActive && 'active-styles', variant === 'outline' && 'outline-styles')} />
```

### 3.3 Fuentes - Configuración en tailwind.config.ts
```ts
// tailwind.config.ts
fontFamily: {
  body: ['Inter', 'sans-serif'],
  headline: ['Space Grotesk', 'sans-serif'],
  code: ['monospace'],
}
```
```tsx
// Uso en componentes
<h1 className="font-headline text-4xl font-bold" />
<p className="font-body text-secondary" />
<code className="font-code" />
```

---

## 4. Tipado TypeScript

### 4.1 Interfaces para Datos de Negocio
```tsx
// lib/data.ts - Interfaces explícitas, no types inline
export interface Servicio {
  id: string;
  titulo: string;
  telefono: string;
  descripcion: string;
  detalles: string[];
  precio: string;
  categoria: string;
  icono: string;
  imagen: string;
}

export interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  categoria: 'Web' | 'App' | 'ML';  // Union type para categorías fijas
  descripcion: string;
  resumen: string;
  caracteristicas: string[];
  tecnologias: string[];
  arquitecturaTitulo: string;
  arquitectura: string;
  tareas: TareaAutomatizada[];
  imagen: string;
  destacado: boolean;
}
```

### 4.2 Schemas Zod para Validación Runtime
```tsx
// ai/flows/generate-seo-metadata.ts
const GenerateSeoMetadataInputSchema = z.object({
  content: z.string().min(10).max(50000),
  keywords: z.array(z.string()).min(1).max(20),
  pageType: z.enum(['homepage', 'service page', 'portfolio item', 'contact page']),
});
```

### 4.3 Evitar `any` - Usar `unknown` + Type Guards
```tsx
// ❌ MAL
function process(data: any) { ... }

// ✅ BIEN
function process(data: unknown): asserts data is ExpectedType {
  if (!isExpectedType(data)) throw new Error('Invalid data');
  // TypeScript ahora sabe que data es ExpectedType
}
```

---

## 5. Componentes UI (Shadcn Patterns)

### 5.1 Estructura Estándar de Componente
```tsx
// components/ui/button.tsx
'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

### 5.2 Props Tipadas con VariantProps
```tsx
// Siempre extender HTML props + VariantProps
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {}
```

---

## 6. Datos e Imágenes

### 6.1 Imágenes - Next.js Image Component Obligatorio
```tsx
// ✅ CORRECTO
import Image from 'next/image';

<Image
  src={imgData?.imageUrl || ''}
  alt={servicio.titulo}
  width={560}
  height={560}
  className="w-full h-full object-cover"
  data-ai-hint={imgData?.imageHint}  // Para placeholder blur
  priority={isAboveFold}  // Solo above-the-fold
/>

// ❌ PROHIBIDO - <img> nativo
<img src="..." alt="..." />
```

### 6.2 Placeholders - Estructura JSON
```json
// lib/placeholder-images.json
{
  "placeholderImages": [
    {
      "id": "unique-id",
      "description": "Descripción legible",
      "imageUrl": "/local-path.jpg?v=1.2",
      "imageHint": "keywords for blur placeholder"
    }
  ]
}
```

---

## 7. IA / Genkit Patterns

### 7.1 Flow Structure Estándar
```tsx
// ai/flows/nombre-flow.ts
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// 1. Schemas Zod (Input/Output)
const InputSchema = z.object({ ... });
const OutputSchema = z.object({ ... });
export type Input = z.infer<typeof InputSchema>;
export type Output = z.infer<typeof OutputSchema>;

// 2. Wrapper function (exportada)
export async function nombreFlow(input: Input): Promise<Output> {
  return nombreFlowImpl(input);
}

// 3. Prompt definition
const prompt = ai.definePrompt({
  name: 'nombrePrompt',
  input: { schema: InputSchema },
  output: { schema: OutputSchema },
  prompt: `Instrucciones detalladas...
  
  Input: {{{inputField}}}
  `,
});

// 4. Flow definition
const nombreFlowImpl = ai.defineFlow(
  { name: 'nombreFlow', inputSchema: InputSchema, outputSchema: OutputSchema },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('No output generated');
    return output;
  }
);
```

### 7.2 Prompt Engineering Guidelines
- Instrucciones claras y específicas
- Reglas de formato (longitud, tono, estructura)
- Few-shot examples si es complejo
- Variables interpoladas con `{{{variable}}}`
- Output schema estricto con Zod

---

## 8. Testing Patterns (Para Fase 4)

### 8.1 Unit Tests - Componentes Puros
```tsx
// components/ui/button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });
  
  it('applies variant classes', () => {
    render(<Button variant="outline">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('border');
  });
});
```

### 8.2 Integration Tests - Server Actions
```tsx
// ai/flows/generate-seo-metadata.test.ts
import { generateSeoMetadata } from './generate-seo-metadata';

describe('generateSeoMetadata', () => {
  it('generates valid SEO metadata', async () => {
    const result = await generateSeoMetadata({
      content: 'Test content',
      keywords: ['test'],
      pageType: 'homepage'
    });
    expect(result.metaTitle).toBeDefined();
    expect(result.metaTitle.length).toBeLessThan(60);
    expect(result.metaDescription.length).toBeLessThan(160);
  });
});
```

### 8.3 E2E Tests - Playwright
```tsx
// e2e/contact.spec.ts
import { test, expect } from '@playwright/test';

test('contact form submits successfully', async ({ page }) => {
  await page.goto('/contacto');
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="from_email"]', 'test@example.com');
  await page.selectOption('[name="specialty"]', 'IA');
  await page.fill('[name="message"]', 'Test message content');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=SOLICITUD ENVIADA')).toBeVisible();
});
```

---

## 9. Accesibilidad (WCAG 2.1 AA)

### 9.1 Requisitos Mínimos
- **Contraste**: Mínimo 4.5:1 (text), 3:1 (large text/UI)
- **Focus Visible**: `focus-visible:ring-2 focus-visible:ring-ring`
- **ARIA**: Labels en inputs, roles en componentes compuestos
- **Semántica**: Heading hierarchy (h1→h2→h3), landmarks
- **Teclado**: Todos los interactivos accesibles por Tab

### 9.2 Patrones Accesibles
```tsx
// ✅ Input con label asociado
<label htmlFor="email" className="sr-only">Email</label>
<Input id="email" name="email" type="email" aria-describedby="email-error" />
{error && <p id="email-error" role="alert" className="text-destructive">{error}</p>}

// ✅ Botón con loading state
<Button disabled={isSubmitting} aria-busy={isSubmitting}>
  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
</Button>
```

---

## 10. Git y Convenciones

### 10.1 Commits - Conventional Commits
```bash
# Formato: <type>(<scope>): <description>
feat(servicios): add 31-day trial to web design service
fix(portafolio): modal image sizing on mobile
docs(readme): update tech stack versions
refactor(ai): extract SEO prompt to separate file
chore(deps): update next.js to 15.5.9
```

### 10.2 Branch Strategy
```
main                    # Producción
├── develop             # Integración continua
├── feature/*           # Nuevas features
├── fix/*               # Bug fixes
├── chore/*             # Maintenance
└── release/*           # Preparación releases
```

### 10.3 Versionado - SemVer en CHANGELOG.md
```markdown
## [1.1.9] - 2026-08-14
### Ajustado
- Layout de Contacto: Reubicación mapa...
- Identidad de Marca: Traslado bloque...
```

---

## 11. Performance Checklist

### 11.1 Por Página
- [ ] `generateMetadata` dinámica implementada
- [ ] Open Graph + Twitter cards
- [ ] Imágenes con `priority` solo above-fold
- [ ] `data-ai-hint` en placeholders
- [ ] Fonts con `display: swap` (Google Fonts)
- [ ] Scripts third-party con `strategy="lazyOnload"`

### 11.2 Bundle
- [ ] Dynamic imports para componentes pesados (Modal, Map, Charts)
- [ ] Tree-shaking verificado (no imports barrel innecesarios)
- [ ] `next/bundle-analyzer` en CI ocasional

---

## 12. Seguridad

### 12.1 Variables de Entorno
```bash
# .env.local (NUNCA commitear)
GOOGLE_GENAI_API_KEY=...
EMAILJS_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
GEOAPIFY_API_KEY=...
```

### 12.2 Validación Server-Side
```tsx
// SIEMPRE validar en Server Action / Route Handler
export async function submitContact(formData: FormData) {
  const parsed = ContactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: 'Datos inválidos', issues: parsed.error.flatten() };
  }
  // Procesar...
}
```

### 12.3 Headers Seguridad (next.config.ts)
```ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

---

## 13. Checklist de Code Review

### Antes de Merge
- [ ] `npm run typecheck` pasa sin errores
- [ ] `npm run lint` pasa sin warnings
- [ ] `npm run build` exitoso
- [ ] Componentes nuevos tienen tipos explícitos
- [ ] No `any` types (salvo `unknown` con guards)
- [ ] Colores via tokens CSS (`bg-primary`, no `bg-black`)
- [ ] Imágenes usan `next/image` con `width`/`height`
- [ ] Server Actions tienen `'use server'` y validación Zod
- [ ] Client components mínimos (`'use client'` justificado)
- [ ] Accesibilidad básica (labels, focus, contrast)
- [ ] Commits siguen Conventional Commits
- [ ] CHANGELOG.md actualizado si feature/fix user-facing

---

## 14. Referencias Rápidas

| Archivo | Propósito |
|---------|-----------|
| `src/lib/utils.ts` | Helper `cn()` para classNames |
| `src/lib/data.ts` | Tipos y datos estáticos (Servicio, Proyecto, etc.) |
| `src/ai/genkit.ts` | Configuración Genkit + Gemini |
| `src/ai/flows/*.ts` | Server Actions IA tipadas |
| `src/hooks/use-toast.ts` | Sistema notificaciones |
| `src/components/ui/*.tsx` | 30+ componentes base Shadcn |
| `tailwind.config.ts` | Design tokens (colores, fuentes, radius) |
| `globals.css` | Variables CSS HSL + utilities custom |
| `tsconfig.json` | Paths `@/*`, strict mode |
| `apphosting.yaml` | Config Firebase App Hosting |