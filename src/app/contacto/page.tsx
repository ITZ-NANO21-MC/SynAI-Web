"use client"

import * as React from 'react';
import { Mail, Phone, MapPin, Send, Wand2, CheckCircle, BrainCircuit } from 'lucide-react';
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
                <select className="flex h-10 w-full rounded-md border border-primary/10 bg-background/50 px-3 py-2 text-sm focus:ring-2 focus:ring-primary">
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
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(157,78,221,0.3)]" disabled={isSubmitting}>
                {isSubmitting ? "Procesando..." : "Enviar Solicitud"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-primary/10 mt-20">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase">
                <Wand2 className="h-3 w-3" /> IA Experimental
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Optimizador SEO SynAI</h2>
              <p className="text-muted-foreground">
                Prueba nuestra herramienta de IA para generar metadatos optimizados al instante.
              </p>
              <Textarea 
                value={seoContent}
                onChange={(e) => setSeoContent(e.target.value)}
                placeholder="Describe tu servicio o producto..."
                className="bg-background border-primary/10"
              />
              <Button 
                onClick={handleGenerateSeo} 
                disabled={isGeneratingSeo || !seoContent}
                className="bg-primary text-primary-foreground"
              >
                {isGeneratingSeo ? "Procesando..." : "Generar con SynAI IA"}
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-primary/10 min-h-[300px] flex flex-col justify-center">
              {seoResult ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle className="h-5 w-5" /> Análisis Completado
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Meta Título</h4>
                    <p className="p-3 bg-primary/10 rounded font-medium border border-primary/20">{seoResult.metaTitle}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Meta Descripción</h4>
                    <p className="p-3 bg-primary/10 rounded text-sm leading-relaxed border border-primary/20">{seoResult.metaDescription}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground space-y-2">
                  <BrainCircuit className="h-10 w-10 mx-auto opacity-20 text-primary" />
                  <p>Esperando datos para análisis...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
