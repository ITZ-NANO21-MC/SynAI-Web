"use client"

import * as React from 'react';
import { Mail, Phone, MapPin, Send, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "SOLICITUD PROCESADA",
        description: "Nuestro equipo técnico analizará su caso en Falcón.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
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

      <section className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-start max-w-6xl">
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Nombre</label>
                  <Input placeholder="ENTIDAD / PERSONA" required className="rounded-none border-gray-200 h-12 focus:border-black focus:ring-0" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Email</label>
                  <Input type="email" placeholder="CORREO@CORREO.COM" required className="rounded-none border-gray-200 h-12 focus:border-black focus:ring-0" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Especialidad</label>
                <select className="flex h-12 w-full border border-gray-200 bg-white px-3 py-2 text-sm font-bold uppercase focus:border-black focus:outline-none">
                  <option>CONSULTORÍA IA</option>
                  <option>SOPORTE TÉCNICO</option>
                  <option>AUTOMATIZACIÓN</option>
                  <option>SOFTWARE A MEDIDA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Descripción</label>
                <Textarea placeholder="DETALLES DEL PROYECTO..." className="min-h-[150px] rounded-none border-gray-200 focus:border-black focus:ring-0" required />
              </div>
              <Button type="submit" className="w-full h-16 bg-black hover:bg-accent hover:text-black text-white font-bold text-lg rounded-none transition-all" disabled={isSubmitting}>
                {isSubmitting ? "PROCESANDO..." : "ENVIAR SOLICITUD"} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
