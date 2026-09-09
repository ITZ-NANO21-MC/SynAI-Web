import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { generatePageMetadata } from '@/lib/seo';

// Metadata dinámica para la página de servicios
export async function generateMetadata() {
  // Construir contenido relevante a partir de los servicios
  const serviciosText = SERVICIOS.map(s => `${s.titulo}: ${s.descripcion}`).join('. ');
  const keywords = SERVICIOS.map(s => s.titulo).concat(['consultoría IA', 'desarrollo web', 'automatización', 'soporte técnico', 'Falcón', 'Venezuela']);

  const content = `SYNAI - Servicios de consultoría en IA, desarrollo web, automatización y soporte técnico en Falcón, Venezuela. ${serviciosText}`;

  return generatePageMetadata({
    content,
    keywords,
    pageType: 'service page',
    titleSuffix: ' | SYNAI',
    fallbackTitle: 'Servicios SYNAI - Consultoría en IA & Desarrollo de Software',
    fallbackDescription: 'Ofrecemos servicios de consultoría en Inteligencia Artificial, desarrollo web, automatización de procesos y soporte técnico especializado en Falcón, Venezuela.',
  });
}

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Header Minimalista */}
      <section className="bg-background py-32 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <div className="w-12 h-1 bg-accent mx-auto mb-4"></div>
          <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none text-foreground">
            NUESTRAS <br /> <span className="text-accent">SOLUCIONES</span>
          </h1>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
            Estructuras tecnológicas diseñadas para maximizar la productividad y la innovación empresarial desde Falcón.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {SERVICIOS.map((servicio, idx) => {
            const imgData = PlaceHolderImages.find(p => p.id === servicio.imagen);
            return (
              <Card key={servicio.id} id={servicio.id} className="flex flex-col h-full border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-card overflow-hidden group">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={imgData?.imageUrl || ''} 
                    alt={servicio.titulo} 
                    width={560}
                    height={560}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 hover:opacity-100"
                    data-ai-hint={imgData?.imageHint}
                    {...(idx === 0 ? { priority: true } : {})}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-8 left-8 bg-primary text-accent px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em]">
                    {servicio.categoria}
                  </div>
                </div>
                
                <CardHeader className="p-10 pb-0">
                  <CardTitle className="text-4xl font-headline font-black text-foreground leading-none">{servicio.titulo}</CardTitle>
                </CardHeader>

                <CardContent className="p-10 space-y-10 flex-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-accent" />
                      <p className="font-bold text-foreground uppercase tracking-widest text-xs">
                        {servicio.id === 'technical-support' ? 'REQUISITOS OPERATIVOS' : 'CARACTERÍSTICAS DEL SERVICIO'}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {servicio.detalles.map((detalle, i) => (
                        <li key={i} className="flex items-start gap-4 group/li">
                          <div className="mt-1.5 w-2 h-2 bg-accent group-hover/li:w-4 transition-all shrink-0"></div>
                          <span className="text-secondary font-semibold text-lg leading-tight group-hover/li:text-foreground transition-colors">{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {servicio.id === 'web-design-pro' && (
                    <div className="bg-muted/50 p-6 border-l-4 border-accent space-y-4">
                      <p className="font-headline font-black text-foreground text-xs uppercase tracking-widest">¿Cómo funciona?</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span>Solicitas tu sitio sin pagar nada por adelantado.</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span>Lo usas gratis por 31 días (periodo de prueba).</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span>Si te gusta, pagas $20 USD y te quedas con el sitio.</span>
                        </div>
                      </div>
                    </div>
                  )}                  
                </CardContent>

                <CardFooter className="p-10 pt-0">
                  <Button asChild className="w-full h-16 bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-bold text-lg rounded-none transition-all duration-300">
                    <a href="https://wa.me/584246684134" target="_blank">SOLICITAR AHORA</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Especialización */}
      <section className="py-32 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-center mb-24 tracking-tighter">ESPECIALIZACIÓN <br /> <span className="text-accent">TECNOLÓGICA</span></h2>
          <div className="grid md:grid-cols-2 gap-0 border border-border/20 max-w-5xl mx-auto">
            <div className="p-12 border-b md:border-b-0 md:border-r border-border/20 hover:bg-foreground/5 transition-colors">
              <h3 className="text-2xl font-headline font-bold mb-6 text-accent">PRESENCIA DIGITAL</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Despliegue ultra rápido de sitios web corporativos con optimización para buscadores y alta tasa de conversión.
              </p>
            </div>
            <div className="p-12 hover:bg-foreground/5 transition-colors">
              <h3 className="text-2xl font-headline font-bold mb-6 text-accent">AUTOMATIZACIÓN</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Despliegue de chatbots transaccionales inteligentes y flujos de trabajo automatizados que integran CRM, inventarios y facturación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}