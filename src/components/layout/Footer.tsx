import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="SYNAI Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="font-headline text-3xl font-bold tracking-tighter">
              SYNAI
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Sinergia e Inteligencia. Empresa emergente de consultoría en IA y desarrollo de software personalizado desde Falcón, Venezuela.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61574043867042" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="https://www.youtube.com/@SYNAI-k2p" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></Link>
            <Link href="https://www.instagram.com/synai.ve?igsh=ZGUzMzM3NWJiOQ==" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="https://github.com/ITZ-NANO21-MC" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">Mapa del Sitio</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios Principales</Link></li>
            <li><Link href="/portafolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">Soluciones</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>Automatización Empresarial</li>
            <li>Salud Digital & Telemedicina</li>
            <li>Chatbots Transaccionales</li>
            <li>Software SaaS Escalable</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-primary">SYNAI Falcón</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Falcón, Venezuela</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+58 424 668 4134</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>sistemaia11@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-primary/10 text-center text-xs text-muted-foreground">
        <p>&copy; {currentYear} SYNAI. Innovación desde Falcón para el mundo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
