import Link from 'next/link';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-headline text-3xl font-bold tracking-tighter">
              SYNAI
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Consultoría experta en Inteligencia Artificial y desarrollo de software a medida. Impulsamos la innovación tecnológica de tu empresa.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">Navegación</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="/portafolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">Especialidades</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>Soluciones de IA Generativa</li>
            <li>Machine Learning aplicado</li>
            <li>Software Escalable</li>
            <li>Automatización de Procesos</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">Contacto</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Sede Tecnológica, Distrio de Innovación</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+34 900 SYNAI IA</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>info@synai.tech</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-primary/10 text-center text-xs text-muted-foreground">
        <p>&copy; {currentYear} SYNAI. Consultoría en Inteligencia Artificial. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}