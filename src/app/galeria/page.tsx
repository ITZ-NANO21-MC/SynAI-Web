import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";
import { generateStaticMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const keywords = ["galería", "estudio", "proyectos", "visual", "SYNAI", "Falcón", "desarrollo software", "IA"];
  const content = "Galería visual de SYNAI - Imágenes del estudio, proyectos y entorno de trabajo en Falcón, Venezuela.";

  return generateStaticMetadata(
    "Galería SYNAI - Visual Studio y Proyectos",
    "Explora nuestra galería de imágenes: estudio de trabajo, proyectos de IA, desarrollo de software y el entorno tecnológico en Falcón.",
    "portfolio item"
  );
}

export default function GaleriaPage() {
  const galleryImages = [
    ...PlaceHolderImages.filter(img => img.id.startsWith("service") || img.id.startsWith("project")),
    ...PlaceHolderImages.filter(img => img.id.startsWith("studio"))
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6 py-12 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Galería Visual</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Un vistazo a nuestro entorno de trabajo, herramientas y la estética que define a Synapse Studio.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <Card key={idx} className="break-inside-avoid border-none shadow-none group relative overflow-hidden rounded-2xl cursor-pointer">
              <CardContent className="p-0">
                <Image 
                  src={img.imageUrl} 
                  alt={img.description} 
                  width={800} 
                  height={idx % 2 === 0 ? 1000 : 600} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <ZoomIn className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur-md p-3 rounded-xl">
                  <p className="text-sm font-bold text-primary line-clamp-1">{img.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
