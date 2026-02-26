import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star, Users, Rocket, Trophy, Zap, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ESTADISTICAS, SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              <BrainCircuit className="h-4 w-4" />
              Especialistas en Inteligencia Artificial
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight">
              Impulsa tu Negocio con <span className="text-primary text-glow">Inteligencia Real.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En <span className="text-primary font-bold">SYNAI</span>, transformamos la complejidad tecnológica en soluciones de software personalizadas e IA de vanguardia para escalar tu impacto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold shadow-[0_0_20px_rgba(157,78,221,0.3)]">
                <Link href="/contacto">Iniciar Consultoría <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 font-bold">
                <Link href="/servicios">Nuestras Soluciones</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative z-0 hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(157,78,221,0.2)]">
              <Image 
                src={heroImage?.imageUrl || ''} 
                alt="SYNAI Technology" 
                width={800} 
                height={600}
                className="object-cover opacity-90 grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                data-ai-hint="futuristic AI laboratory"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ESTADISTICAS.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary">
                  {stat.valor}{stat.sufijo}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Servicios de Élite</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos ingeniería de software robusta con algoritmos de IA personalizados.
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {SERVICIOS.map((servicio) => (
            <Card key={servicio.id} className="group hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] transition-all duration-300 border-primary/10 hover:border-primary/40 bg-card/50">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Rocket className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">{servicio.titulo}</h3>
                <p className="text-muted-foreground">{servicio.descripcion}</p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="font-bold text-primary">{servicio.precio}</span>
                  <Link href={`/servicios#${servicio.id}`} className="text-primary font-bold inline-flex items-center hover:underline">
                    Detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">¿Por qué <span className="text-primary">SYNAI</span> para tu software?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">IA con Propósito</h4>
                  <p className="text-muted-foreground">No implementamos IA solo por moda, sino para resolver problemas críticos de negocio.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Arquitectura Escalable</h4>
                  <p className="text-muted-foreground">Construimos software que crece contigo, sin deuda técnica innecesaria.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Enfoque Consultivo</h4>
                  <p className="text-muted-foreground">Somos tus socios tecnológicos, involucrados en tu éxito desde el día 1.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-card p-6 rounded-2xl border border-primary/20 shadow-lg">
                <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">IA Expertos</h5>
                <p className="text-xs text-muted-foreground">Deep Learning & NLP.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/20 shadow-lg">
                <Trophy className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">Top Quality</h5>
                <p className="text-xs text-muted-foreground">QA riguroso.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border border-primary/20 shadow-lg">
                <Star className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">99% Éxito</h5>
                <p className="text-xs text-muted-foreground">En entregas críticas.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/20 shadow-lg">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">DevOps Agile</h5>
                <p className="text-xs text-muted-foreground">CI/CD avanzado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 bg-primary/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-primary/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold">Lleva tu infraestructura al siguiente nivel</h2>
            <p className="text-xl text-muted-foreground">
              Agenda una llamada de descubrimiento técnica y hablemos de cómo la IA puede optimizar tu software actual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 font-bold text-lg shadow-[0_0_30px_rgba(157,78,221,0.4)]">
                <Link href="/contacto">Solicitar Análisis IA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-10 font-bold text-lg">
                <Link href="https://wa.me/34600000000">WhatsApp Técnico</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}