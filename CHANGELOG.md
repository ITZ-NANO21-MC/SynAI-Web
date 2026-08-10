# Changelog - SYNAI Agencia Digital

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [1.1.1] - 2026-08-06
### Ajustado
- **UI de Modales**: Ajuste final de la altura de imagen a 300px en el modal de portafolio para optimizar el área de lectura.
- **Visibilidad CTA**: Corrección de contraste en el botón de WhatsApp de la sección final ("Transforma tu Operación") para legibilidad total en modo claro y oscuro.
- **Refactorización CSS**: Limpieza de variables no utilizadas en `globals.css`.

## [1.1.0] - 2026-08-04
### Agregado
- **Sistema de Temas**: Implementación de `next-themes` con soporte para Modo Oscuro, Claro y Sistema.
- **Componente ThemeToggle**: Selector de tema minimalista en el Header.
- **Mapas Interactivos**: Integración de Geoapify + MapLibre GL en la página de contacto.
- **Controles de Mapa**: Añadidos botones de Zoom (+/-) y rotación.
- **Genkit SEO**: Flujo de IA para generación automática de metadatos SEO.

### Ajustado
- **Coordenadas Geográficas**: Ubicación exacta en Coro, Falcón (11.404853, -69.692387).
- **Estándar de Imágenes**: Definición de resolución 980x600 para todos los activos visuales.

### Corregido
- **CSS Import Error**: Reubicación de `@import` en `globals.css` para cumplir estándares de Next.js.
- **Superposición de Modales**: Corrección de estructura Flexbox para evitar que las imágenes oculten el texto.

---
© 2025 SYNAI - Innovación Tecnológica.