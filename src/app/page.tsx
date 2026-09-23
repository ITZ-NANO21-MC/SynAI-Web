import Link from 'next/link';
import { ArrowRight, BrainCircuit, MapPin, Laptop, Database, Wrench, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ESTADISTICAS, SERVICIOS, PROMOCIONES } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';

// Mapa de iconos por servicio (escalable a nuevos servicios)
const ICON_MAP: Record<string, typeof Laptop> = {
  Laptop: Laptop,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

// Metadata dinámica para la página de inicio
export async function generateMetadata() {
  // Construir contenido relevante para SEO a partir de los datos
  const content = [
    'SynAI - Diseño web, Chatbots e Inventario en Coro, Falcón, Venezuela',
    `${SERVICIOS.length} servicios: ` + SERVICIOS.map(s => `${s.titulo} (${s.precio})`).join(', '),
    `Ofertas: ${ESTADISTICAS.map(e => `${e.valor}${e.sufijo} ${e.etiqueta}`).join(', ')}`,
    'Descripción: Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario.',
  ].join(' ');

  return generatePageMetadata({
    content,
    keywords: ['diseño web', 'chatbots WhatsApp', 'sistema de inventario', 'soporte técnico', 'Coro', 'Falcón', 'Venezuela', 'digitalizar negocio'],
    pageType: 'homepage',
    titleSuffix: ' | SYNAI',
    fallbackTitle: 'SynAI | Diseño web, Chatbots e Inventario en Coro, Falcón',
    fallbackDescription: 'Soluciones tecnológicas para negocios en Falcón. Diseño web con 31 días gratis, chatbots e inventario. ¡Contáctanos!',
  });
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-background">
        {/* Decoración minimalista */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-bold text-xs tracking-widest uppercase">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Coro, Falcón - Venezuela
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter text-foreground">
              Soluciones tecnológicas para negocios en <span className="text-accent text-glow-cyan">Falcón</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-2xl">
              Diseño web, chatbots, sistema de inventario y soporte técnico. Todo lo que necesitas para{' '}
              <span className="text-foreground font-bold underline decoration-accent decoration-4 underline-offset-8">digitalizar tu negocio</span>.
            </p>
            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-14 font-bold text-lg rounded-none transition-transform hover:-translate-y-1">
                <Link href="/contacto">SOLICITA TU DEMO GRATIS <ArrowRight className="ml-2 h-5 w-5 text-accent" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-12 h-14 font-bold text-lg rounded-none transition-transform hover:-translate-y-1">
                <Link href="https://wa.me/584246684134" target="_blank"><MessageCircle className="mr-2 h-5 w-5 text-accent" />CONTÁCTANOS POR WHATSAPP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ SYNAI? */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center space-y-12">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-[0.2em] text-accent">¿POR QUÉ SYNAI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left pt-8">
            <div className="p-8 border-l-4 border-accent bg-foreground/5">
              <p className="font-headline font-black text-accent text-xl mb-3">HECHO EN FALCÓN 🇻🇪</p>
              <p className="text-secondary text-sm font-medium leading-relaxed">Pensado para emprendedores y negocios de Venezuela.</p>
            </div>
            <div className="p-8 border-l-4 border-accent bg-foreground/5">
              <p className="font-headline font-black text-accent text-xl mb-3">PRECIOS FLEXIBLES</p>
              <p className="text-secondary text-sm font-medium leading-relaxed">Paga en USD, Bs o cripto (USDT). Sin complicaciones.</p>
            </div>
            <div className="p-8 border-l-4 border-accent bg-foreground/5">
              <p className="font-headline font-black text-accent text-xl mb-3">SOPORTE EN ESPAÑOL</p>
              <p className="text-secondary text-sm font-medium leading-relaxed">Acompañamiento real de principio a fin.</p>
            </div>
            <div className="p-8 border-l-4 border-accent bg-foreground/5">
              <p className="font-headline font-black text-accent text-xl mb-3">SIN TÉCNICOS</p>
              <p className="text-secondary text-sm font-medium leading-relaxed">No necesitas conocimientos técnicos: nosotros nos encargamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADISTICAS */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {ESTADISTICAS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2 border-r last:border-none border-border">
                <div className="text-6xl font-headline font-bold text-foreground flex items-baseline">
                  {stat.valor}<span className="text-accent ml-1">{stat.sufijo}</span>
                </div>
                <div className="text-sm font-bold text-secondary uppercase tracking-[0.3em]">
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOCIONES */}
      <section className="py-32 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-accent tracking-tighter uppercase">Promociones Especiales</h2>
            <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">Ofertas limitadas para las primeras empresas en digitalizarse.</p>
            <div className="w-24 h-2 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROMOCIONES.map((promo) => {
              const Icon = ICON_MAP[promo.icono] || Zap;
              return (
                <div key={promo.id} className="p-8 border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500 group">
                  <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <p className="font-headline font-black text-xl mb-3">{promo.titulo}</p>
                  <p className="text-secondary font-medium leading-relaxed mb-6">{promo.detalle}</p>
                  <a href={`https://wa.me/584246684134?text=${encodeURIComponent(promo.whatsappTexto)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent hover:text-background transition-colors">
                    Reclamar promoción <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ¿QUÉ OFRECEMOS? */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground tracking-tighter">¿QUÉ OFRECEMOS?</h2>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">Soluciones concretas para digitalizar tu negocio.</p>
          <div className="w-24 h-2 bg-accent mx-auto"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
          {SERVICIOS.filter(s => s.id === 'web-design-pro' || s.id === 'chatbot-whatsapp' || s.id === 'inventario-pro').map((servicio) => {
            const Icon = ICON_MAP[servicio.icono] || BrainCircuit;
            return (
            <Card key={servicio.id} className="group border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-card overflow-hidden">
              <CardContent className="p-12 space-y-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-accent/20 transition-colors"></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-secondary uppercase">{servicio.categoria}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-foreground">{servicio.titulo}</h3>
                <p className="text-secondary font-medium leading-relaxed">{servicio.descripcion}</p>
                <div className="text-lg font-headline font-black text-accent">
                  {servicio.precioAnterior && (
                    <span className="line-through text-secondary mr-3">{servicio.precioAnterior}</span>
                  )}
                  {servicio.precio}
                </div>
                <div className="pt-8 flex items-center justify-between border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Contacto Directo</span>
                    <span className="text-foreground font-bold text-lg">{servicio.telefono}</span>
                  </div>
                  <Link href={`/servicios#${servicio.id}`} className="bg-accent p-3 hover:bg-primary hover:text-accent transition-colors">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 bg-primary text-primary-foreground p-16 md:p-24 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-headline font-bold leading-none tracking-tighter">DIGITALIZA TU NEGOCIO</h2>
            <p className="text-xl text-secondary font-medium">
              Solicita tu demo gratis y empieza hoy. Sin costos ocultos, sin conocimientos técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-background hover:text-foreground px-12 h-14 font-bold text-lg rounded-none transition-all">
                <Link href="/contacto">SOLICITA TU DEMO GRATIS</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent px-12 h-14 font-bold text-lg rounded-none transition-all">
                <Link href="https://wa.me/584246684134" target="_blank"><MessageCircle className="mr-2 h-5 w-5" />WHATSAPP DIRECTO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}