import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Ícones de marca inline: lucide-react 1.x não exporta ícones de marcas (Instagram, Linkedin, Facebook).
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-brand">
            <a href="#hero" className="brand-logo" title="Solution Contabilidade e Serviços">
              <img 
                src="/assets/images/logo.png" 
                alt="Solution Contabilidade e Serviços" 
                className="footer-logo-img" 
                width="220" 
                height="78" 
              />
            </a>
            <p>Soluções contábeis personalizadas para empresas que querem crescer com segurança.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div className="footer-column">
            <h4>NAVEGAÇÃO</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Início</a></li>
              <li><a href="#sobre" className="footer-link">Sobre nós</a></li>
              <li><a href="#servicos" className="footer-link">Serviços</a></li>
              <li><a href="#diferenciais" className="footer-link">Soluções por empresa</a></li>
              <li><a href="#depoimentos" className="footer-link">Conteúdos</a></li>
              <li><a href="#contato" className="footer-link">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Serviços */}
          <div className="footer-column">
            <h4>SERVIÇOS</h4>
            <ul className="footer-links">
              <li><a href="#servicos" className="footer-link">Abertura de Empresa</a></li>
              <li><a href="#servicos" className="footer-link">Regularização de CNPJ</a></li>
              <li><a href="#servicos" className="footer-link">Imposto de Renda</a></li>
              <li><a href="#servicos" className="footer-link">Planejamento Tributário</a></li>
              <li><a href="#servicos" className="footer-link">Folha de Pagamento</a></li>
              <li><a href="#servicos" className="footer-link">Consultoria Contábil</a></li>
            </ul>
          </div>

          {/* Column 4: Fale Conosco */}
          <div className="footer-column">
            <h4>FALE CONOSCO</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone size={18} />
                </span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Mail size={18} />
                </span>
                <span>contato@solutioncontabilidade.com.br</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={18} />
                </span>
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo/SP (Atendimento Nacional)</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Clock size={18} />
                </span>
                <span>Seg.–Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 Solution Contabilidade e Serviços. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span style={{ color: '#ef4444' }}>❤</span></p>
        </div>

      </div>
    </footer>
  );
}
