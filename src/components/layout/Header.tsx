
"use client"

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 transition-transform group-hover:rotate-90">
            <Image 
              src="/logo.png?v=1.1" 
              alt="SYNAI Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-headline text-2xl font-black tracking-tighter text-black uppercase">
            SYNAI<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent",
                pathname === link.href ? "text-black border-b-2 border-accent pb-1" : "text-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-none bg-black hover:bg-accent hover:text-black text-white font-bold tracking-widest text-[10px] px-8 transition-all h-10">
            <Link href="/contacto">CONSULTA GRATIS</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-none w-full sm:max-w-md p-10">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-20">
                  <div className="flex items-center gap-2">
                    <Image src="/logo.png?v=1.1" alt="SYNAI" width={32} height={32} />
                    <span className="font-headline text-2xl font-black tracking-tighter uppercase">SYNAI</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-4xl font-headline font-black uppercase tracking-tighter transition-colors",
                          pathname === link.href ? "text-accent" : "text-black hover:text-accent"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pt-10 border-t border-gray-100 space-y-4">
                  <p className="text-xs font-bold text-secondary tracking-widest uppercase">SYNAI Falcón</p>
                  <p className="text-xl font-bold text-black">+58 424 668 4134</p>
                  <Button asChild className="w-full h-14 bg-black text-white font-bold rounded-none">
                    <Link href="/contacto">CONTACTAR AHORA</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
