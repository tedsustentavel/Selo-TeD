const companies = [
  "REDE D'OR",
  "NESTLÉ",
  "BRADESCO",
  "HAPVIDA",
  "DASA",
  "AMERICANAS",
  "CARREFOUR",
  "CLARO",
]

export default function SocialProofSection() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="section-header">
          <div className="section-label">CONFIANÇA</div>
          <h2 className="section-title">Quem Já Conquistou</h2>
        </div>

        <div className="logos-carousel-container">
          <div className="logos-carousel">
            {/* Duplicamos os logos para efeito infinito */}
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company}-${index}`} className="logo-item">
                <div className="logo-placeholder">{company}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card testimonial-card">
          <p className="testimonial-text">
            "Desde a implementação temos obtido excelentes resultados financeiros com a redução do consumo de água no hospital. Já são mais de R$ 800.000,00 de economia líquida, sem contar o ganho operacional com o sistema de monitoramento."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">MB</div>
            <div className="author-info">
              <h4>Márcio Botelho</h4>
              <p>Engenheiro e Supervisor de Manutenção Regional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

