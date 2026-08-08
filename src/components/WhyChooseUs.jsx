import React from 'react';
import { Eye, Shield, FileText, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    {
      title: 'CLAREZA',
      desc: 'Informações claras e relatórios objetivos para você decidir com confiança.',
      icon: Eye
    },
    {
      title: 'SEGURANÇA',
      desc: 'Processos rigorosos para proteger sua empresa e evitar riscos fiscais.',
      icon: Shield
    },
    {
      title: 'CONFORMIDADE',
      desc: 'Cumprimos todas as obrigações com precisão e responsabilidade.',
      icon: FileText
    },
    {
      title: 'CRESCIMENTO',
      desc: 'Mais que contabilidade: parceria estratégica para acelerar resultados.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="why-us-section" id="diferenciais">
      <div className="container">
        
        <div className="why-us-header">
          <h2>POR QUE ESCOLHER A <span className="highlight-gold">SOLUTION?</span></h2>
        </div>

        <div className="why-us-grid">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="why-us-item">
                <div className="why-us-icon">
                  <IconComp size={32} />
                </div>
                <div className="why-us-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
