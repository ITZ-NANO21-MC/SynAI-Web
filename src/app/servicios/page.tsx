import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { generatePageMetadata } from '@/lib/seo';

const WHATSAPP = '584246684134';

// Metadata dinámica para la página de servicios
export async function generateMetadata() {
  // Construir contenido relevante a partir de los servicios
  const serviciosText = SERVICIOS.map(s => `${s.titulo}: ${s.descripcion} (${s.precio})`).join('. ');
  const keywords = SERVICIOS.map(s => s.titulo).concat(['diseño web', 'chatbots WhatsApp', 'sistema de inventario', 'mantenimiento web', 'servicio técnico', 'Coro', 'Falcón', 'Venezuela']);

  const content = `SynAI - Servicios de diseño web con 31 días gratis, chatbots para WhatsApp, sistema de inventario, mantenimiento web y servicio técnico en Coro, Falcón, Venezuela. ${serviciosText}`;

  return generatePageMetadata({
    content,
    keywords,
    pageType: 'service page',
    titleSuffix: ' | SYNAI',
    fallbackTitle: 'Servicios SynAI - Diseño web, Chatbots e Inventario en Coro, Falcón',
    fallbackDescription: 'Diseño web con 31 días gratis, chatbots para WhatsApp, sistema de inventario, mantenimiento web y servicio técnico en Falcón, Venezuela. Solicita tu demo gratis.',
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
            Diseño web, chatbots, inventario, mantenimiento web y soporte técnico. Soluciones accesibles para digitalizar tu negocio en Falcón.
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
                  <p className="pt-4 text-xl font-headline font-black text-accent">
                    {servicio.precioAnterior && (
                      <span className="line-through text-secondary mr-3">{servicio.precioAnterior}</span>
                    )}
                    {servicio.precio}
                  </p>
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

                  {servicio.planes && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <p className="font-bold text-foreground uppercase tracking-widest text-xs">ELIGE TU PLAN</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {servicio.planes.map((plan) => (
                          <div key={plan.nombre} className="bg-muted/50 p-6 border border-border hover:border-accent transition-colors duration-300">
                            <p className="font-headline font-black text-foreground text-xs uppercase tracking-widest mb-2">{plan.nombre}</p>
                            <p className="text-2xl font-headline font-black text-accent leading-none">{plan.precio}</p>
                            {plan.setup && <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">{plan.setup}</p>}
                            <ul className="space-y-2 mt-4">
                              {plan.detalles.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-secondary font-medium leading-snug">
                                  <span className="mt-1.5 w-1.5 h-1.5 bg-accent shrink-0"></span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {servicio.promo && (
                    <div className="bg-primary text-primary-foreground p-6 border-l-4 border-accent space-y-4">
                      <p className="font-headline font-black text-accent text-xs uppercase tracking-widest">PROMO ACTIVA</p>
                      <p className="text-secondary font-semibold text-sm leading-relaxed">{servicio.promo}</p>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-10 pt-0">
                  <Button asChild className="w-full h-16 bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-bold text-lg rounded-none transition-all duration-300">
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(servicio.whatsappTexto || 'Hola SynAI! Me gustaría más información.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOLICITAR AHORA
                    </a>
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
                Despliegue ultra rápido de sitios web corporativos con optimización para buscadores y mantenimiento continuo.
              </p>
            </div>
            <div className="p-12 hover:bg-foreground/5 transition-colors">
              <h3 className="text-2xl font-headline font-bold mb-6 text-accent">AUTOMATIZACIÓN</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Despliegue de chatbots transaccionales inteligentes y sistemas de inventario que integran ventas, alertas y facturación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}