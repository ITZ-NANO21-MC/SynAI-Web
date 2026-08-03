/**
 * Datos estáticos para SYNAI
 */

export interface Servicio {
  id: string;
  titulo: string;
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
  categoria: 'Web' | 'App';
  descripcion: string;
  resumen: string;
  caracteristicas: string[];
  tecnologias: string[];
  arquitectura: string;
  imagen: string;
  destacado: boolean;
}

export const SERVICIOS: Servicio[] = [
  {
    id: 'technical-support',
    titulo: 'Servicio Técnico en Computadores',
    descripcion: 'Llámanos si necesitas un equipo en óptimas condiciones para tu productividad diaria.',
    detalles: [
      'Mantenimiento',
      'Limpieza',
      'Formateo',
      'Instalación de programas',
      'Respaldos'
    ],
    precio: '(+58) 0424-6684134',
    categoria: 'Soporte',
    icono: 'Laptop',
    imagen: 'servicio-tecnico'
  },
  {
    id: 'ai-software-consulting',
    titulo: 'Consultoría IA & Desarrollo a Medida',
    descripcion: 'Llámanos si buscas llevar tu empresa al siguiente nivel con tecnología inteligente.',
    detalles: [
      'Diagnóstico de Automatización Gratuito',
      'Aplicaciones Web/Móviles con IA',
      'Chatbots Inteligentes (NLU)',
      'Optimización de Procesos con IA'
    ],
    precio: '(+58) 0424-6684134',
    categoria: 'Innovación',
    icono: 'BrainCircuit',
    imagen: 'consultoria-ia'
  }
];

export const PORTAFOLIO: Proyecto[] = [
  {
    id: 'inventario-flask-01',
    titulo: 'Sistema de Inventario Flask',
    cliente: 'Tienda de Telefonía Móvil',
    categoria: 'Web',
    descripcion: 'Gestión automatizada de repuestos con alertas de stock y respaldos diarios.',
    resumen: 'Aplicación web robusta diseñada para gestionar inventario de repuestos y accesorios de telefonía móvil. El sistema optimiza la cadena de suministro mediante la automatización de tareas críticas como la vigilancia de niveles de stock, generación de informes periódicos y respaldos de seguridad.',
    caracteristicas: [
      'CRUD completo de productos y modelos compatibles',
      'Alertas automáticas por correo ante stock bajo (8:00 AM)',
      'Informes automáticos matutinos y vespertinos',
      'Respaldo diario de base de datos vía email (ZIP)',
      'Actualización masiva de precios por tasa de cambio',
      'Exportación a Excel y auditoría de seguridad completa',
      'Autenticación robusta con Flask-Login',
      'Cabeceras de seguridad (Flask-Talisman)'
    ],
    tecnologias: ['Python', 'Flask', 'SQLAlchemy', 'APScheduler', 'SQLite', 'Flask-Migrate', 'Pytest'],
    arquitectura: 'MVC + Capa de Servicios: Navegador → Rutas → Controladores → Servicios (Email/Backup) → Modelos → SQLite',
    imagen: 'inventario-flask',
    destacado: true
  },
  {
    id: 'nano-editor-v4',
    titulo: 'NanoEditor v4.0',
    cliente: 'Software Open Source',
    categoria: 'App',
    descripcion: 'Editor de código modular con integración avanzada de IA y arquitectura estilo VS Code.',
    resumen: 'NanoEditor v4.0 es un editor de código moderno, ligero y extensible con interfaz estilo VS Code. Cuenta con integración avanzada de IA para chat en tiempo real, contexto de proyecto y múltiples modelos. Su arquitectura modular robusta está diseñada para ser rápida, segura y fácil de mantener, comunicándose mediante un Event Bus para reducir el acoplamiento.',
    caracteristicas: [
      'Interfaz estilo VS Code con multi-tab y temas dinámicos',
      'IA con streaming en tiempo real y contexto de proyecto automático',
      'Soporte multi-modelo (Gemini, OpenAI, Anthropic, DeepSeek)',
      'Terminal interactivo con soporte completo para scripts',
      'Syntax Highlighting asíncrono y autocompletado inteligente',
      '60+ pruebas unitarias y arquitectura desacoplada'
    ],
    tecnologias: ['Python', 'LiteLLM', 'Gemini AI', 'Pytest', 'Tkinter', 'CustomTkinter'],
    arquitectura: 'Modular (Desacoplada): Main → UI (Sidebar/Menu/Status) → Core (Editor/Tabs) → AI (Assistant/Agent/Client) → Navigation → Terminal',
    imagen: 'nano-editor',
    destacado: true
  }
];

export const ESTADISTICAS = [
  { valor: '06', etiqueta: 'Modelos IA Desplegados', sufijo: '+' },
  { valor: '12', etiqueta: 'SOFTWARES DESARROLLADOS', sufijo: '+' },
  { valor: '05', etiqueta: 'SOLUCIONES', sufijo: '+' }
];
