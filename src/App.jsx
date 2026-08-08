import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Services from './components/Services.jsx';
import TaxSimulator from './components/TaxSimulator.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';
import ModalLead from './components/ModalLead.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('especialista');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleOpenModal = (type = 'especialista') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLeadSubmit = (data) => {
    setToastMessage(`Obrigado, ${data.name || 'Cliente'}! Recebemos sua solicitação e entraremos em contato.`);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  const handleSelectService = (serviceName) => {
    setModalType('proposta');
    setModalOpen(true);
  };

  return (
    <div className="app-container">
      {/* Header & Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <TrustBar />
        <Services onSelectService={handleSelectService} />
        <TaxSimulator onOpenModal={handleOpenModal} />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CtaBanner onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating Features */}
      <WhatsAppFloat />
      <ModalLead 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        modalType={modalType} 
        onSubmitLead={handleLeadSubmit} 
      />
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
