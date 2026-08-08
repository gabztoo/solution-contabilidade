import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="cta-banner-section" id="contato">
      <div className="container">
        <div className="cta-banner-grid">
          
          {/* Left Banner Content */}
          <div className="cta-banner-content">
            <h2>VAMOS CONVERSAR SOBRE O FUTURO DA SUA <span className="highlight-gold">EMPRESA?</span></h2>
            <p>Fale com um especialista e descubra como podemos simplificar sua gestão e impulsionar seus resultados.</p>
            
            <div className="cta-banner-actions">
              <button className="btn btn-primary" onClick={() => onOpenModal('especialista')}>
                <MessageCircle size={18} className="btn-icon" />
                <span>Fale com um especialista</span>
              </button>
              <button className="btn btn-outline-dark" onClick={() => onOpenModal('proposta')}>
                <span>Quero uma proposta</span>
              </button>
            </div>
          </div>

          {/* Right Banner Photo */}
          <div className="cta-banner-media">
            <img 
              src="/assets/images/cta.jpg" 
              alt="Consultoria e planejamento financeiro entre executivos" 
              width="450" 
              height="300" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
