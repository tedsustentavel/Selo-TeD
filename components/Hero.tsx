'use client'

import { Check, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-gradient"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-label">Certificação Técnica de Excelência</div>
          <h1>Selo Sustentável<br />T&D</h1>
          <p className="hero-subtitle">
            Certificação que comprova gestão hídrica de excelência<br />
            com padrões técnicos reconhecidos
          </p>
          <div className="hero-stats">
            <span className="hero-stat">
              <Check size={16} />
              Mais de 300 empresas certificadas
            </span>
            <span className="hero-stat">
              <Check size={16} />
              1+ bilhão de litros economizados
            </span>
            <span className="hero-stat">
              <Check size={16} />
              Startup #1 em Water & Sanitation
            </span>
          </div>
          <a href="#form" onClick={(e) => { e.preventDefault(); scrollToForm(); }} className="hero-cta">
            <span>Descubra Se Sua Empresa Se Qualifica</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

