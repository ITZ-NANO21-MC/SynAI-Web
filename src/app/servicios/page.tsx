import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

/**
 * Página de Servicios de SynAI
 */
export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header de Página */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Servicios Principales</h1>
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            Desde Falcón, Venezuela, creamos soluciones tecnológicas integradas e inteligentes para el mercado global.
          </p>
        </div>
      </section>

      {/* Grid de Servicios y Detalles */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICIOS.map((servicio) => {
            const imgData = PlaceHolderImages.find(p => p.id === servicio.imagen);
            return (
              <Card key={servicio.id} id={servicio.id} className="flex flex-col h-full border-border hover:border-accent transition-colors shadow-sm overflow-hidden group bg-card">
                <div className="relative h-48 w-full">
                  <Image 
                    src={imgData?.imageUrl || ''} 
                    alt={servicio.titulo} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {servicio.categoria}
                  </div>
                </div>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-headline font-bold text-primary">{servicio.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground">{servicio.descripcion}</p>
                  <ul className="space-y-2 text-sm">
                    {servicio.detalles.map((detalle, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> 
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-primary/10">
                    <span className="text-3xl font-bold text-primary">{servicio.precio}</span>
                    <span className="text-muted-foreground text-sm block">Presupuesto adaptado a tu proyecto</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(157,78,221,0.2)]">
                    <a href="/contacto">Solicitar Diagnóstico <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Enfoque en Nichos */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-16">Especialización por Nicho</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary">Agrotech</h3>
              <p className="text-muted-foreground">Monitoreo inteligente de cultivos y optimización de riego para la agricultura moderna en Venezuela y el mundo.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary">Turismo</h3>
              <p className="text-muted-foreground">Chatbots multidioma y sistemas de recomendación para potenciar destinos turísticos con tecnología de punta.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary">Salud Digital</h3>
              <p className="text-muted-foreground">Análisis de imágenes médicas y telemedicina asistida por IA para mejorar el diagnóstico y la atención.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
