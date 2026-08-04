"use client"

import * as React from 'react';
import { Mail, Phone, MapPin, Send, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import maplibregl from 'maplibre-gl';

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<maplibregl.Map | null>(null);

  // Configuración de Geoapify
  const GEOAPIFY_API_KEY = "1e565ab74abb41d69d9e03ce4d723161";

  React.useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?apiKey=${GEOAPIFY_API_KEY}`,
      center: [-69.6734, 11.4116], // Coordenadas de Coro, Falcón
      zoom: 13,
      attributionControl: false
    });

    // Añadir controles de navegación (Zoom y Rotación)
    map.current.addControl(new maplibregl.NavigationControl({
      showCompass: true,
      showZoom: true
    }), 'top-right');

    // Marcador personalizado con color cian de SYNAI
    new maplibregl.Marker({ color: "#00F2FF" })
      .setLngLat([-69.6734, 11.4116])
      .addTo(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Seteamos la hora actual en el campo oculto antes de enviar
      const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement;
      if (timeInput) {
        timeInput.value = new Date().toLocaleString('es-VE', { 
          timeZone: 'America/Caracas',
          dateStyle: 'full',
          timeStyle: 'medium'
        });
      }

      await emailjs.sendForm(
        'service_3t33mbv', // EmailJS Service ID
        'template_0hj810h', // EmailJS Template ID
        formRef.current,
        'BGoE2TRMNSeEjfLR-' // EmailJS Public Key
      );

      toast({
        title: "SOLICITUD ENVIADA",
        description: "Hemos recibido su mensaje. El equipo de SYNAI Falcón le contactará pronto.",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="container mx-auto px-4 md:px-6 py-20 text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none text-black uppercase">
          CONECTAR <br /> <span className="text-accent italic">SYNAI</span>
        </h1>
        <p className="text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
          Desde el hub tecnológico de Falcón, resolvemos sus desafíos de infraestructura y software.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-start max-w-6xl mb-20">
        <div className="space-y-16">
          <div className="space-y-10">
            <h2 className="text-2xl font-headline font-black tracking-[0.3em] text-black uppercase border-l-4 border-accent pl-6">CANALES</h2>
            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 bg-gray-50 hover:bg-black transition-colors duration-500">
                <div className="bg-white p-4 group-hover:bg-accent transition-colors">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">Email</h4>
                  <p className="text-lg font-bold group-hover:text-white transition-colors">sistemaia11@gmail.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 p-6 bg-gray-50 hover:bg-black transition-colors duration-500">
                <div className="bg-white p-4 group-hover:bg-accent transition-colors">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">WhatsApp</h4>
                  <p className="text-lg font-bold group-hover:text-white transition-colors">+58 424 668 4134</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 p-6 bg-gray-50 hover:bg-black transition-colors duration-500">
                <div className="bg-white p-4 group-hover:bg-accent transition-colors">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest text-secondary group-hover:text-accent/80 transition-colors uppercase">Sede</h4>
                  <p className="text-lg font-bold group-hover:text-white transition-colors">Falcón, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border-2 border-black relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent group-hover:w-full group-hover:h-full transition-all duration-700 -z-10 opacity-10"></div>
            <BrainCircuit className="h-12 w-12 text-accent mb-6" />
            <p className="font-headline text-2xl font-black text-black mb-2">INNOVACIÓN FALCÓN</p>
            <p className="text-secondary font-medium uppercase tracking-widest text-xs">Centro de Operaciones Digitales</p>
          </div>
        </div>

        <Card className="rounded-none border-none shadow-soft bg-white overflow-hidden">
          <div className="h-2 bg-black w-full"></div>
          <CardHeader className="p-10 space-y-4">
            <CardTitle className="text-4xl font-headline font-black text-black tracking-tighter">ANÁLISIS TÉCNICO</CardTitle>
            <CardDescription className="text-secondary font-bold text-xs uppercase tracking-widest">Describa su requerimiento para evaluación inmediata.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-0">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Campo oculto para la variable {{time}} de la plantilla */}
              <input type="hidden" name="time" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Nombre</label>
                  <Input 
                    name="name" 
                    placeholder="ENTIDAD / PERSONA" 
                    required 
                    className="rounded-none border-gray-200 h-12 focus:border-black focus:ring-0" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Email</label>
                  <Input 
                    name="from_email" 
                    type="email" 
                    placeholder="CORREO@CORREO.COM" 
                    required 
                    className="rounded-none border-gray-200 h-12 focus:border-black focus:ring-0" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Especialidad</label>
                <select 
                  name="specialty" 
                  className="flex h-12 w-full border border-gray-200 bg-white px-3 py-2 text-sm font-bold uppercase focus:border-black focus:outline-none"
                >
                  <option value="IA">CONSULTORÍA IA</option>
                  <option value="SOPORTE">SOPORTE TÉCNICO</option>
                  <option value="AUTOMATIZACION">AUTOMATIZACIÓN</option>
                  <option value="SOFTWARE">SOFTWARE A MEDIDA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Descripción</label>
                <Textarea 
                  name="message" 
                  placeholder="DETALLES DEL PROYECTO..." 
                  className="min-h-[150px] rounded-none border-gray-200 focus:border-black focus:ring-0" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-16 bg-black hover:bg-accent hover:text-black text-white font-bold text-lg rounded-none transition-all" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Sección del Mapa */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-2xl font-headline font-black tracking-[0.3em] text-black uppercase border-l-4 border-accent pl-6">UBICACIÓN ESTRATÉGICA</h2>
          <div className="relative h-[450px] w-full border-2 border-black overflow-hidden bg-gray-100 group">
            <div ref={mapContainer} className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-6 left-6 z-10 bg-black text-white p-6 rounded-none shadow-2xl max-w-xs space-y-2 pointer-events-none">
              <p className="font-headline font-black text-accent text-xl">FALCÓN, VZLA</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 leading-relaxed">
                Operamos desde el núcleo industrial y tecnológico del occidente venezolano para el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
