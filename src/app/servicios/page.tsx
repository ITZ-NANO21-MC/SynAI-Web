
import Image from 'next/image';
import { SERVICIOS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header Minimalista */}
      <section className="bg-white py-32 border-b border-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <div className="w-12 h-1 bg-accent mx-auto mb-4"></div>
          <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none text-black">
            NUESTRAS <br /> <span className="text-accent">SOLUCIONES</span>
          </h1>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
            Estructuras tecnológicas diseñadas para maximizar la productividad y la innovación empresarial desde Falcón.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {SERVICIOS.map((servicio) => {
            const imgData = PlaceHolderImages.find(p => p.id === servicio.imagen);
            return (
              <Card key={servicio.id} id={servicio.id} className="flex flex-col h-full border-none shadow-soft hover:shadow-2xl transition-all duration-500 rounded-none bg-white overflow-hidden group">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={imgData?.imageUrl || ''} 
                    alt={servicio.titulo} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 hover:opacity-100"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-8 left-8 bg-black text-accent px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em]">
                    {servicio.categoria}
                  </div>
                </div>
                
                <CardHeader className="p-10 pb-0">
                  <CardTitle className="text-4xl font-headline font-black text-black leading-none">{servicio.titulo}</CardTitle>
                </CardHeader>

                <CardContent className="p-10 space-y-10 flex-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-accent" />
                      <p className="font-bold text-black uppercase tracking-widest text-xs">
                        {servicio.id === 'technical-support' ? 'REQUISITOS OPERATIVOS' : 'OBJETIVOS ESTRATÉGICOS'}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {servicio.detalles.map((detalle, i) => (
                        <li key={i} className="flex items-start gap-4 group/li">
                          <div className="mt-1.5 w-2 h-2 bg-accent group-hover/li:w-4 transition-all shrink-0"></div>
                          <span className="text-secondary font-semibold text-lg leading-tight group-hover/li:text-black transition-colors">{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-10 border-t border-gray-100 space-y-4">
                    <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">CANAL DIRECTO</p>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-black leading-none tracking-tighter">
                        {servicio.precio}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-10 pt-0">
                  <Button asChild className="w-full h-16 bg-black hover:bg-accent hover:text-black text-white font-bold text-lg rounded-none transition-all duration-300">
                    <a href="https://wa.me/584246684134" target="_blank">AGENDAR AHORA</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Especialización */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-center mb-24 tracking-tighter">ESPECIALIZACIÓN <br /> <span className="text-accent">TECNOLÓGICA</span></h2>
          <div className="grid md:grid-cols-2 gap-0 border border-white/10 max-w-5xl mx-auto">
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-headline font-bold mb-6 text-accent">SALUD DIGITAL</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Implementación de arquitecturas para telemedicina y análisis de datos clínicos asistidos por modelos de IA para diagnósticos preventivos.
              </p>
            </div>
            <div className="p-12 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-headline font-bold mb-6 text-accent">AUTOMATIZACIÓN</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Despliegue de chatbots transaccionales inteligentes y flujos de trabajo automatizados que integran CRM, inventarios y facturación en un ecosistema unificado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
