import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5591982243210?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Solution%20Contabilidade%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <div className="whatsapp-float">
      <div className="whatsapp-bubble">
        <span className="whatsapp-dot"></span>
        <span>Consultores Online</span>
      </div>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
