import { Droplet, DollarSign, Globe, BarChart3, GraduationCap, Zap } from 'lucide-react'

export default function BenefitsSection() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-label">VANTAGENS</div>
          <h2 className="section-title">Benefícios Comprovados</h2>
        </div>

        <div className="benefits-layout">
          {/* Benefícios Principais (2 grandes) */}
          <div className="benefits-main">
            <div className="glass-card benefit-main-card">
              <div className="benefit-main-icon">
                <Droplet size={72} />
              </div>
              <div className="benefit-main-content">
                <h3>Economia de Água</h3>
                <div className="benefit-main-number">até 40%</div>
                <p>Redução média de consumo comprovada em mais de 300 operações certificadas</p>
              </div>
            </div>

            <div className="glass-card benefit-main-card">
              <div className="benefit-main-icon">
                <DollarSign size={72} />
              </div>
              <div className="benefit-main-content">
                <h3>Redução de Custos</h3>
                <div className="benefit-main-number">R$ 55M+</div>
                <p>Total economizado por empresas certificadas desde 2018</p>
              </div>
            </div>
          </div>

          {/* Benefícios Secundários (4 cards menores) */}
          <div className="benefits-secondary">
            <div className="glass-card benefit-secondary-card">
              <div className="benefit-sec-icon">
                <Globe size={40} />
              </div>
              <h4>Impacto Ambiental</h4>
              <p><strong>3.4k toneladas</strong> de CO₂ evitadas</p>
            </div>

            <div className="glass-card benefit-secondary-card">
              <div className="benefit-sec-icon">
                <BarChart3 size={40} />
              </div>
              <h4>Conformidade Técnica</h4>
              <p>Atendimento garantido a <strong>NBRs e normas internacionais</strong></p>
            </div>

            <div className="glass-card benefit-secondary-card">
              <div className="benefit-sec-icon">
                <GraduationCap size={40} />
              </div>
              <h4>Conscientização</h4>
              <p><strong>15 mil+ usuários</strong> capacitados diretamente</p>
            </div>

            <div className="glass-card benefit-secondary-card">
              <div className="benefit-sec-icon">
                <Zap size={40} />
              </div>
              <h4>Diferencial Competitivo</h4>
              <p>Valorização da marca e <strong>posicionamento sustentável</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

