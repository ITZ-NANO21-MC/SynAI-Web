
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png?v=1.1" 
              alt="SYNAI" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="font-headline text-2xl font-black tracking-tighter uppercase">
              SYNAI<span className="text-accent">.</span>
            </span>
          </Link>
          <p className="text-secondary font-medium text-sm leading-relaxed max-w-xs">
            Arquitectura de software y consultoría estratégica en Inteligencia Artificial. Eficiencia tecnológica desde el occidente venezolano.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/profile.php?id=61574043867042" target="_blank" className="text-secondary hover:text-black transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="https://www.youtube.com/@SYNAI-k2p" target="_blank" className="text-secondary hover:text-black transition-colors"><Youtube className="h-5 w-5" /></Link>
            <Link href="https://www.instagram.com/synai.ve?igsh=ZGUzMzM3NWJiOQ==" target="_blank" className="text-secondary hover:text-black transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="https://github.com/ITZ-NANO21-MC" target="_blank" className="text-secondary hover:text-black transition-colors"><Github className="h-5 w-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-xs font-black mb-8 text-black tracking-[0.3em] uppercase">Mapa</h4>
          <ul className="space-y-4 text-sm font-bold text-secondary uppercase tracking-widest">
            <li><Link href="/" className="hover:text-black hover:translate-x-1 transition-all inline-block">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-black hover:translate-x-1 transition-all inline-block">Servicios</Link></li>
            <li><Link href="/portafolio" className="hover:text-black hover:translate-x-1 transition-all inline-block">Proyectos</Link></li>
            <li><Link href="/contacto" className="hover:text-black hover:translate-x-1 transition-all inline-block">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xs font-black mb-8 text-black tracking-[0.3em] uppercase">Especialidad</h4>
          <ul className="space-y-4 text-sm font-bold text-secondary uppercase tracking-widest">
            <li>Salud Digital</li>
            <li>Telemedicina</li>
            <li>Automatización</li>
            <li>Chatbots Inteligentes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xs font-black mb-8 text-black tracking-[0.3em] uppercase">Ubicación</h4>
          <ul className="space-y-6 text-sm font-bold text-black uppercase tracking-widest">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span>Falcón, Venezuela</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span>+58 424 668 4134</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span className="lowercase">sistemaia11@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-secondary tracking-[0.4em] uppercase">&copy; {currentYear} SYNAI. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <div className="w-8 h-1 bg-accent"></div>
          <div className="w-8 h-1 bg-secondary"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>
      </div>
    </footer>
  );
}
