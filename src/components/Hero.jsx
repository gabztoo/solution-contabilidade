import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Hero Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              CONTABILIDADE PERSONALIZADA PARA EMPRESAS QUE QUEREM <span className="highlight-gold">CRESCER</span> COM SEGURANÇA.
            </h1>
            <p className="hero-description">
              Atendimento humanizado, soluções contábeis personalizadas e mais de <span className="highlight-years">19 anos</span> impulsionando empresas ao crescimento.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onOpenModal('especialista')}>
                <MessageCircle size={18} className="btn-icon" />
                <span>Fale com um especialista</span>
              </button>
              <a href="#servicos" className="btn btn-secondary">
                <span>Saiba mais</span>
              </a>
            </div>
          </div>

          {/* Right Hero Media */}
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img 
                src="/assets/images/hero.jpg" 
                alt="Equipe de contadores da Solution Contabilidade em reunião executiva" 
                width="600" 
                height="480" 
              />
              <div className="hero-image-gradient"></div>
              <div className="hero-floating-badge">
                <div className="badge-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="badge-text">
                  <h4>100% em Conformidade</h4>
                  <p>Gestão Fiscal & Tributária Blindada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
