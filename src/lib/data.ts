/**
 * Datos estáticos para SynAI
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
  categoria: 'Web' | 'App' | 'Marketing' | 'Branding';
  descripcion: string;
  imagen: string;
  destacado: boolean;
}

export const SERVICIOS: Servicio[] = [
  {
    id: 'ai-consulting',
    titulo: 'Consultoría en IA',
    descripcion: 'Especialistas en diagnosticar y diseñar estrategias de implementación de IA para optimizar procesos empresariales.',
    detalles: [
      'Diagnóstico de oportunidades de automatización',
      'Diseño de estrategias de implementación de IA',
      'Capacitación en herramientas de IA para equipos'
    ],
    precio: 'Consultar',
    categoria: 'Consultoría',
    icono: 'BrainCircuit',
    imagen: 'service-web'
  },
  {
    id: 'custom-software',
    titulo: 'Desarrollo de Software Personalizado',
    descripcion: 'Construimos software robusto con IA integrada, diseñado para escalar y conectar tus sistemas.',
    detalles: [
      'Aplicaciones web/móviles con integración de IA',
      'Soluciones SaaS escalables',
      'APIs personalizadas para conectividad'
    ],
    precio: 'Consultar',
    categoria: 'Desarrollo',
    icono: 'Code',
    imagen: 'service-branding'
  },
  {
    id: 'specialized-products',
    titulo: 'Productos Especializados por Nicho',
    descripcion: 'Soluciones tecnológicas verticales diseñadas para sectores críticos como agricultura, turismo y salud.',
    detalles: [
      'Agrotech: Monitoreo inteligente de cultivos',
      'Turismo: Chatbots multidioma y recomendación',
      'Salud Digital: Análisis de imágenes médicas'
    ],
    precio: 'Consultar',
    categoria: 'Nichos',
    icono: 'Zap',
    imagen: 'service-marketing'
  }
];

export const PORTAFOLIO: Proyecto[] = [
  {
    id: '1',
    titulo: 'NeuralPredict Corp',
    cliente: 'Logistics Global',
    categoria: 'App',
    descripcion: 'Sistema de predicción de demanda basado en Machine Learning para optimización de inventarios.',
    imagen: 'project-1',
    destacado: true
  },
  {
    id: '2',
    titulo: 'SmartDev Portal',
    cliente: 'Tech Solutions',
    categoria: 'Web',
    descripcion: 'Plataforma corporativa escalable con integración de agentes de IA para soporte automatizado.',
    imagen: 'project-2',
    destacado: true
  },
  {
    id: '3',
    titulo: 'Cognitive Branding',
    cliente: 'Fashion Retail',
    categoria: 'Branding',
    descripcion: 'Identidad visual generada y validada por algoritmos de análisis de sentimiento del consumidor.',
    imagen: 'project-3',
    destacado: false
  }
];

export const ESTADISTICAS = [
  { valor: 100, etiqueta: 'Modelos IA Desplegados', sufijo: '+' },
  { valor: 40, etiqueta: 'Empresas Transformadas', sufijo: '+' },
  { valor: 5, etiqueta: 'Sectores Impactados', sufijo: '' },
  { valor: 99.9, etiqueta: 'Uptime Soluciones', sufijo: '%' }
];
