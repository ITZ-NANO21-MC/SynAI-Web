"use client"

import * as React from 'react';
import Image from 'next/image';
import { PORTAFOLIO, type Proyecto } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, CheckCircle2, Database, Code2, Layers, Clock, Zap, BrainCircuit } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const IconMap = {
  Clock,
  Database,
  Zap,
  BrainCircuit,
};

export default function PortafolioPage() {
  const [filtro, setFiltro] = React.useState<string>('Todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = React.useState<Proyecto | null>(null);
  
  const categorias = ['Todos', 'Web', 'App'];
  
  const proyectosFiltrados = filtro === 'Todos' 
    ? PORTAFOLIO 
    : PORTAFOLIO.filter(p => p.categoria === filtro);

  const getImagenUrl = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (img?.imageUrl.startsWith('/')) {
      return `${img.imageUrl}${img.imageUrl.includes('?') ? '&' : '?'}v=1.1`;
    }
    return img?.imageUrl || '';
  };

  const getCategoriaLabel = (cat: string) => {
    if (cat === 'ML') return 'IA / ML';
    return cat;
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <section className="container mx-auto px-4 md:px-6 py-20 text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none text-black uppercase">
          NUESTROS <br /> <span className="text-accent italic">PROYECTOS</span>
        </h1>
        <p className="text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
          Ingeniería de software aplicada a problemas reales. Soluciones robustas, escalables y eficientes.
        </p>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categorias.map(cat => (
            <Button
              key={cat}
              variant={filtro === cat ? "default" : "outline"}
              onClick={() => setFiltro(cat)}
              className={`rounded-none px-8 font-bold tracking-widest text-xs uppercase h-12 transition-all ${
                filtro === cat 
                ? "bg-black text-white hover:bg-black/90" 
                : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {getCategoriaLabel(cat)}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {proyectosFiltrados.map((proyecto) => (
            <Card 
              key={proyecto.id} 
              className="group cursor-pointer border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-white overflow-hidden"
              onClick={() => setProyectoSeleccionado(proyecto)}
            >
              <CardContent className="p-0 relative h-80 w-full overflow-hidden">
                <Image 
                  src={getImagenUrl(proyecto.imagen)} 
                  alt={proyecto.titulo} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                  <h3 className="text-2xl font-headline font-black text-white mb-4 uppercase tracking-tighter">{proyecto.titulo}</h3>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black font-black rounded-none uppercase text-xs tracking-widest">
                    Ver Detalles <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 bg-black text-accent px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]">
                  {getCategoriaLabel(proyecto.categoria)}
                </div>
              </CardContent>
              <div className="p-8 border-t border-gray-100 group-hover:bg-gray-50 transition-colors">
                <h4 className="font-headline text-xl font-black text-black uppercase tracking-tighter mb-1">{proyecto.titulo}</h4>
                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">{proyecto.cliente}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal de Detalles del Proyecto */}
      <Dialog open={!!proyectoSeleccionado} onOpenChange={(open) => !open && setProyectoSeleccionado(null)}>
        <DialogContent className="max-w-4xl p-0 border-none rounded-none overflow-hidden bg-white h-[90vh] flex flex-col">
          {proyectoSeleccionado && (
            <>
              {/* Cabecera Fija del Modal */}
              <div className="relative h-48 md:h-64 w-full shrink-0">
                <Image 
                  src={getImagenUrl(proyectoSeleccionado.imagen)} 
                  alt={proyectoSeleccionado.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                  <Badge className="bg-accent text-black font-black text-[10px] uppercase tracking-widest mb-3 rounded-none">
                    {getCategoriaLabel(proyectoSeleccionado.categoria)}
                  </Badge>
                  <DialogTitle className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                    {proyectoSeleccionado.titulo}
                  </DialogTitle>
                </div>
              </div>

              {/* Área con Scroll */}
              <ScrollArea className="flex-1 w-full bg-white">
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                      <section className="space-y-4">
                        <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Propósito del Proyecto</h4>
                        <p className="text-lg font-medium text-black leading-relaxed">
                          {proyectoSeleccionado.resumen}
                        </p>
                      </section>

                      <section className="space-y-6">
                        <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Características Clave</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {proyectoSeleccionado.caracteristicas.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 group">
                              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm font-bold text-black leading-snug group-hover:text-accent transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                      </section>

                      {proyectoSeleccionado.tareas && proyectoSeleccionado.tareas.length > 0 && (
                        <section className="space-y-6">
                          <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Automatización y Tareas</h4>
                          <div className="space-y-4">
                            {proyectoSeleccionado.tareas.map((tarea, i) => {
                              const Icon = IconMap[tarea.icono];
                              return (
                                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border-l-4 border-accent">
                                  <Icon className="h-5 w-5 text-black" />
                                  <div>
                                    <p className="text-xs font-black uppercase tracking-widest">{tarea.titulo}</p>
                                    <p className="text-sm text-secondary">{tarea.descripcion}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </section>
                      )}

                      <section className="space-y-4">
                        <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Arquitectura & Estructura</h4>
                        <div className="bg-black p-8 space-y-4">
                          <div className="flex items-center gap-3">
                            <Layers className="h-5 w-5 text-accent" />
                            <span className="font-headline font-bold text-white uppercase tracking-widest text-xs">{proyectoSeleccionado.arquitecturaTitulo}</span>
                          </div>
                          <p className="text-xs font-mono text-gray-400 leading-relaxed bg-white/5 p-4 border border-white/10">
                            {proyectoSeleccionado.arquitectura}
                          </p>
                        </div>
                      </section>
                    </div>

                    <div className="space-y-10">
                      <section className="space-y-4">
                        <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Cliente</h4>
                        <p className="font-headline font-black text-xl text-black uppercase tracking-tighter">{proyectoSeleccionado.cliente}</p>
                      </section>

                      <section className="space-y-6">
                        <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Stack Tecnológico</h4>
                        <div className="flex flex-wrap gap-2">
                          {proyectoSeleccionado.tecnologias.map((tech, i) => (
                            <Badge key={i} variant="outline" className="border-black text-black font-bold text-[10px] uppercase rounded-none px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </section>

                      <div className="pt-10 border-t border-gray-100 space-y-4">
                        <div className="flex items-center gap-2">
                          <Code2 className="h-4 w-4 text-accent" />
                          <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Pruebas Unitarias Integradas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
