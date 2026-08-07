/* ==========================================================================
   SOLUTION CONTABILIDADE E SERVIÇOS - MAIN JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  
  if (mobileToggle && mobileNavDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
      const isOpen = mobileNavDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking links
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close others
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive);
      });
    }
  });

  // 3. Testimonials Carousel
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.carousel-dot');
  let activeIndex = 0;

  function updateTestimonialDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      activeIndex = index;
      updateTestimonialDots(activeIndex);
      
      // On mobile or small screens, scroll smoothly to the card
      if (testimonials[index]) {
        testimonials[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  });

  // 4. Modal System (Proposta & Especialista & Simulador)
  const modalOverlay = document.getElementById('contactModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalForm = document.getElementById('leadCaptureForm');

  const openModalButtons = document.querySelectorAll('[data-open-modal]');
  
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalType = btn.getAttribute('data-open-modal');
      
      if (modalType === 'proposta') {
        modalTitle.textContent = 'Solicitar Proposta Sob Medida';
        modalSubtitle.textContent = 'Preencha seus dados para receber um diagnóstico contábil gratuito e personalizado.';
      } else if (modalType === 'simulador') {
        modalTitle.textContent = 'Simulador de Redução Tributária';
        modalSubtitle.textContent = 'Calcule quanto sua empresa pode economizar mensalmente com a Solution.';
      } else {
        modalTitle.textContent = 'Fale com um Especialista';
        modalSubtitle.textContent = 'Nossos contadores estão prontos para simplificar a gestão da sua empresa.';
      }

      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. Toast Notification System
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message, duration = 4000) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, duration);
  }

  // 6. Form Submission Simulation
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || 'Cliente';
      const phone = document.getElementById('leadPhone')?.value || '';
      
      closeModal();
      modalForm.reset();

      showToast(`Obrigado, ${name}! Recebemos seu contato e nossa equipe falará com você no WhatsApp em breve.`);
    });
  }

  // 7. Interactive Tax Calculator (Inside page if triggered)
  const calcForm = document.getElementById('taxCalcForm');
  const calcResult = document.getElementById('calcResult');
  
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const revenue = parseFloat(document.getElementById('monthlyRevenue')?.value || '0');
      const segment = document.getElementById('businessSegment')?.value || 'servicos';
      
      let estimatedTaxRateCurrent = 0.15;
      let estimatedTaxRateOptimized = 0.09;

      if (segment === 'comercio') {
        estimatedTaxRateCurrent = 0.11;
        estimatedTaxRateOptimized = 0.065;
      } else if (segment === 'saude') {
        estimatedTaxRateCurrent = 0.1633;
        estimatedTaxRateOptimized = 0.085;
      }

      const currentMonthlyTax = revenue * estimatedTaxRateCurrent;
      const optimizedMonthlyTax = revenue * estimatedTaxRateOptimized;
      const monthlySavings = currentMonthlyTax - optimizedMonthlyTax;
      const annualSavings = monthlySavings * 12;

      if (calcResult) {
        calcResult.innerHTML = `
          <div style="background: rgba(245, 158, 11, 0.12); border: 1.5px solid var(--color-accent); border-radius: 12px; padding: 20px; text-align: center; margin-top: 20px;">
            <p style="font-size: 0.875rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Economia Anual Estimada</p>
            <p style="font-size: 2rem; font-weight: 900; color: #0b1329; margin: 6px 0;">R$ ${annualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p style="font-size: 0.875rem; color: #334155;">Redução de até <strong>${((1 - estimatedTaxRateOptimized/estimatedTaxRateCurrent)*100).toFixed(0)}%</strong> no valor de impostos mensais!</p>
          </div>
        `;
      }
    });
  }

  // 8. Service Cards Click -> Open Modal with preselected service
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.querySelector('.service-content h3')?.textContent || 'Serviço';
      modalTitle.textContent = `Consultoria: ${serviceName}`;
      modalSubtitle.textContent = `Descubra como estruturar seu negócio com excelência em ${serviceName.toLowerCase()}.`;
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // 9. Smooth Scroll with Sticky Header Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 10. WhatsApp Direct Link builder
  const whatsappButtons = document.querySelectorAll('.whatsapp-direct-link');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Default direct link
      const text = encodeURIComponent("Olá! Vim pelo site da Solution Contabilidade e gostaria de falar com um especialista.");
      btn.href = `https://wa.me/5591982243210?text=${text}`;
    });
  });
});
