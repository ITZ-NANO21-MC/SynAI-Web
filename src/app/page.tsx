import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star, Users, Rocket, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ESTADISTICAS, SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Página principal de Synapse Studio
 */
export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-primary font-medium text-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Líderes en Innovación Digital
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-primary">
              Construimos el <span className="text-accent underline decoration-accent/30">Futuro</span> de tu Marca.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En Synapse Studio, fusionamos creatividad y tecnología para crear soluciones digitales que no solo se ven bien, sino que generan resultados reales para tu negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold">
                <Link href="/contacto">Empieza Ahora <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 font-bold">
                <Link href="/portafolio">Ver Proyectos</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative z-0 hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src={heroImage?.imageUrl || ''} 
                alt="Synapse Hero" 
                width={800} 
                height={600}
                className="object-cover"
                data-ai-hint="modern technology studio"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ESTADISTICAS.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-headline font-bold text-accent">
                  {stat.valor}{stat.sufijo}
                </div>
                <div className="text-sm font-medium text-primary-foreground/60 uppercase tracking-widest">
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Servicios Especializados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones integrales diseñadas para cada etapa de tu crecimiento digital.
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {SERVICIOS.map((servicio) => (
            <Card key={servicio.id} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Rocket className="h-7 w-7 text-primary group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">{servicio.titulo}</h3>
                <p className="text-muted-foreground">{servicio.descripcion}</p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="font-bold text-primary">{servicio.precio}</span>
                  <Link href={`/servicios#${servicio.id}`} className="text-accent font-bold inline-flex items-center hover:underline">
                    Saber más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">¿Por qué <span className="text-accent">Synapse Studio</span> es diferente?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Metodología Ágil</h4>
                  <p className="text-muted-foreground">Iteramos rápido para entregarte valor real en el menor tiempo posible.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Diseño Centrado en el Usuario</h4>
                  <p className="text-muted-foreground">No solo diseñamos interfaces, creamos experiencias que cautivan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Soporte Continuo</h4>
                  <p className="text-muted-foreground">Tu éxito es el nuestro. Te acompañamos incluso después del lanzamiento.</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link href="/servicios">Explora todos nuestros servicios</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-accent">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">+50 Expertos</h5>
                <p className="text-xs text-muted-foreground">Colaborando globalmente.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                <Trophy className="h-8 w-8 text-accent mb-4" />
                <h5 className="font-bold text-lg">98% Satisfacción</h5>
                <p className="text-xs text-muted-foreground">Garantía de calidad.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                <Star className="h-8 w-8 text-accent mb-4" />
                <h5 className="font-bold text-lg">Top 1% Agencia</h5>
                <p className="text-xs text-muted-foreground">En el ranking de la industria.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-accent">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">Entrega Rápida</h5>
                <p className="text-xs text-muted-foreground">Maximizamos tu tiempo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 md:px-6 bg-primary rounded-3xl p-12 md:p-20 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold">¿Listo para escalar tu presencia digital?</h2>
            <p className="text-xl text-primary-foreground/80">
              No dejes pasar más tiempo. Agenda una consultoría gratuita y descubre el potencial real de tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 font-bold text-lg">
                <Link href="/contacto">Solicitar Presupuesto</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-10 font-bold text-lg">
                <Link href="https://wa.me/34600000000">WhatsApp Directo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
