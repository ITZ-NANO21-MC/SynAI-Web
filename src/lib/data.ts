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
    id: '1',
    titulo: 'NeuralPredict Corp',
    cliente: 'Logistics Global',
    categoria: 'App',
    descripcion: 'Sistema de predicción de demanda basado en Machine Learning para optimización de inventarios.',
    imagen: 'project-1',
    destacado: true
  },
  {
    id: '4',
    titulo: 'Inventario Móvil Flask',
    cliente: 'Tienda de Telefonía',
    categoria: 'Web',
    descripcion: 'Sistema automatizado de gestión de repuestos con alertas de stock, respaldos diarios y auditoría de seguridad.',
    imagen: 'inventario-flask',
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
    titulo: 'Cognitive Web',
    cliente: 'Fashion Retail',
    categoria: 'Web',
    descripcion: 'Interfaz de usuario inteligente optimizada para la conversión mediante análisis de datos.',
    imagen: 'project-3',
    destacado: false
  }
];

export const ESTADISTICAS = [
  { valor: '06', etiqueta: 'Modelos IA Desplegados', sufijo: '+' },
  { valor: '12', etiqueta: 'SOFTWARES DESARROLLADOS', sufijo: '+' },
  { valor: '05', etiqueta: 'SOLUCIONES', sufijo: '+' }
];
