# Synapse Studio - Agencia Digital

Este proyecto es una aplicación web moderna construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion para Synapse Studio.

## Características

- **Diseño Vanguardista**: Interfaz profesional con los colores de marca (#178282 y #0DF280).
- **IA SEO Assistant**: Herramienta integrada para generar metadatos optimizados.
- **Portafolio Dinámico**: Grid filtrable por categorías.
- **Formularios de Contacto**: Integración preparada para EmailJS.
- **Totalmente Responsive**: Optimizado para móviles, tablets y escritorio.

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno (Crear archivo `.env.local`):
   ```env
   # EmailJS
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

   # Geoapify
   NEXT_PUBLIC_GEOAPIFY_API_KEY=your_api_key

   # GenAI (Gemini)
   GOOGLE_GENAI_API_KEY=your_gemini_key
   ```
4. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

- `src/app`: Rutas y layouts principales.
- `src/components`: Componentes reutilizables divididos por layouts, secciones y UI.
- `src/lib`: Datos estáticos y utilidades.
- `src/ai`: Lógica de inteligencia artificial para el asistente SEO.

## Despliegue

El proyecto está optimizado para ser desplegado en Vercel o Firebase App Hosting.

---
© 2025 Synapse Studio. Desarrollado con ❤️ y tecnología de punta.