import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Rocket, Trophy, Zap, BrainCircuit, MapPin, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ESTADISTICAS, SERVICIOS } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
              <MapPin className="h-4 w-4" />
              Falcón, Venezuela
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight">
              Sinergia e Inteligencia con <span className="text-primary text-glow">SYNAI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Transformamos negocios con <span className="text-accent font-bold">consultoría especializada</span> en IA y desarrollo de software personalizado desde el occidente venezolano.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 font-bold shadow-neon-primary text-lg">
                <Link href="/contacto">Iniciar Consultoría <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-10 font-bold text-lg">
                <Link href="/servicios">Nuestras Soluciones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES SYNAI? */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-accent text-glow-accent uppercase tracking-widest">¿QUÉ ES SYNAI?</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
            SYNAI es una empresa emergente de consultoría especializada en Inteligencia Artificial y desarrollo de software personalizado, con base en <span className="text-primary font-bold">Falcón, Venezuela</span>.
          </p>
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 italic text-muted-foreground text-lg relative text-left">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl"></div>
            "El nombre fusiona 'Syn' (de sinergia/sistema) + 'AI' (Inteligencia Artificial), reflejando nuestro enfoque en crear soluciones tecnológicas integradas e inteligentes."
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones robustas para el mantenimiento de tus equipos y el desarrollo de tu visión digital.
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          {SERVICIOS.map((servicio) => (
            <Card key={servicio.id} className="group hover:shadow-neon-primary transition-all duration-300 border-primary/10 hover:border-primary/40 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    {servicio.icono === 'Laptop' ? (
                      <Laptop className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                    ) : (
                      <BrainCircuit className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground">{servicio.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{servicio.descripcion}</p>
                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase">Contacto Directo</span>
                    <span className="text-accent font-bold text-sm">{servicio.precio}</span>
                  </div>
                  <Link href={`/servicios#${servicio.id}`} className="text-accent font-bold inline-flex items-center hover:underline shrink-0 text-sm">
                    Detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-card/10">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">¿Por qué <span className="text-primary">SYNAI</span>?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">IA Integrada</h4>
                  <p className="text-muted-foreground">Desarrollamos aplicaciones con el poder de la IA en su ADN desde el día uno.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Soporte Confiable</h4>
                  <p className="text-muted-foreground">Especialistas en hardware y software para mantener tu infraestructura al 100%.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Sinergia Tecnológica</h4>
                  <p className="text-muted-foreground">Conectamos tus sistemas mediante APIs personalizadas de alta eficiencia.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[60px] rounded-full"></div>
            <div className="space-y-4 pt-12 z-10">
              <div className="bg-card/80 p-6 rounded-2xl border border-primary/20 shadow-lg backdrop-blur-md">
                <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">IA Expertos</h5>
                <p className="text-xs text-muted-foreground">LLMs & Computer Vision.</p>
              </div>
              <div className="bg-card/80 p-6 rounded-2xl border border-primary/20 shadow-lg backdrop-blur-md">
                <Trophy className="h-8 w-8 text-primary mb-4" />
                <h5 className="font-bold text-lg">Top Quality</h5>
                <p className="text-xs text-muted-foreground">Falcón Innovation Hub.</p>
              </div>
            </div>
            <div className="space-y-4 z-10">
              <div className="bg-card/80 p-6 rounded-2xl border border-accent/20 shadow-lg backdrop-blur-md">
                <Star className="h-8 w-8 text-accent mb-4" />
                <h5 className="font-bold text-lg">99% Éxito</h5>
                <p className="text-xs text-muted-foreground">En implementaciones.</p>
              </div>
              <div className="bg-card/80 p-6 rounded-2xl border border-accent/20 shadow-lg backdrop-blur-md">
                <Zap className="h-8 w-8 text-accent mb-4" />
                <h5 className="font-bold text-lg">Agilidad</h5>
                <p className="text-xs text-muted-foreground">Sprints de 2 semanas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 bg-primary/5 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold">Impulsa tu visión digital hoy</h2>
            <p className="text-xl text-muted-foreground">
              Agenda una llamada con nuestros arquitectos de software en Falcón y optimiza tu infraestructura con IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 font-bold text-lg shadow-neon-primary">
                <Link href="/contacto">Solicitar Análisis IA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-10 font-bold text-lg">
                <Link href="https://wa.me/584246684134">WhatsApp Falcón</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}