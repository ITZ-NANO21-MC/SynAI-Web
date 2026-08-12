# SYNAI - Agencia Digital de Innovación Tecnológica

SYNAI es una plataforma web de alto rendimiento diseñada para una agencia de consultoría en Inteligencia Artificial y arquitectura de software basada en Falcón, Venezuela. Este proyecto destaca por su enfoque minimalista, eficiencia operativa y estética futurista.

## 🚀 Características Principales

- **Arquitectura Moderna**: Construido con Next.js 15 utilizando el App Router para un rendimiento óptimo.
- **Inteligencia Artificial**: Integración de flujos de IA generativa con **Google Genkit** para optimización de metadatos SEO.
- **Portafolio Interactivo**: Sistema de visualización de proyectos filtrable por categorías (Web, App, ML) con detalles técnicos profundos.
- **Experiencia de Usuario (UX)**: Soporte nativo para Modo Oscuro y Claro mediante `next-themes`.
- **Geolocalización**: Mapas interactivos integrados con **MapLibre GL** y **Geoapify**.
- **Comunicación Eficiente**: Formularios de contacto funcionales con **EmailJS** y acceso directo vía WhatsApp.
- **Diseño Responsivo**: Interfaz adaptativa construida con **Tailwind CSS** y componentes de **Shadcn UI**.

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/)
- **IA Generativa**: [Google Genkit](https://firebase.google.com/docs/genkit)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Mapas**: [MapLibre GL](https://maplibre.org/) + [Geoapify](https://www.geoapify.com/)
- **Envío de Emails**: [EmailJS](https://www.emailjs.com/)

## 📂 Estructura del Proyecto

- `src/app`: Definición de rutas, páginas y layouts principales.
- `src/components`: Componentes modulares divididos en UI, Layout y Shared.
- `src/ai`: Lógica de inteligencia artificial, prompts y flujos de Genkit.
- `src/lib`: Almacenamiento de datos estáticos, utilidades y configuración de imágenes.
- `public`: Recursos estáticos como el logotipo y capturas de pantalla de proyectos.

## 💻 Desarrollo

Para iniciar el entorno de desarrollo local:

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Configurar las variables de entorno en un archivo `.env` (API Keys de Google AI, Geoapify, etc.).

3. Ejecutar el servidor:
   ```bash
   npm run dev
   ```

## 📄 Versión y Cambios

El historial detallado de actualizaciones y mejoras visuales se encuentra disponible en el archivo `CHANGELOG.md`.

---
© 2025 SYNAI - Innovación Tecnológica desde Falcón para el mundo.