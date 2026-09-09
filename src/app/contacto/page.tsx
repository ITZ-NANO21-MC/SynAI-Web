"use client"

import * as React from "react";
import { Mail, Phone, MapPin, Send, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import dynamic from "next/dynamic";
import type { MapRef } from "@/components/shared/map-component";

// EmailJS se carga dinámicamente solo al momento del envío para no inflar el bundle inicial
const MapComponent = dynamic(() => import("@/components/shared/map-component"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
      <span className="text-xs font-bold text-secondary uppercase tracking-widest">Cargando mapa...</span>
    </div>
  ),
});

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const map = React.useRef<MapRef | null>(null);

  const GEOAPIFY_API_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const timeInput = formRef.current.querySelector("input[name=\"time\"]") as HTMLInputElement;
      if (timeInput) {
        timeInput.value = new Date().toLocaleString("es-VE", { 
          timeZone: "America/Caracas",
          dateStyle: "full",
          timeStyle: "medium"
        });
      }

      // Carga diferida de EmailJS solo en el momento del envío
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", 
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" 
      );

      toast({
        title: "SOLICITUD ENVIADA",
        description: "Hemos recibido su mensaje. El equipo de SYNAI Falcón le contactará pronto.",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "ERROR DE ENVÍO",
        description: "Hubo un problema al procesar su solicitud. Intente nuevamente o use WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="container mx-auto px-4 md:px-6 py-20 text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none text-foreground uppercase">
          CONECTAR <br /> <span className="text-accent italic">SYNAI</span>
        </h1>
        <p className="text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
          Desde el hub tecnológico de Falcón, resolvemos sus desafíos de infraestructura y software.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-start max-w-6xl mb-20">
        <div className="space-y-16">
          <div className="space-y-10">
            <h2 className="text-2xl font-headline font-black tracking-[0.3em] text-foreground uppercase border-l-4 border-accent pl-6">CANALES</h2>
            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 bg-muted/30 hover:bg-primary transition-colors duration-500">
                <div className="bg-background p-4 group-hover:bg-accent transition-colors">
                  <Mail className="h-6 w-6 text-foreground group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">Email</h4>
                  <p className="text-lg font-bold group-hover:text-primary-foreground transition-colors">sistemaia11@gmail.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 p-6 bg-muted/30 hover:bg-primary transition-colors duration-500">
                <div className="bg-background p-4 group-hover:bg-accent transition-colors">
                  <Phone className="h-6 w-6 text-foreground group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">WhatsApp</h4>
                  <p className="text-lg font-bold group-hover:text-primary-foreground transition-colors">+58 424 668 4134</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 p-6 bg-muted/30 hover:bg-primary transition-colors duration-500">
                <div className="bg-background p-4 group-hover:bg-accent transition-colors">
                  <MapPin className="h-6 w-6 text-foreground group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">Sede</h4>
                  <p className="text-lg font-bold group-hover:text-primary-foreground transition-colors">Falcón, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-headline font-black tracking-[0.3em] text-foreground uppercase border-l-4 border-accent pl-6">UBICACIÓN</h2>
            <div className="relative h-[400px] w-full border-2 border-primary overflow-hidden bg-muted group">
              <MapComponent apiKey={GEOAPIFY_API_KEY} mapRef={map} />
              <div className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground p-6 rounded-none shadow-2xl max-w-xs space-y-2 pointer-events-none">
                <p className="font-headline font-black text-accent text-xl">FALCÓN, VZLA</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-secondary-foreground leading-relaxed">
                  Operamos desde el occidente venezolano para el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="rounded-none border-none shadow-soft bg-card overflow-hidden">
          <div className="h-2 bg-primary w-full"></div>
          <CardHeader className="p-10 space-y-4">
            <CardTitle className="text-4xl font-headline font-black text-foreground tracking-tighter">ANÁLISIS TÉCNICO</CardTitle>
            <CardDescription className="text-secondary font-bold text-xs uppercase tracking-widest">Describa su requerimiento para evaluación inmediata.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-0">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="time" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Nombre</label>
                  <Input 
                    name="name" 
                    placeholder="ENTIDAD / PERSONA" 
                    required 
                    className="rounded-none border-border h-12 focus:border-accent focus:ring-0" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Email</label>
                  <Input 
                    name="from_email" 
                    type="email" 
                    placeholder="CORREO@CORREO.COM" 
                    required 
                    className="rounded-none border-border h-12 focus:border-accent focus:ring-0" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Especialidad</label>
                <select 
                  name="specialty" 
                  className="flex h-12 w-full border border-border bg-background px-3 py-2 text-sm font-bold uppercase focus:border-accent focus:outline-none"
                >
                  <option value="WEB">DISEÑO WEB</option>
                  <option value="CHATBOT">CHATBOT WHATSAPP</option>
                  <option value="INVENTARIO">SISTEMA DE INVENTARIO</option>
                  <option value="SOPORTE">SOPORTE TÉCNICO</option>
                  <option value="OTRO">OTRO</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Descripción</label>
                <Textarea 
                  name="message" 
                  placeholder="DETALLES DEL PROYECTO..." 
                  className="min-h-[150px] rounded-none border-border focus:border-accent focus:ring-0" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-16 bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-bold text-lg rounded-none transition-all" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="p-12 border-2 border-primary relative group overflow-hidden bg-muted/10">
          <div className="absolute top-0 right-0 w-20 h-20 bg-accent group-hover:w-full group-hover:h-full transition-all duration-700 -z-10 opacity-10"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:justify-between">
            <div className="flex items-center gap-6">
              <BrainCircuit className="h-16 w-16 text-accent" />
              <div>
                <p className="font-headline text-3xl font-black text-foreground mb-1 uppercase tracking-tighter">INNOVACIÓN FALCÓN</p>
                <p className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">Centro de Operaciones Digitales</p>
              </div>
            </div>
            <div className="text-center md:text-right max-w-md">
              <p className="text-sm font-medium text-secondary leading-relaxed uppercase tracking-widest">
                Redefiniendo el estándar tecnológico desde el occidente venezolano para el mercado global.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
