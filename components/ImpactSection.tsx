export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">NÚMEROS REAIS</div>
          <h2 className="section-title">O Impacto de Quem Se Compromete</h2>
          <p className="section-description">
            Empresas certificadas fazem parte de um movimento que já transformou<br />
            a gestão hídrica em todo o Brasil
          </p>
        </div>

        <div className="impact-grid">
          <div className="glass-card impact-card">
            <div className="impact-number">1B+</div>
            <div className="impact-label">Litros de Água<br />Economizados</div>
          </div>

          <div className="glass-card impact-card">
            <div className="impact-number">300+</div>
            <div className="impact-label">Empresas<br />Certificadas</div>
          </div>

          <div className="glass-card impact-card">
            <div className="impact-number">3x</div>
            <div className="impact-label">Startup #1<br />Water & Sanitation</div>
          </div>

          <div className="glass-card impact-card">
            <div className="impact-number">9</div>
            <div className="impact-label">Estados<br />Brasileiros</div>
          </div>
        </div>
      </div>
    </section>
  )
}

