export default function NormsSection() {
  const norms = [
    {
      code: "NBR 5626",
      description: "Instalações prediais",
      tooltip: "Estabelece requisitos para instalações prediais de água fria, garantindo segurança, funcionalidade e eficiência no uso da água."
    },
    {
      code: "NBR 15206",
      description: "Chuveiros e duchas",
      tooltip: "Define requisitos de desempenho para chuveiros e duchas, estabelecendo limites de vazão para economia de água sem comprometer conforto."
    },
    {
      code: "NBR 14877",
      description: "Duchas higiênicas",
      tooltip: "Define requisitos técnicos para duchas higiênicas, incluindo parâmetros de vazão, pressão e durabilidade."
    },
    {
      code: "NBR 10281",
      description: "Torneiras",
      tooltip: "Estabelece requisitos de desempenho, durabilidade e eficiência para torneiras de uso sanitário."
    },
    {
      code: "NBR 13713",
      description: "Válvulas de mictórios",
      tooltip: "Define requisitos técnicos para válvulas utilizadas em mictórios e sistemas de chuveiros."
    },
    {
      code: "Inmetro 246/2000",
      description: "Certificação de medidores",
      tooltip: "Regulamenta a certificação compulsória de hidrômetros comercializados no Brasil."
    },
    {
      code: "WaterSense",
      description: "Normas internacionais",
      tooltip: "Padrão internacional de referência em eficiência hídrica promovendo conservação de água globalmente."
    },
    {
      code: "IPMVP",
      description: "Medição de performance",
      tooltip: "Protocolo Internacional de Medição e Verificação de Performance para comprovação de eficiência."
    }
  ]

  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-label">CONFORMIDADE</div>
          <h2 className="section-title">Normas Técnicas</h2>
          <p className="section-description">
            Certificação baseada em padrões nacionais e internacionais
          </p>
        </div>

        <div className="norms-grid">
          {norms.map((norm, index) => (
            <div 
              key={index} 
              className="glass-card norm-card" 
              data-tooltip={norm.tooltip}
            >
              <span className="info-icon">i</span>
              <h3>{norm.code}</h3>
              <p>{norm.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

