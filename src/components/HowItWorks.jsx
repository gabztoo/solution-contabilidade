import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'ENTENDEMOS SUA NECESSIDADE',
      desc: 'Conversamos com você para entender sua realidade, seus desafios e objetivos.'
    },
    {
      num: 2,
      title: 'ORGANIZAMOS SUA OPERAÇÃO CONTÁBIL',
      desc: 'Criamos um plano personalizado e colocamos tudo em ordem com clareza e eficiência.'
    },
    {
      num: 3,
      title: 'ACOMPANHAMOS SEU CRESCIMENTO',
      desc: 'Monitoramos resultados, oferecemos orientações e estamos sempre ao seu lado para evoluir juntos.'
    }
  ];

  return (
    <section className="how-it-works-section" id="metodologia">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">COMO FUNCIONA</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="step-card">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
