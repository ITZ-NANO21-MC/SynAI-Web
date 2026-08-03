"use client"

import * as React from 'react';
import Image from 'next/image';
import { PORTAFOLIO, type Proyecto } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Search, CheckCircle2, Cpu, Database, Code2, Layers } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

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
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {proyectosFiltrados.map((proyecto) => (
            <Card 
              key={proyecto.id} 
              className="group cursor-pointer border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-white overflow-hidden"
              onClick={() => setProyectoSeleccionado(proyecto)}
            >
              <CardContent className="p-0 relative h-72 w-full overflow-hidden">
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
                  {proyecto.categoria}
                </div>
              </CardContent>
              <div className="p-8 border-t border-gray-100 group-hover:bg-gray-50 transition-colors">
                <h4 className="font-headline text-xl font-black text-black uppercase tracking-tighter mb-1">{proyecto.titulo}</h4>
                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">{proyecto.cliente}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-32 space-y-6">
            <Search className="h-16 w-16 text-gray-200 mx-auto" />
            <h3 className="text-3xl font-headline font-black text-black uppercase">Sin resultados</h3>
            <p className="text-secondary font-medium">No hay proyectos en esta categoría por el momento.</p>
            <Button onClick={() => setFiltro('Todos')} className="bg-black text-white rounded-none">VER TODO EL PORTAFOLIO</Button>
          </div>
        )}
      </section>

      {/* Modal de Detalles del Proyecto */}
      <Dialog open={!!proyectoSeleccionado} onOpenChange={(open) => !open && setProyectoSeleccionado(null)}>
        <DialogContent className="max-w-4xl p-0 border-none rounded-none overflow-hidden bg-white">
          {proyectoSeleccionado && (
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <Image 
                  src={getImagenUrl(proyectoSeleccionado.imagen)} 
                  alt={proyectoSeleccionado.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-accent text-black font-black text-[10px] uppercase tracking-widest mb-4 rounded-none">
                    {proyectoSeleccionado.categoria}
                  </Badge>
                  <DialogTitle className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                    {proyectoSeleccionado.titulo}
                  </DialogTitle>
                </div>
              </div>

              <ScrollArea className="flex-1 p-8 md:p-12 overflow-y-auto">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-10">
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

                    <section className="space-y-4">
                      <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Arquitectura & Estructura</h4>
                      <div className="bg-gray-50 p-6 border-l-4 border-black space-y-4">
                        <div className="flex items-center gap-3">
                          <Layers className="h-5 w-5 text-black" />
                          <span className="font-headline font-bold text-black uppercase tracking-widest text-xs">MVC + Capa de Servicios</span>
                        </div>
                        <p className="text-sm font-mono text-secondary leading-relaxed bg-white p-4 border border-gray-100">
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
                        <Database className="h-4 w-4 text-accent" />
                        <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Respaldo Automatizado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-accent" />
                        <span className="text-[9px] font-black text-secondary uppercase tracking-widest">180 Pruebas Unitarias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              
              <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                <Button onClick={() => setProyectoSeleccionado(null)} className="bg-black text-white font-bold rounded-none px-10 h-12 hover:bg-accent hover:text-black transition-all">
                  CERRAR DETALLES
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
