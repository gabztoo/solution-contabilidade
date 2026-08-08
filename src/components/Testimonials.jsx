import React, { useState } from 'react';

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: 'A Solution trouxe organização e clareza para nossa rotina financeira, economizando tempo e reduzindo riscos.',
      name: 'Juliana M.',
      role: 'Diretora de Marketing',
      avatar: '/assets/images/juliana.jpg'
    },
    {
      id: 2,
      quote: 'Atendimento próximo e soluções inteligentes que fazem toda a diferença no dia a dia da empresa.',
      name: 'Ricardo T.',
      role: 'CEO',
      avatar: '/assets/images/ricardo.jpg'
    },
    {
      id: 3,
      quote: 'Parceria de confiança, feita com competência, agilidade e compreensão do nosso negócio.',
      name: 'Fernanda L.',
      role: 'Empresária',
      avatar: '/assets/images/fernanda.jpg'
    }
  ];

  return (
    <section className="testimonials-section" id="depoimentos">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">O QUE NOSSOS CLIENTES DIZEM</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div className="testimonial-quote-icon">“</div>
                <p className="testimonial-quote-text">{t.quote}</p>
              </div>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{t.name}</span>
                  <span className="testimonial-author-role">{t.role}</span>
                </div>
                <div className="testimonial-avatar">
                  <img src={t.avatar} alt={`Foto de ${t.name}, ${t.role}`} width="64" height="64" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-dots" role="tablist" aria-label="Controles dos Depoimentos">
          {[0, 1, 2, 3].map((idx) => (
            <button 
              key={idx}
              className={`carousel-dot ${activeDot === idx ? 'active' : ''}`}
              aria-label={`Ver depoimento ${idx + 1}`}
              role="tab"
              aria-selected={activeDot === idx}
              onClick={() => setActiveDot(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
