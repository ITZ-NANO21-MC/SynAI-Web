"use client"

import * as React from 'react';
import Image from 'next/image';
import { PORTAFOLIO } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Search } from 'lucide-react';

/**
 * Página de Portafolio con filtros interactivos
 */
export default function PortafolioPage() {
  const [filtro, setFiltro] = React.useState<string>('Todos');
  
  const categorias = ['Todos', 'Web', 'App', 'Marketing', 'Branding'];
  
  const proyectosFiltrados = filtro === 'Todos' 
    ? PORTAFOLIO 
    : PORTAFOLIO.filter(p => p.categoria === filtro);

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6 py-12 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Nuestros Proyectos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Una selección de nuestros trabajos más recientes. Cada proyecto es una historia de éxito y superación digital.
        </p>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map(cat => (
            <Button
              key={cat}
              variant={filtro === cat ? "default" : "outline"}
              onClick={() => setFiltro(cat)}
              className={filtro === cat ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary/5"}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto) => {
            const imgData = PlaceHolderImages.find(p => p.id === proyecto.imagen);
            return (
              <Card key={proyecto.id} className="group overflow-hidden border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl">
                <CardContent className="p-0 relative h-64 w-full">
                  <Image 
                    src={imgData?.imageUrl || ''} 
                    alt={proyecto.titulo} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={imgData?.imageHint}
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center text-white">
                    <h3 className="text-2xl font-headline font-bold mb-2">{proyecto.titulo}</h3>
                    <p className="text-sm text-white/80 mb-6">{proyecto.descripcion}</p>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold">
                      Ver Detalles <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider group-hover:hidden transition-opacity">
                    {proyecto.categoria}
                  </div>
                </CardContent>
                <div className="p-4 bg-white border-t group-hover:bg-secondary/10 transition-colors">
                  <h4 className="font-bold text-primary">{proyecto.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{proyecto.cliente}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <Search className="h-16 w-16 text-muted mx-auto" />
            <h3 className="text-2xl font-bold text-muted-foreground">No encontramos proyectos en esta categoría.</h3>
            <p className="text-muted-foreground">Estamos trabajando en nuevos proyectos. ¡Vuelve pronto!</p>
            <Button onClick={() => setFiltro('Todos')}>Ver Todos</Button>
          </div>
        )}
      </section>
    </div>
  );
}