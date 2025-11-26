'use client'

import { FormEvent } from 'react'
import { CheckCircle } from 'lucide-react'

export default function FormSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    
    console.log('Form submitted:', data)
    
    alert('Avaliação solicitada com sucesso!\n\nNossa equipe analisará suas informações e entrará em contato em até 24 horas.\n\nFique atento ao seu e-mail e WhatsApp.')
    
    e.currentTarget.reset()
  }

  return (
    <section id="form">
      <div className="container">
        <div className="section-header">
          <div className="section-label">QUALIFICAÇÃO</div>
          <h2 className="section-title">Descubra Se Sua Empresa Se Qualifica</h2>
          <p className="section-description">
            Preencha o formulário para receber uma avaliação inicial gratuita<br />
            Nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <form className="glass-card form-container" onSubmit={handleSubmit}>
          <div className="form-intro">
            <p>Estamos analisando apenas empresas com alto potencial de certificação. Seja transparente nas informações para acelerarmos sua avaliação.</p>
          </div>

          <div className="form-group">
            <label htmlFor="name">Nome Completo <span className="required">*</span></label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail Corporativo <span className="required">*</span></label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone / WhatsApp <span className="required">*</span></label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="company">Empresa <span className="required">*</span></label>
            <input type="text" id="company" name="company" required />
          </div>

          <div className="form-group">
            <label htmlFor="position">Cargo / Função</label>
            <input type="text" id="position" name="position" />
          </div>

          <div className="form-group">
            <label htmlFor="buildingType">Tipo de Empreendimento <span className="required">*</span></label>
            <select id="buildingType" name="buildingType" required>
              <option value="">Selecione...</option>
              <option value="hospital">Hospital / Clínica</option>
              <option value="hotel">Hotel / Pousada / Resort</option>
              <option value="commercial">Edifício Comercial / Shopping</option>
              <option value="residential">Condomínio Residencial</option>
              <option value="industry">Indústria / Fábrica</option>
              <option value="retail">Varejo / Supermercado</option>
              <option value="education">Instituição de Ensino</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">Cidade / Estado <span className="required">*</span></label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              placeholder="Ex: Rio de Janeiro/RJ" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="waterBill">Valor Aproximado da Conta de Água Mensal</label>
            <select id="waterBill" name="waterBill">
              <option value="">Selecione...</option>
              <option value="0-5k">Até R$ 5.000</option>
              <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
              <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
              <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
              <option value="50k+">Acima de R$ 50.000</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Conte-nos Mais Sobre Sua Operação</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Ex: número de unidades, pontos de consumo, se já possui algum sistema de gestão de água, principais desafios..."
            />
          </div>

          <button type="submit" className="submit-btn">Solicitar Avaliação Gratuita</button>

          <p className="form-note">
            Ao enviar este formulário, você concorda em ser contatado por nossa equipe comercial.
          </p>
        </form>
      </div>
    </section>
  )
}

