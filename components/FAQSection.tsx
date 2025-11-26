'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: "Quanto tempo leva para obter o selo?",
    answer: "O processo completo leva entre 8 e 14 semanas, dependendo do tamanho e complexidade da operação. A certificação é emitida imediatamente após aprovação na auditoria técnica final."
  },
  {
    question: "Minha empresa precisa já ter a T&D para se qualificar?",
    answer: "Não necessariamente. O selo certifica empresas que atendem aos critérios técnicos estabelecidos, independentemente de como alcançaram esse padrão. No entanto, a gestão continuada T&D garante manutenção dos padrões ao longo do tempo."
  },
  {
    question: "Qual o custo do processo de certificação?",
    answer: "O investimento varia conforme o tamanho da operação e escopo necessário para atingir os critérios. Nossa equipe realiza uma avaliação inicial gratuita e apresenta proposta personalizada sem compromisso."
  },
  {
    question: "O selo tem validade? Precisa ser renovado?",
    answer: "Sim. A certificação tem validade anual e é renovada mediante manutenção dos padrões técnicos. A cada renovação, o cliente recebe um quadro A3 atualizado com linha do tempo mostrando a evolução dos indicadores."
  },
  {
    question: "Quais setores podem ser certificados?",
    answer: "Hospitais, hotéis, edifícios comerciais, condomínios residenciais, indústrias, supermercados, instituições de ensino e qualquer operação com consumo significativo de água pode se qualificar para o selo."
  },
  {
    question: "O que acontece se não atingirmos os 90%?",
    answer: "Nossa equipe trabalha junto ao cliente em um plano de ação para alcançar os critérios necessários. O processo é colaborativo e a certificação só é emitida quando há real conformidade técnica."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-label">DÚVIDAS</div>
          <h2 className="section-title">Perguntas Frequentes</h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <X size={24} /> : <Plus size={24} />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

