"use client"

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:scale-110 group-hover:shadow-neon-primary transition-all">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-headline text-3xl font-bold tracking-tighter text-primary">
            SYNAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-foreground/80"
              )}
            >
              {link.label}
              {pathname === link.href && <div className="h-0.5 w-full bg-accent mt-0.5 rounded-full" />}
            </Link>
          ))}
          <Button asChild className="font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-primary">
            <Link href="/contacto">Consulta Gratis</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10">
              <div className="flex flex-col gap-6 mt-10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <span className="font-headline text-3xl font-bold text-primary">SYNAI</span>
                </div>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xl font-headline font-semibold transition-colors py-2 border-b border-white/5",
                      pathname === link.href ? "text-accent" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 bg-primary text-primary-foreground shadow-neon-primary">
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}