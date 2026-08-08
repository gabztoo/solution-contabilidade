import React from 'react';
import { Award, Users, Target } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="hero-trust-bar" id="sobre">
      <div className="container">
        <div className="trust-cards-grid">
          
          {/* Pillar 1 */}
          <div className="trust-card">
            <div className="trust-card-icon">
              <Award size={28} />
            </div>
            <div className="trust-card-content">
              <h3>+19 ANOS DE EXPERIÊNCIA</h3>
              <p>Tradição e resultado que geram confiança.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="trust-card">
            <div className="trust-card-icon">
              <Users size={28} />
            </div>
            <div className="trust-card-content">
              <h3>ATENDIMENTO HUMANIZADO</h3>
              <p>Proximidade, escuta ativa e soluções sob medida.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="trust-card">
            <div className="trust-card-icon">
              <Target size={28} />
            </div>
            <div className="trust-card-content">
              <h3>SOLUÇÕES PERSONALIZADAS</h3>
              <p>Estratégias contábeis pensadas para o seu negócio.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
