import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

/**
 * Página de Servicios de SYNAI
 */
export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header de Página */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Nuestras Soluciones</h1>
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            Desde soporte técnico local en Falcón hasta consultoría avanzada en IA para el mercado global.
          </p>
        </div>
      </section>

      {/* Grid de Servicios y Detalles */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {SERVICIOS.map((servicio) => {
            const imgData = PlaceHolderImages.find(p => p.id === servicio.imagen);
            return (
              <Card key={servicio.id} id={servicio.id} className="flex flex-col h-full border-border hover:border-accent transition-colors shadow-sm overflow-hidden group bg-card">
                <div className="relative h-64 w-full">
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
                <CardContent className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="font-bold text-accent italic">
                      {servicio.id === 'technical-support' ? 'Llámanos si necesitas:' : 'Llámanos si buscas:'}
                    </p>
                    <ul className="space-y-3">
                      {servicio.detalles.map((detalle, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" /> 
                          <span className="text-muted-foreground">{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-primary/10 space-y-2">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Contáctanos</p>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">{servicio.id === 'technical-support' ? '(+58) 0424-6684134, SYNAI' : '(+58) 0424-6684134'}</span>
                      <span className="text-sm text-muted-foreground">Atención inmediata en Falcón</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-neon-primary py-6">
                    <a href="https://wa.me/584246684134" target="_blank">Agendar Servicio <ArrowRight className="ml-2 h-5 w-5" /></a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Especialización de Vanguardia */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-16">Especialización de Vanguardia</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary">Salud Digital y Telemedicina</h3>
              <p className="text-muted-foreground">Análisis de imágenes médicas y telemedicina asistida por IA para mejorar el diagnóstico y la atención al paciente.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary">Automatización de Procesos Empresariales</h3>
              <p className="text-muted-foreground">Chatbots transaccionales (WhatsApp, web), flujos de trabajo automatizados, integración de sistemas (CRM, inventarios, facturación).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
