import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './CoreServices.css'
import CoreServiceCard from './CoreServiceCard'

const CoreServices = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Bouw Informatie Modellering',
      description:
        'Meer dan 220 fulltime coördinatoren, modelleurs en detailleurs die projecten uitvoeren in de Verenigde Staten en daarbuiten.',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Techniek',
      description:
        'Meer dan 80 interne engineering- en technische professionals die zorgen voor het succes van projectuitvoering.',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Instrumentatie en Besturing',
      description:
        'Een toegewijd team dat werkt aan het identificeren en ontwikkelen van de beste oplossingen voor unieke klantbehoeften.',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Service en Onderhoud',
      description:
        'Een volledig uitgeruste servicevloot die 24/7/365 noodhulp biedt om ervoor te zorgen dat klanten continu operationeel blijven voor hun dagelijkse activiteiten.',
    },
  ])

  return (
    <div className="what-we-do-core-services">
      <div className="what-we-do-core-services-top-element"></div>
      <div className="what-we-do-core-services-description">
        <div className="what-we-do-core-services-name">Kernservices</div>
        <div className="what-we-do-core-services-slogan">
          Altijd een innovator, Rosendin bestudeert, ontwikkelt en omarmt
          voortdurend nieuwe technologieën en integreert deze in alles wat we
          doen.
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
