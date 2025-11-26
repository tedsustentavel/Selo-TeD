import Image from 'next/image'

export default function WhatIsSection() {
  return (
    <section>
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <div className="section-label">CERTIFICAÇÃO</div>
            <h2>O Que É o Selo Sustentável T&D</h2>
            <p>
              Uma <strong>certificação técnica</strong> que reconhece empresas comprometidas com gestão hídrica de excelência. O selo comprova conformidade com rigorosos padrões técnicos e ambientais.
            </p>
            <ul>
              <li>Certificação técnica baseada em normas ABNT e padrões internacionais</li>
              <li>Auditoria rigorosa com critérios quantificáveis</li>
              <li>Reconhecimento visual com quadro e troféu oficial</li>
              <li>Renovação anual com linha do tempo de evolução</li>
              <li>Diferencial competitivo e valorização da marca</li>
            </ul>
          </div>

          <div className="seal-mockup">
            <Image 
              src="/1763573371454_image.png" 
              alt="Selo Sustentável T&D" 
              width={500}
              height={500}
              className="seal-image"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px', position: 'relative', zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

