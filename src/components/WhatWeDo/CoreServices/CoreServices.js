import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './CoreServices.css'
import CoreServiceCard from './CoreServiceCard'

const CoreServices = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Innovatieve Projectaanpak',
      description:
        'Wij gebruiken moderne bouwmethodes en digitale tools om projecten efficiënter, transparanter en sneller te realiseren.',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Digitale Samenwerking',
      description:
        'Via 3D-modellen, virtuele rondleidingen en real-time updates betrekken we klanten actief bij elke stap van het project.',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Duurzame Innovaties',
      description:
        'Wij integreren energie-efficiënte oplossingen en hernieuwbare technologieën om huizen toekomstbestendig te maken.',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Kwaliteit & Veiligheid',
      description:
        'Strikte kwaliteitscontrole, veiligheidsnormen en professionele vakmensen zorgen voor een zorgeloos bouwproces.',
    },
  ])

  return (
    <div className="what-we-do-core-services">
      <div className="what-we-do-core-services-top-element"></div>
      <div className="what-we-do-core-services-description">
        <div className="what-we-do-core-services-name">Slim Bouwen</div>
        <div className="what-we-do-core-services-slogan">
          Wij combineren moderne technologieën, duurzame oplossingen en
          persoonlijke begeleiding om elk huis efficiënt, veilig en
          toekomstbestendig te bouwen.
        </div>
      </div>
      <div className="what-we-do-core-services-cards-block-container">
        <div className="what-we-do-core-services-cards-block">
          {items.map((item, index) => (
            <CoreServiceCard
              serviceNameName={item.title}
              imagePath={item.filename}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="what-we-do-core-services-bottom-element"></div>
    </div>
  )
}

export default CoreServices
