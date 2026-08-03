/**
 * Datos estáticos para SYNAI
 */

import { Clock, Database, Zap, BrainCircuit, LucideIcon } from 'lucide-react';

export interface TareaAutomatizada {
  titulo: string;
  descripcion: string;
  icono: 'Clock' | 'Database' | 'Zap' | 'BrainCircuit';
}

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
  categoria: 'Web' | 'App' | 'ML';
  descripcion: string;
  resumen: string;
  caracteristicas: string[];
  tecnologias: string[];
  arquitecturaTitulo: string;
  arquitectura: string;
  tareas: TareaAutomatizada[];
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
    resumen: 'Aplicación web robusta diseñada para gestionar inventario de repuestos y accesorios de telefonía móvil. El sistema optimiza la cadena de suministro mediante la automatización de tareas críticas.',
    caracteristicas: [
      'CRUD completo de productos y modelos',
      'Alertas automáticas por correo',
      'Actualización masiva de precios por tasa',
      'Exportación a Excel y auditoría',
      'Autenticación robusta con Flask-Login',
      'Cabeceras de seguridad (Flask-Talisman)'
    ],
    tecnologias: ['Python', 'Flask', 'SQLAlchemy', 'APScheduler', 'SQLite'],
    arquitecturaTitulo: 'MVC + Capa de Servicios',
    arquitectura: 'Navegador → Rutas → Controladores → Servicios (Email/Backup) → Modelos → SQLite',
    tareas: [
      {
        titulo: 'Alertas de Stock',
        descripcion: 'Envío automático cada mañana a las 8:00 AM.',
        icono: 'Clock'
      },
      {
        titulo: 'Backup diario',
        descripcion: 'Respaldo ZIP automático de la base de datos a las 9:00 PM.',
        icono: 'Database'
      }
    ],
    imagen: 'inventario-flask',
    destacado: true
  },
  {
    id: 'nano-editor-v4',
    titulo: 'NanoEditor v4.0',
    cliente: 'Software Open Source',
    categoria: 'App',
    descripcion: 'Editor de código modular con integración avanzada de IA y arquitectura estilo VS Code.',
    resumen: 'NanoEditor v4.0 es un editor de código moderno, ligero y extensible. Su arquitectura modular robusta está diseñada para ser rápida y segura, comunicándose mediante un Event Bus.',
    caracteristicas: [
      'Interfaz estilo VS Code multi-tab',
      'IA con streaming en tiempo real',
      'Contexto de proyecto automático',
      'Soporte multi-modelo (Gemini, OpenAI)',
      'Terminal interactivo integrado',
      '60+ pruebas unitarias'
    ],
    tecnologias: ['Python', 'LiteLLM', 'Gemini AI', 'Pytest', 'Tkinter'],
    arquitecturaTitulo: 'Arquitectura Modular (Desacoplada)',
    arquitectura: 'Main → UI (Sidebar/Menu) → Core (Editor/Tabs) → AI (Assistant/Agent/Client) → Navigation → Terminal',
    tareas: [
      {
        titulo: 'Streaming de IA',
        descripcion: 'Procesamiento de respuestas palabra por palabra en tiempo real.',
        icono: 'Zap'
      },
      {
        titulo: 'Contexto Dinámico',
        descripcion: 'Análisis automático de archivos para alimentar la IA.',
        icono: 'BrainCircuit'
      }
    ],
    imagen: 'nano-editor',
    destacado: true
  },
  {
    id: 'chatbot-ml-01',
    titulo: 'Chatbot WhatsApp ML',
    cliente: 'Automatización Inteligente',
    categoria: 'App',
    descripcion: 'Chatbot inteligente para WhatsApp con motor de Machine Learning para procesamiento de lenguaje natural.',
    resumen: 'Sistema de IA híbrido que utiliza TF-IDF y similitud de coseno para clasificar intenciones, con una red de seguridad de fuzzy matching para manejar errores tipográficos.',
    caracteristicas: [
      'Motor de IA con scikit-learn (TF-IDF)',
      'Fuzzy matching para errores tipográficos',
      'Base de conocimiento externa (JSON)',
      'Integración estable con Green-API',
      'Logging completo para monitorización',
      '85% de cobertura de pruebas unitarias'
    ],
    tecnologias: ['Python', 'Scikit-learn', 'RapidFuzz', 'Green-API', 'Pytest'],
    arquitecturaTitulo: 'IA Híbrida + Pipeline de PLN',
    arquitectura: 'Usuario WhatsApp → Green-API → Handler → Motor IA (TF-IDF/Cosine) → Fuzzy Recovery → Respuesta',
    tareas: [
      {
        titulo: 'Clasificación de IA',
        descripcion: 'Análisis de intenciones con umbrales de confianza configurables.',
        icono: 'BrainCircuit'
      },
      {
        titulo: 'Respuesta Humanizada',
        descripcion: 'Selección aleatoria de variaciones para evitar respuestas robóticas.',
        icono: 'Zap'
      }
    ],
    imagen: 'chatbot-ml',
    destacado: true
  },
  {
    id: 'sms-spam-lstm',
    titulo: 'Clasificador SMS Spam (LSTM)',
    cliente: 'Desafío freeCodeCamp',
    categoria: 'ML',
    descripcion: 'Modelo de aprendizaje profundo con redes LSTM bidireccionales para detección de spam con 98% de precisión.',
    resumen: 'Modelo de aprendizaje profundo desarrollado para clasificar mensajes SMS como spam o ham. Utiliza arquitecturas recurrentes avanzadas para comprender el contexto semántico de los mensajes.',
    caracteristicas: [
      'Capas LSTM Bidireccionales para contexto dual',
      'Capa de Embedding para representación densa',
      'Regularización con capas Dropout',
      'Optimización con Adam y Early Stopping',
      'Precisión del 98% en validación',
      'Preprocesamiento automático de texto'
    ],
    tecnologias: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Numpy', 'Scikit-learn'],
    arquitecturaTitulo: 'Red Neuronal Recurrente (RNN)',
    arquitectura: 'Entrada → Embedding → LSTM Bidireccional → Dropout → LSTM Bidireccional → Dropout → Capa Densa → Salida (Sigmoid)',
    tareas: [
      {
        titulo: 'Preprocesamiento',
        descripcion: 'Tokenización y padding automático de secuencias de texto.',
        icono: 'Database'
      },
      {
        titulo: 'Predicción IA',
        descripcion: 'Clasificación en tiempo real con cálculo de probabilidad de spam.',
        icono: 'BrainCircuit'
      }
    ],
    imagen: 'sms-classifier',
    destacado: true
  }
];

export const ESTADISTICAS = [
  { valor: '06', etiqueta: 'Modelos IA Desplegados', sufijo: '+' },
  { valor: '12', etiqueta: 'SOFTWARES DESARROLLADOS', sufijo: '+' },
  { valor: '05', etiqueta: 'SOLUCIONES', sufijo: '+' }
];
