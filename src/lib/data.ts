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
  categoria: 'Web' | 'App' | 'Marketing' | 'Branding';
  descripcion: string;
  imagen: string;
  destacado: boolean;
}

export const SERVICIOS: Servicio[] = [
  {
    id: 'technical-support',
    titulo: 'Servicio Técnico en Computadores',
    descripcion: 'Llámanos si necesitas un equipo en óptimas condiciones para tu productividad diaria.',
    detalles: [
      'Mantenimiento preventivo y correctivo',
      'Limpieza física profunda',
      'Formateo y optimización de sistema',
      'Instalación de programas esenciales',
      'Respaldos de información segura'
    ],
    precio: 'Desde Falcón',
    categoria: 'Soporte',
    icono: 'Laptop',
    imagen: 'service-web'
  },
  {
    id: 'ai-software-consulting',
    titulo: 'IA & Desarrollo a Medida',
    descripcion: 'Llámanos si buscas llevar tu empresa al siguiente nivel con tecnología inteligente.',
    detalles: [
      'Diagnóstico de Automatización Gratuito',
      'Aplicaciones Web/Móviles con IA',
      'Chatbots Inteligentes (NLU)',
      'Optimización de Procesos con IA'
    ],
    precio: 'Consultoría Pro',
    categoria: 'Innovación',
    icono: 'BrainCircuit',
    imagen: 'service-branding'
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
