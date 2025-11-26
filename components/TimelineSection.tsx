import { Search, Wrench, CheckCircle, Trophy } from 'lucide-react'

export default function TimelineSection() {
  const timelineItems = [
    {
      Icon: Search,
      title: "Avaliação Inicial",
      description: "Diagnóstico completo da infraestrutura hidráulica atual, identificando oportunidades de melhoria e definindo baseline de consumo.",
      duration: "2-4 semanas"
    },
    {
      Icon: Wrench,
      title: "Implementação",
      description: "Instalação de tecnologias de eficiência, padronização de pontos, correção de vazamentos e treinamento de equipes.",
      duration: "4-8 semanas"
    },
    {
      Icon: CheckCircle,
      title: "Auditoria Técnica",
      description: "Verificação rigorosa de conformidade com todos os critérios técnicos e normas aplicáveis.",
      duration: "1-2 semanas"
    },
    {
      Icon: Trophy,
      title: "Certificação",
      description: "Emissão oficial do Selo com entrega de quadro e troféu. Renovação anual com linha do tempo de evolução.",
      duration: "Imediato"
    }
  ]

  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-label">JORNADA</div>
          <h2 className="section-title">Processo de Certificação</h2>
          <p className="section-description">
            Um caminho estruturado para alcançar excelência em gestão hídrica
          </p>
        </div>

        <div className="timeline">
          {timelineItems.map((item, index) => {
            const IconComponent = item.Icon
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">
                  <IconComponent size={32} />
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

