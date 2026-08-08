import React from 'react';
import { Building2, FileCheck2, UserCheck, TrendingUp, Users2, Briefcase } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'abertura',
      title: 'ABERTURA DE EMPRESA',
      description: 'Menos dor de cabeça e sem burocracia.',
      icon: Building2,
      action: 'Conheça os planos →'
    },
    {
      id: 'cnpj',
      title: 'REGULARIZAÇÃO DE CNPJ',
      description: 'Colocamos sua empresa em conformidade.',
      icon: FileCheck2,
      action: 'Regularizar agora →'
    },
    {
      id: 'irpf',
      title: 'IMPOSTO DE RENDA',
      description: 'IRPF e IRPJ com precisão e agilidade.',
      icon: UserCheck,
      action: 'Fazer declaração →'
    },
    {
      id: 'tributario',
      title: 'PLANEJAMENTO TRIBUTÁRIO',
      description: 'Reduza seus impostos legalmente e melhore seus resultados.',
      icon: TrendingUp,
      action: 'Simular economia →'
    },
    {
      id: 'folha',
      title: 'FOLHA DE PAGAMENTO',
      description: 'Gestão completa da folha, encargos e obrigações trabalhistas.',
      icon: Users2,
      action: 'Conheça o DP →'
    },
    {
      id: 'consultoria',
      title: 'CONSULTORIA CONTÁBIL',
      description: 'Análise, relatórios e apoio para decisões mais seguras e assertivas.',
      icon: Briefcase,
      action: 'Falar com consultor →'
    }
  ];

  return (
    <section className="services-section" id="servicos">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">NOSSOS SERVIÇOS</span>
          <h2 className="section-title">Tudo o que sua empresa precisa para crescer com segurança.</h2>
        </div>

        {/* Services 6-Card Grid */}
        <div className="services-grid">
          {services.map((s) => {
            const IconComponent = s.icon;
            return (
              <article 
                key={s.id} 
                className="service-card" 
                tabIndex={0} 
                role="button" 
                aria-label={s.title}
                onClick={() => onSelectService(s.title)}
              >
                <div className="service-icon-wrapper">
                  <IconComponent size={28} />
                </div>
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <span className="service-action-link">{s.action}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
