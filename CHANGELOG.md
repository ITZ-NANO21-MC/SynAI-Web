# Changelog - SYNAI Agencia Digital

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [1.1.0] - 2025-05-20
### Agregado
- **Sistema de Temas**: Implementación de `next-themes` con soporte para Modo Oscuro, Claro y Sistema.
- **Componente ThemeToggle**: Selector de tema minimalista en el Header.
- **Mapas Interactivos**: Integración de Geoapify + MapLibre GL en la página de contacto.
- **Controles de Mapa**: Añadidos botones de Zoom (+/-) y rotación.
- **Genkit SEO**: Flujo de IA para generación automática de metadatos SEO.

### Ajustado
- **Coordenadas Geográficas**: Ubicación exacta en Coro, Falcón (11.404853, -69.692387).
- **UI de Modales**: Reducción de la altura de imagen en modales de portafolio a 300px para mejorar la legibilidad del contenido.
- **Visibilidad en Modo Oscuro**: Corrección de colores en botones de WhatsApp y tarjetas para asegurar contraste óptimo.
- **Estándar de Imágenes**: Definición de resolución 980x600 para todos los activos visuales.

### Corregido
- **CSS Import Error**: Reubicación de `@import` en `globals.css` para evitar errores de compilación en Next.js.
- **Superposición de Modales**: Ajuste de estructura Flexbox para evitar que las imágenes oculten el texto descriptivo.

---
© 2025 SYNAI - Innovación Tecnológica.