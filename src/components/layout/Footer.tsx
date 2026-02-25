import Link from 'next/link';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Componente Footer con enlaces y redes sociales
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Información de la Marca */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent" />
            <span className="font-headline text-2xl font-bold tracking-tighter">
              Synapse Studio
            </span>
          </Link>
          <p className="text-primary-foreground/70 text-sm max-w-xs">
            Transformando visiones digitales en experiencias excepcionales. Expertos en desarrollo, diseño y estrategia.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="font-headline text-lg font-bold mb-6">Navegación</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
            <li><Link href="/portafolio" className="hover:text-accent transition-colors">Portafolio</Link></li>
            <li><Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Servicios Populares */}
        <div>
          <h4 className="font-headline text-lg font-bold mb-6">Servicios</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li>Desarrollo Web Next.js</li>
            <li>Identidad de Marca</li>
            <li>Marketing de Contenidos</li>
            <li>Apps Móviles Híbridas</li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div>
          <h4 className="font-headline text-lg font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span>Av. de la Innovación 123, Ciudad Tecnológica</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span>+34 900 123 456</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span>hola@synapsestudio.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        <p>&copy; {currentYear} Synapse Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}