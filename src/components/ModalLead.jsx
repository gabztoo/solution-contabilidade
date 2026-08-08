import React, { useState } from 'react';

export default function ModalLead({ isOpen, onClose, modalType, onSubmitLead }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    segment: 'servicos',
    need: 'reduzir_impostos'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitLead(formData);
    onClose();
  };

  const getTitle = () => {
    if (modalType === 'proposta') return 'Solicitar Proposta Sob Medida';
    if (modalType === 'simulador') return 'Plano de Redução Tributária';
    return 'Fale com um Especialista';
  };

  const getSubtitle = () => {
    if (modalType === 'proposta') return 'Preencha seus dados para receber um diagnóstico contábil gratuito.';
    if (modalType === 'simulador') return 'Garanta a redução de impostos da sua empresa com nosso time sênior.';
    return 'Preencha os campos abaixo e nosso time contábil entrará em contato em minutos.';
  };

  return (
    <div className="modal-overlay active" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{getTitle()}</h3>
          <p>{getSubtitle()}</p>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar Modal">✕</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="leadName">Nome Completo</label>
              <input 
                type="text" 
                id="leadName" 
                className="form-control" 
                placeholder="Ex: Carlos Eduardo Silva" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="leadPhone">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  id="leadPhone" 
                  className="form-control" 
                  placeholder="(91) 98224-3210" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="leadEmail">E-mail Corporativo</label>
                <input 
                  type="email" 
                  id="leadEmail" 
                  className="form-control" 
                  placeholder="carlos@empresa.com.br" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="leadSegment">Segmento de Atuação</label>
                <select 
                  id="leadSegment" 
                  className="form-control"
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                >
                  <option value="servicos">Prestação de Serviços</option>
                  <option value="comercio">Comércio / Varejo</option>
                  <option value="saude">Saúde / Médicos / Clínicas</option>
                  <option value="tecnologia">Tecnologia & Startups</option>
                  <option value="outro">Outro Segmento</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="leadNeed">Objetivo Principal</label>
                <select 
                  id="leadNeed" 
                  className="form-control"
                  value={formData.need}
                  onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                >
                  <option value="reduzir_impostos">Reduzir Impostos Legalmente</option>
                  <option value="abrir_empresa">Abrir uma Nova Empresa (CNPJ)</option>
                  <option value="trocar_contador">Trocar de Contador com Segurança</option>
                  <option value="regularizar">Regularizar Pendências Fiscais</option>
                  <option value="folha">Gestão de Folha e DP</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              <span>Solicitar Contato Imediato</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
