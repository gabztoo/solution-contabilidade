import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle } from 'lucide-react';

export default function TaxSimulator({ onOpenModal }) {
  const [revenue, setRevenue] = useState(30000);
  const [segment, setSegment] = useState('servicos');

  // Multipliers based on average Brazilian tax regimes
  const rates = {
    servicos: { current: 0.155, optimized: 0.085 },
    comercio: { current: 0.110, optimized: 0.065 },
    saude: { current: 0.1633, optimized: 0.080 },
    tecnologia: { current: 0.155, optimized: 0.060 }
  };

  const currentRate = rates[segment]?.current || 0.15;
  const optimizedRate = rates[segment]?.optimized || 0.08;

  const currentMonthlyTax = revenue * currentRate;
  const optimizedMonthlyTax = revenue * optimizedRate;
  const monthlySavings = currentMonthlyTax - optimizedMonthlyTax;
  const annualSavings = monthlySavings * 12;
  const percentageSavings = ((1 - optimizedRate / currentRate) * 100).toFixed(0);

  const formattedAnnualSavings = annualSavings.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });

  return (
    <section className="simulator-section" id="simulador">
      <div className="container">
        <div className="simulator-card">
          
          {/* Left Inputs */}
          <div className="simulator-left">
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>
              SIMULADOR TRIBUTÁRIO GRATUITO
            </span>
            <h3>Descubra quanto sua empresa pode economizar</h3>
            <p>
              Simule a redução tributária legal com o planejamento contábil estratégico da Solution.
            </p>

            <div className="simulator-field">
              <label htmlFor="simSegment">Seu Segmento:</label>
              <select 
                id="simSegment" 
                value={segment} 
                onChange={(e) => setSegment(e.target.value)}
              >
                <option value="servicos">Prestadores de Serviços em Geral</option>
                <option value="comercio">Comércio & Varejo (ICMS/Simples)</option>
                <option value="saude">Médicos, Clínicas e Saúde (Equiparação)</option>
                <option value="tecnologia">Tecnologia, Startups & TI (Fator R)</option>
              </select>
            </div>

            <div className="simulator-field">
              <label htmlFor="simRevenue">
                Faturamento Mensal Estimado: <strong>R$ {revenue.toLocaleString('pt-BR')}</strong>
              </label>
              <input 
                type="range" 
                id="simRevenue" 
                min="5000" 
                max="200000" 
                step="5000" 
                value={revenue} 
                onChange={(e) => setRevenue(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--color-accent)' }}
              />
            </div>
          </div>

          {/* Right Live Results */}
          <div className="simulator-right">
            <div className="simulator-result-box">
              <span className="simulator-result-badge">
                <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Economia Anual Estimada
              </span>
              <div className="simulator-savings-value">{formattedAnnualSavings}</div>
              <p className="simulator-savings-sub">
                Redução de até <strong>{percentageSavings}%</strong> na carga tributária com compliance total!
              </p>

              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => onOpenModal('simulador')}
              >
                <MessageCircle size={18} className="btn-icon" />
                <span>Garantir esta economia</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
