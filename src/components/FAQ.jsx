import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Minha empresa é pequena. Preciso de contabilidade?',
      a: 'Sim! Toda empresa legalmente constituída no Brasil necessita de um responsável técnico contábil. Além do cumprimento legal de obrigações fiscais e tributárias, uma boa contabilidade ajuda sua empresa a economizar impostos e planejar seu crescimento com total segurança.'
    },
    {
      q: 'Como funciona o planejamento tributário?',
      a: 'O planejamento tributário é uma análise técnica detalhada da sua atividade e faturamento para escolher o regime tributário mais vantajoso (Simples Nacional, Lucro Presumido ou Lucro Real). Nosso time estuda alternativas legais de elisão fiscal para reduzir a carga de impostos pagos pela sua empresa.'
    },
    {
      q: 'Quais documentos são necessários para abrir uma empresa?',
      a: 'Geralmente são necessários: RG e CPF dos sócios, comprovante de residência atualizado, certidão de casamento (se houver), comprovante do endereço onde a empresa funcionará (IPTU) e definição das atividades exercidas (CNAEs). Cuidamos de todo o trâmite na Junta Comercial, Receita Federal e Prefeitura.'
    },
    {
      q: 'Como fazer a troca de contador para a Solution?',
      a: 'A migração é 100% segura e simples! Nossa equipe gerencia a solicitação do termo de transferência contábil, recebimento dos livros fiscais, cadastros e documentação junto ao contador anterior, sem que sua rotina operacional seja impactada.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          
          {/* Left: Accordion list */}
          <div className="faq-content">
            <h2 className="faq-title">DÚVIDAS FREQUENTES</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                    <button 
                      className="faq-question" 
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-question-content">
                        <span className="faq-icon-bullet">
                          <HelpCircle size={18} />
                        </span>
                        <span>{faq.q}</span>
                      </div>
                      <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: FAQ Realistic Media */}
          <div className="faq-media">
            <img 
              src="/assets/images/faq.jpg" 
              alt="Mãos usando calculadora profissional sobre demonstrativos financeiros e relatórios contábeis" 
              width="550" 
              height="420" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
