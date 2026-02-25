"use client"

import * as React from 'react';
import { Mail, Phone, MapPin, Send, Wand2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateSeoMetadata, type GenerateSeoMetadataOutput } from '@/ai/flows/generate-seo-metadata';

/**
 * Página de Contacto con integración de Formulario y Herramienta IA SEO
 */
export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // Estados para la IA SEO
  const [seoContent, setSeoContent] = React.useState('');
  const [seoResult, setSeoResult] = React.useState<GenerateSeoMetadataOutput | null>(null);
  const [isGeneratingSeo, setIsGeneratingSeo] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje Enviado!",
        description: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
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
        keywords: ['agencia digital', 'synapse studio', 'diseño web'],
        pageType: 'portfolio item'
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
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6 py-12 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Hablemos de tu Proyecto</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ¿Tienes una idea? Nosotros tenemos la experiencia para hacerla realidad. Escríbenos y comencemos a trabajar.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Información de contacto */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-primary">Canales de Atención</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-muted-foreground">hola@synapsestudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Teléfono</h4>
                  <p className="text-muted-foreground">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Ubicación</h4>
                  <p className="text-muted-foreground">Av. de la Innovación 123, Ciudad Tecnológica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa placeholder */}
          <div className="h-64 bg-secondary/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20 relative overflow-hidden group">
            <div className="text-center z-10 p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-bold text-primary">Geoapify Map Placeholder</p>
              <p className="text-sm text-muted-foreground">Nuestra oficina central te espera.</p>
            </div>
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/600')] opacity-10 bg-cover"></div>
          </div>
        </div>

        {/* Formulario */}
        <Card className="shadow-xl border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-headline font-bold">Enviar un Mensaje</CardTitle>
            <CardDescription>Completa el formulario y te contactaremos a la brevedad.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Nombre Completo</label>
                  <Input placeholder="Ej. Juan Pérez" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Correo Electrónico</label>
                  <Input type="email" placeholder="juan@ejemplo.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Servicio de Interés</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option>Desarrollo Web</option>
                  <option>Branding</option>
                  <option>Marketing Digital</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Mensaje</label>
                <Textarea placeholder="Cuéntanos un poco sobre tu proyecto..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Propuesta"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Bonus Feature: AI SEO Assistant */}
      <section className="container mx-auto px-4 md:px-6 py-24 border-t mt-20">
        <div className="bg-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase">
                <Wand2 className="h-3 w-3" /> Exclusivo para Clientes
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Asistente SEO Inteligente</h2>
              <p className="text-muted-foreground">
                Usa nuestra herramienta impulsada por IA para generar metadatos optimizados para tus proyectos. Simplemente describe tu contenido y deja que la IA haga el trabajo.
              </p>
              <Textarea 
                value={seoContent}
                onChange={(e) => setSeoContent(e.target.value)}
                placeholder="Escribe aquí el contenido de tu página para optimizar..."
                className="bg-white"
              />
              <Button 
                onClick={handleGenerateSeo} 
                disabled={isGeneratingSeo || !seoContent}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isGeneratingSeo ? "Generando..." : "Generar Metadatos SEO"}
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border min-h-[300px] flex flex-col justify-center">
              {seoResult ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <CheckCircle className="h-5 w-5" /> Optimización Lista
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Meta Título</h4>
                    <p className="p-3 bg-secondary/20 rounded font-medium text-primary">{seoResult.metaTitle}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Meta Descripción</h4>
                    <p className="p-3 bg-secondary/20 rounded text-sm text-primary leading-relaxed">{seoResult.metaDescription}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground space-y-2">
                  <Wand2 className="h-10 w-10 mx-auto opacity-20" />
                  <p>Los resultados aparecerán aquí...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}