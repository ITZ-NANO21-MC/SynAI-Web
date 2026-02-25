/**
 * Datos estáticos para Synapse Studio
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
    id: 'web-dev',
    titulo: 'Desarrollo Web',
    descripcion: 'Sitios web de alto rendimiento, escalables y optimizados para SEO que impulsan resultados.',
    precio: 'Desde $1,200',
    categoria: 'Tecnología',
    icono: 'Code',
    imagen: 'service-web'
  },
  {
    id: 'branding',
    titulo: 'Branding & Identidad',
    descripcion: 'Creamos marcas memorables con una identidad visual coherente y poderosa.',
    precio: 'Desde $800',
    categoria: 'Diseño',
    icono: 'Palette',
    imagen: 'service-branding'
  },
  {
    id: 'marketing',
    titulo: 'Marketing Digital',
    descripcion: 'Estrategias basadas en datos para aumentar tu visibilidad y conversiones.',
    precio: 'Desde $500/mes',
    categoria: 'Estrategia',
    icono: 'TrendingUp',
    imagen: 'service-marketing'
  }
];

export const PORTAFOLIO: Proyecto[] = [
  {
    id: '1',
    titulo: 'EcoStore Global',
    cliente: 'EcoStore Inc.',
    categoria: 'Web',
    descripcion: 'Plataforma de comercio electrónico sostenible con integración de pagos avanzada.',
    imagen: 'project-1',
    destacado: true
  },
  {
    id: '2',
    titulo: 'FinTrack App',
    cliente: 'Finanz Group',
    categoria: 'App',
    descripcion: 'Aplicación móvil intuitiva para la gestión de finanzas personales y criptomonedas.',
    imagen: 'project-2',
    destacado: true
  },
  {
    id: '3',
    titulo: 'NeoBrand Campaign',
    cliente: 'Neo Fashion',
    categoria: 'Marketing',
    descripcion: 'Campaña integral de marketing digital que aumentó las ventas en un 40%.',
    imagen: 'project-3',
    destacado: false
  }
];

export const ESTADISTICAS = [
  { valor: 150, etiqueta: 'Proyectos Completados', sufijo: '+' },
  { valor: 50, etiqueta: 'Clientes Felices', sufijo: '+' },
  { valor: 12, etiqueta: 'Premios Ganados', sufijo: '' },
  { valor: 98, etiqueta: 'Tasa de Retención', sufijo: '%' }
];