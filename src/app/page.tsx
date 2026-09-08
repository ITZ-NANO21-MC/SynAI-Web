import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Trophy, Zap, BrainCircuit, MapPin, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ESTADISTICAS, SERVICIOS } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';

// Metadata dinámica para la página de inicio
export async function generateMetadata() {
  // Construir contenido relevante para SEO a partir de los datos
  const content = [
    'SYNAI - Consultoría en IA y Arquitectura de Software en Falcón, Venezuela',
    'Servicios: ' + SERVICIOS.map(s => s.titulo).join(', '),
    'Estadísticas: ' + ESTADISTICAS.map(e => `${e.valor}${e.sufijo} ${e.etiqueta}`).join(', '),
    'Descripción: Arquitectura de software e Inteligencia Artificial con enfoque minimalista y eficiente.',
  ].join(' ');

  return generatePageMetadata({
    content,
    keywords: ['consultoría IA', 'arquitectura de software', 'desarrollo personalizado', 'Falcón', 'Venezuela', 'minimalista'],
    pageType: 'homepage',
    titleSuffix: ' | SYNAI',
    fallbackTitle: 'SYNAI - Consultoría en IA & Desarrollo de Software',
    fallbackDescription: 'Consultoría líder en Inteligencia Artificial y desarrollo de software personalizado para empresas innovadoras.',
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
              Falcón, Venezuela
            </div>
            <h1 className="text-6xl md:text-9xl font-headline font-bold leading-none tracking-tighter text-foreground">
              SYNAI<span className="text-accent text-glow-cyan">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-2xl">
              Arquitectura de software e Inteligencia Artificial con enfoque <span className="text-foreground font-bold underline decoration-accent decoration-4 underline-offset-8">minimalista y eficiente</span>.
            </p>
            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-14 font-bold text-lg rounded-none transition-transform hover:-translate-y-1">
                <Link href="/contacto">EMPEZAR PROYECTO <ArrowRight className="ml-2 h-5 w-5 text-accent" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-12 h-14 font-bold text-lg rounded-none transition-transform hover:-translate-y-1">
                <Link href="/servicios">SOLUCIONES</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES SYNAI? */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center space-y-12">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-[0.2em] text-accent">IDENTIDAD SYNAI</h2>
          <p className="text-2xl md:text-4xl leading-tight font-light">
            Fusionamos <span className="font-bold text-accent italic">Sinergia Tecnológica</span> + <span className="font-bold">IA Aplicada</span> para crear sistemas que no solo funcionan, sino que escalan.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left pt-12">
            <div className="p-8 border-l-4 border-accent bg-foreground/5">
              <p className="text-secondary italic text-lg">
                &ldquo;Desde Falcón, redefinimos el desarrollo de software eliminando el ruido y enfocándonos en el núcleo de la eficiencia operativa.&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-px bg-accent/30 hidden md:block"></div>
              <BrainCircuit className="h-16 w-16 text-accent mx-8 shrink-0" />
              <div className="w-full h-px bg-accent/30 hidden md:block"></div>
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

      {/* SERVICIOS */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground tracking-tighter">NUESTRA INFRAESTRUCTURA</h2>
          <div className="w-24 h-2 bg-accent mx-auto"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 max-w-6xl">
          {SERVICIOS.map((servicio) => (
            <Card key={servicio.id} className="group border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-card overflow-hidden">
              <CardContent className="p-12 space-y-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-accent/20 transition-colors"></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {servicio.icono === 'Laptop' ? (
                      <Laptop className="h-8 w-8 text-accent" />
                    ) : (
                      <BrainCircuit className="h-8 w-8 text-accent" />
                    )}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-secondary uppercase">{servicio.categoria}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-foreground">{servicio.titulo}</h3>
                <p className="text-secondary font-medium leading-relaxed">{servicio.descripcion}</p>
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
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 bg-primary text-primary-foreground p-16 md:p-24 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-headline font-bold leading-none tracking-tighter">TRANSFORMA TU OPERACIÓN</h2>
            <p className="text-xl text-secondary font-medium">
              Arquitecturas robustas diseñadas desde Falcón para el mercado global.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-background hover:text-foreground px-12 h-14 font-bold text-lg rounded-none transition-all">
                <Link href="/contacto">SOLICITAR ANÁLISIS</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent px-12 h-14 font-bold text-lg rounded-none transition-all">
                <Link href="https://wa.me/584246684134">WHATSAPP DIRECTO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}