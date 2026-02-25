import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

/**
 * Página de Servicios de Synapse Studio
 */
export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header de Página */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Nuestros Servicios</h1>
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            Ofrecemos un espectro completo de servicios digitales para transformar marcas y acelerar el crecimiento empresarial.
          </p>
        </div>
      </section>

      {/* Grid de Servicios y Precios */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICIOS.map((servicio) => {
            const imgData = PlaceHolderImages.find(p => p.id === servicio.imagen);
            return (
              <Card key={servicio.id} id={servicio.id} className="flex flex-col h-full border-border hover:border-accent transition-colors shadow-sm overflow-hidden group">
                <div className="relative h-48 w-full">
                  <Image 
                    src={imgData?.imageUrl || ''} 
                    alt={servicio.titulo} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {servicio.categoria}
                  </div>
                </div>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-headline font-bold text-primary">{servicio.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground">{servicio.descripcion}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Consultoría estratégica inicial</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Diseño UI/UX personalizado</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Optimización SEO & Rendimiento</li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-3xl font-bold text-primary">{servicio.precio}</span>
                    <span className="text-muted-foreground text-sm block">Pago único o mensual según proyecto</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    <a href="/contacto">Contratar Ahora <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Preguntas Frecuentes - FAQ */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold text-lg text-primary mb-2">¿Cuánto tiempo toma un desarrollo web?</h4>
              <p className="text-muted-foreground">Típicamente entre 4 y 8 semanas dependiendo de la complejidad y funcionalidades requeridas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold text-lg text-primary mb-2">¿Ofrecen mantenimiento post-lanzamiento?</h4>
              <p className="text-muted-foreground">Sí, tenemos planes de mantenimiento y soporte 24/7 para asegurar que tu sitio funcione siempre perfectamente.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold text-lg text-primary mb-2">¿Cómo se gestionan los pagos?</h4>
              <p className="text-muted-foreground">Generalmente solicitamos un 50% al inicio y el 50% restante al finalizar el proyecto, aunque ofrecemos planes de financiación.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}