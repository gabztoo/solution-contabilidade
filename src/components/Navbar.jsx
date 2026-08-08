import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header" id="header">
      <div className="container">
        <nav className="navbar" aria-label="Navegação Principal">
          
          {/* Official Logo */}
          <a href="#hero" className="brand-logo" title="Solution Contabilidade e Serviços">
            <img 
              src="/assets/images/logo.png" 
              alt="Solution Contabilidade e Serviços" 
              className="site-logo-img" 
              width="220" 
              height="78"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu" role="menubar">
            <li role="none"><a href="#hero" className="nav-link active" role="menuitem">Início</a></li>
            <li role="none"><a href="#sobre" className="nav-link" role="menuitem">Sobre nós</a></li>
            <li role="none" className="nav-item-dropdown">
              <a href="#servicos" className="nav-link" role="menuitem" aria-haspopup="true">
                Serviços
                <ChevronDown size={14} />
              </a>
              <div className="dropdown-menu" role="menu">
                <a href="#servicos" className="dropdown-item" role="menuitem">Abertura de Empresa</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Regularização de CNPJ</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Planejamento Tributário</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Folha de Pagamento</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Consultoria Contábil</a>
              </div>
            </li>
            <li role="none" className="nav-item-dropdown">
              <a href="#diferenciais" className="nav-link" role="menuitem" aria-haspopup="true">
                Soluções por empresa
                <ChevronDown size={14} />
              </a>
              <div className="dropdown-menu" role="menu">
                <a href="#servicos" className="dropdown-item" role="menuitem">Prestadores de Serviços</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Comércio & Varejo</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Clínicas e Profissionais da Saúde</a>
                <a href="#servicos" className="dropdown-item" role="menuitem">Startups & Tecnologia</a>
              </div>
            </li>
            <li role="none"><a href="#depoimentos" className="nav-link" role="menuitem">Conteúdos</a></li>
            <li role="none"><a href="#contato" className="nav-link" role="menuitem">Contato</a></li>
          </ul>

          {/* Right Header Action Button */}
          <div className="header-cta">
            <button 
              className="btn btn-primary" 
              onClick={() => onOpenModal('especialista')} 
              title="Falar com especialista"
            >
              <MessageCircle size={18} className="btn-icon" />
              <span>Fale com um especialista</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Abrir Menu de Navegação" 
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`} id="mobileNavDrawer">
        <a href="#hero" className="nav-link" onClick={() => setMobileOpen(false)}>Início</a>
        <a href="#sobre" className="nav-link" onClick={() => setMobileOpen(false)}>Sobre nós</a>
        <a href="#servicos" className="nav-link" onClick={() => setMobileOpen(false)}>Serviços</a>
        <a href="#diferenciais" className="nav-link" onClick={() => setMobileOpen(false)}>Soluções por empresa</a>
        <a href="#depoimentos" className="nav-link" onClick={() => setMobileOpen(false)}>Conteúdos</a>
        <a href="#contato" className="nav-link" onClick={() => setMobileOpen(false)}>Contato</a>
        <button 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '10px' }} 
          onClick={() => { setMobileOpen(false); onOpenModal('especialista'); }}
        >
          Fale com um especialista
        </button>
      </div>
    </header>
  );
}
