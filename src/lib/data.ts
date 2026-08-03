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
    resumen: 'Una aplicación web robusta diseñada para optimizar la cadena de suministro de repuestos y accesorios de telefonía móvil. El sistema automatiza tareas críticas como la vigilancia de niveles de stock y la generación de informes periódicos.',
    caracteristicas: [
      'CRUD completo de productos y modelos',
      'Alertas automáticas por correo (Stock Bajo)',
      'Informes automáticos matutinos y vespertinos',
      'Respaldo diario de base de datos vía email',
      'Actualización masiva de precios por tasa de cambio',
      'Exportación a Excel y auditoría de seguridad'
    ],
    tecnologias: ['Python', 'Flask', 'SQLAlchemy', 'APScheduler', 'SQLite', 'Pytest'],
    arquitectura: 'MVC + Capa de Servicios (Navegador → Rutas → Controladores → Servicios → Modelos → DB)',
    imagen: 'inventario-flask',
    destacado: true
  }
];

export const ESTADISTICAS = [
  { valor: '06', etiqueta: 'Modelos IA Desplegados', sufijo: '+' },
  { valor: '12', etiqueta: 'SOFTWARES DESARROLLADOS', sufijo: '+' },
  { valor: '05', etiqueta: 'SOLUCIONES', sufijo: '+' }
];
