import { Droplet, Settings, ClipboardCheck, BarChart3 } from 'lucide-react'

export default function CriteriaSection() {
  const criteria = [
    {
      percentage: "90%",
      Icon: Droplet,
      title: "Pontos Padronizados",
      description: "No mínimo 90% dos pontos de consumo devem estar padronizados com tecnologias de eficiência, atendendo normas técnicas brasileiras."
    },
    {
      percentage: "90%",
      Icon: Settings,
      title: "Implementação Completa",
      description: "Pelo menos 90% do programa de implementação deve estar concluído, incluindo treinamentos, conscientização e ajustes técnicos."
    },
    {
      Icon: ClipboardCheck,
      title: "Conformidade Técnica",
      description: "Atendimento integral às normas ABNT de instalações hidráulicas e padrões internacionais de eficiência hídrica."
    },
    {
      Icon: BarChart3,
      title: "Dados Mensuráveis",
      description: "Sistema de medição implementado com baseline calculado segundo protocolo IPMVP para comprovação de resultados."
    }
  ]

  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-label">REQUISITOS</div>
          <h2 className="section-title">Critérios de Certificação</h2>
          <p className="section-description">
            Padrões técnicos rigorosos que garantem excelência comprovada
          </p>
        </div>

        <div className="criteria-grid">
          {criteria.map((item, index) => {
            const IconComponent = item.Icon
            return (
              <div key={index} className="glass-card criteria-card">
                {item.percentage && (
                  <span className="criteria-percentage">{item.percentage}</span>
                )}
                <span className="criteria-icon">
                  <IconComponent size={48} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

