
"use client"

import * as React from 'react';
import { Mail, Phone, MapPin, Send, Wand2, CheckCircle, BrainCircuit, Search, Zap, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateSeoMetadata, type GenerateSeoMetadataOutput } from '@/ai/flows/generate-seo-metadata';

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const [seoContent, setSeoContent] = React.useState('');
  const [seoResult, setSeoResult] = React.useState<GenerateSeoMetadataOutput | null>(null);
  const [isGeneratingSeo, setIsGeneratingSeo] = React.useState(false);

  const loadExample = () => {
    setSeoContent("Ofrecemos consultoría avanzada en inteligencia artificial para el sector turístico en el estado Falcón, implementando chatbots inteligentes que hablan 5 idiomas para hoteles y posadas.");
    toast({
      description: "Ejemplo cargado. ¡Haz clic en Generar Metadatos!",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Consulta Recibida!",
        description: "Un arquitecto de soluciones de SYNAI Falcón se pondrá en contacto contigo pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const handleGenerateSeo = async () => {
    if (!seoContent.trim()) return;
    setIsGeneratingSeo(true);
    try {
      const result = await generateSeoMetadata({
        content: seoContent,
        keywords: ['inteligencia artificial', 'SynAI', 'software personalizado', 'IA Falcón', 'Venezuela tech'],
        pageType: 'service page'
      });
      setSeoResult(result);
    } catch (error) {
      toast({
        title: "Error IA",
        description: "No pudimos generar los metadatos en este momento.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingSeo(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="container mx-auto px-4 md:px-6 py-12 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Diseñemos tu Futuro con IA</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Desde Falcón, Venezuela, ayudamos a empresas a integrar IA en el ADN de sus procesos.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-primary">Canales de Atención</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/10">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Consultoría Estratégica</h4>
                  <p className="text-muted-foreground">sistemaia11@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/10">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp Venezuela</h4>
                  <p className="text-muted-foreground">+58 424 668 4134</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/10">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-muted-foreground">Falcón, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 relative overflow-hidden group">
            <div className="text-center z-10 p-8">
              <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-bold text-lg">Hub de Innovación Falcón</p>
              <p className="text-sm text-muted-foreground">Creando el futuro desde el occidente venezolano.</p>
            </div>
          </div>
        </div>

        <Card className="bg-card border-primary/10 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline font-bold">Solicitar Análisis IA</CardTitle>
            <CardDescription>Describe tu desafío técnico para una evaluación personalizada.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Nombre / Empresa</label>
                  <Input placeholder="Tu nombre" required className="bg-background/50 border-primary/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <Input type="email" placeholder="empresa@correo.com" required className="bg-background/50 border-primary/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Tipo de Solución</label>
                <select className="flex h-10 w-full rounded-md border border-primary/10 bg-background/50 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                  <option>Consultoría IA</option>
                  <option>Software a Medida</option>
                  <option>Producto (Agro/Salud/Turismo)</option>
                  <option>Integración APIs</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Mensaje</label>
                <Textarea placeholder="Explica cómo podemos ayudarte..." className="min-h-[150px] bg-background/50 border-primary/10" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-neon-primary" disabled={isSubmitting}>
                {isSubmitting ? "Procesando..." : "Enviar Solicitud"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-primary/10 mt-20">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase">
                <Target className="h-3 w-3" /> Herramienta para Emprendedores
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Optimizador SEO SynAI</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Nuestra IA analiza tu propuesta de valor para generar títulos y descripciones optimizadas para Google.</p>
                <div className="flex items-start gap-4 py-2 border-l-2 border-primary/30 pl-4 bg-primary/5 rounded-r-lg">
                  <Users className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <p className="text-xs">
                    Diseñado para <strong>PYMES y emprendedores</strong> de Falcón que buscan escalar digitalmente sin necesidad de ser expertos en marketing.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={loadExample}
                    className="flex items-center gap-2 text-xs text-accent hover:underline w-fit transition-all"
                  >
                    <Lightbulb className="h-3 w-3" /> ¿No sabes qué escribir? Cargar ejemplo
                  </button>
                  <Textarea 
                    value={seoContent}
                    onChange={(e) => setSeoContent(e.target.value)}
                    placeholder="Ejemplo: Desarrollo de sistemas de riego inteligente con sensores IoT para cultivos de melón en la península de Paraguaná..."
                    className="bg-background border-primary/10 min-h-[120px]"
                  />
                </div>
              </div>
              <Button 
                onClick={handleGenerateSeo} 
                disabled={isGeneratingSeo || !seoContent}
                className="bg-primary text-primary-foreground font-bold px-8 shadow-neon-primary"
              >
                {isGeneratingSeo ? "Procesando con IA..." : "Generar Metadatos SEO"} <Wand2 className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-2xl border border-primary/20 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Search className="h-32 w-32 text-primary" />
              </div>
              {seoResult ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
                  <div className="flex items-center gap-2 text-accent font-bold">
                    <CheckCircle className="h-5 w-5" /> Optimización Completada
                  </div>
                  <div className="space-y-4">
                    <div className="bg-background/40 p-4 rounded-xl border border-white/5">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase mb-2 tracking-[0.2em]">Vista Previa Google (Título)</h4>
                      <p className="text-xl font-medium text-primary leading-tight hover:underline cursor-pointer">{seoResult.metaTitle}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[10px] text-muted-foreground">{seoResult.metaTitle.length} caracteres</p>
                        <p className={seoResult.metaTitle.length < 60 ? "text-[10px] text-accent font-bold" : "text-[10px] text-destructive"}>
                          {seoResult.metaTitle.length < 60 ? "Ideal (<60)" : "Demasiado largo"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-background/40 p-4 rounded-xl border border-white/5">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase mb-2 tracking-[0.2em]">Vista Previa Google (Descripción)</h4>
                      <p className="text-sm leading-relaxed text-foreground/80">{seoResult.metaDescription}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[10px] text-muted-foreground">{seoResult.metaDescription.length} caracteres</p>
                        <p className={seoResult.metaDescription.length < 160 ? "text-[10px] text-accent font-bold" : "text-[10px] text-destructive"}>
                          {seoResult.metaDescription.length < 160 ? "Ideal (<160)" : "Demasiado largo"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground space-y-4">
                  <BrainCircuit className="h-12 w-12 mx-auto opacity-20 text-primary" />
                  <p className="max-w-[250px] mx-auto text-sm">Introduce una descripción a la izquierda para ver la magia de la IA aplicada al SEO.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
