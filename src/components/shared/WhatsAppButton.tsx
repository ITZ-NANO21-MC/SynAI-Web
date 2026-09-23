"use client"

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Botón flotante para contacto rápido vía WhatsApp
 */
export default function WhatsAppButton() {
  const phoneNumber = "584246684134";
  const message = "Hola SynAI! Me gustaría solicitar mi demo gratis de diseño web, chatbot, inventario o soporte técnico.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg animate-bounce transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="h-8 w-8 text-white fill-white/10" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>
      </a>
    </div>
  );
}
