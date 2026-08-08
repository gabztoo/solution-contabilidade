import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';

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
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <Facebook size={18} />
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
