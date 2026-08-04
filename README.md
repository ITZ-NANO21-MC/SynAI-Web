# SYNAI - Agencia Digital

Este proyecto es una aplicación web moderna construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion para SYNAI.

## Características

- **Diseño de Vanguardia**: Interfaz profesional con colores profundos y acentos neón (#0F0F1B, #8E44AD, #00F2FF).
- **Servicios Duales**: Soporte técnico local en Falcón y Consultoría avanzada en IA.
- **Totalmente Responsive**: Optimizado para móviles, tablets y escritorio.

## Configuración de EmailJS

Para que el formulario de contacto funcione correctamente, asegúrate de usar esta configuración en tu dashboard de EmailJS:

### Plantilla HTML (Template ID: template_0hj810h)

```html
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 30px; border-radius: 8px;">
  <h2 style="font-size: 18px; font-weight: 700; color: #000; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Requerimiento SYNAI</h2>
  <p style="margin: 0 0 24px;">Se ha recibido una nueva solicitud de <strong>{{name}}</strong>. Por favor, gestione el contacto a la brevedad.</p>

  <div style="margin-top: 24px; padding: 20px 0; border-top: 1px solid #eaeaea;">
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="vertical-align: top; padding-right: 16px; width: 56px;">
          <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background-color: #00F2FF; border-radius: 4px; font-size: 24px; color: #000;" aria-hidden="true">🤖</div>
        </td>
        <td style="vertical-align: top;">
          <div style="font-size: 16px; font-weight: 700; color: #000; margin-bottom: 2px;">{{name}}</div>
          <div style="font-size: 13px; color: #0066cc; margin-bottom: 10px; font-weight: 500;">{{from_email}}</div>
          
          <div style="display: inline-block; background-color: #000; color: #00F2FF; padding: 4px 10px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">{{specialty}}</div>
          
          <div style="font-size: 12px; color: #8E8E93; margin-bottom: 15px;">Enviado el: {{time}}</div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00F2FF; font-size: 15px; color: #2c2c2c; line-height: 1.6; font-style: italic;">
            "{{message}}"
          </div>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 30px; font-size: 10px; color: #8E8E93; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
    SYNAI FALCÓN - Centro de Operaciones Digitales
  </div>
</div>
```

## Uso de Imágenes Personalizadas

Para reemplazar las imágenes del sitio por las tuyas, sube tus archivos a la carpeta `public` con estos nombres exactos:

1. **Logo e Icono**:
   - Logo principal (navbar/footer): `logo.png`
   - Icono de pestaña (favicon): `favicon.ico`

2. **Servicios y Proyectos**:
   - `servicio-tecnico.jpg`
   - `consultoria-ia.jpg`
   - `techanalitica-web.jpg`
   - `tb-detector.jpg`
   - `inventario-flask.jpg`
   - `techfix-web.jpg`
   - `nano-editor.jpg`
   - `chatbot-ml.jpg`
   - `sms-classifier.jpg`

---
© 2025 SYNAI. Desarrollado con tecnología de punta desde Falcón, Venezuela.
