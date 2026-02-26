/**
 * Datos estáticos para SYNAI
 */

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
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
    descripcion: 'Diseñamos e implementamos estrategias de IA generativa y modelos predictivos para optimizar tu negocio.',
    precio: 'Desde $1,500',
    categoria: 'Inteligencia Artificial',
    icono: 'BrainCircuit',
    imagen: 'service-web'
  },
  {
    id: 'custom-software',
    titulo: 'Software a Medida',
    descripcion: 'Desarrollo de aplicaciones robustas y escalables utilizando el stack tecnológico más moderno.',
    precio: 'Desde $2,500',
    categoria: 'Desarrollo',
    icono: 'Code',
    imagen: 'service-branding'
  },
  {
    id: 'automation',
    titulo: 'Automatización Inteligente',
    descripcion: 'Eliminamos tareas repetitivas integrando herramientas de IA en tus flujos de trabajo actuales.',
    precio: 'Desde $1,000/mes',
    categoria: 'Eficiencia',
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
  { valor: 5, etiqueta: 'Países con Operación', sufijo: '' },
  { valor: 99.9, etiqueta: 'Uptime Soluciones', sufijo: '%' }
];