import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './ValueServices.css'
import ValueServiceCard from './ValueServiceCard'

const ValueServices = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Ontwerp-ondersteuning',
      description:
        'Diepgaande expertise die ervoor zorgt dat alle inzichten met betrekking tot de ontwerpintentie van elektrische systemen duidelijk aan alle partijen worden gecommuniceerd.',
      background: 'green',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Design-Build',
      description:
        'Meer dan 50 jaar ervaring in het bedienen van een divers klantenportfolio dankzij deskundige kennis en een sterke focus op innovatie.',
      background: 'red',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Geïntegreerde projectrealisatie',
      description:
        'Rosendin gelooft dat het succes van IPD afhangt van de mensen die het project realiseren, niet van de hulpmiddelen.',
      background: 'red',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Prefabricatie',
      description:
        'Een grondige verkenning van hoe en waar prefabricatie de productiviteit van het project, de planning, de arbeidskosten en de efficiëntie van afval kan beïnvloeden.',
      background: 'green',
    },
  ])

  // -------

  const [maxHeight, setMaxHeight] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const handleResize = () => {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0)
      setMaxHeight(Math.max(...heights))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // -------
  console.log(maxHeight, 'maxHeight')
  return (
    <div className="what-we-do-value-services">
      <div className="what-we-do-value-services-description">
        <div className="what-we-do-value-services-name">Kernservices</div>
        <div className="what-we-do-value-services-slogan">
          Altijd een innovator, Rosendin bestudeert, ontwikkelt en omarmt
          voortdurend nieuwe technologieën en integreert deze in alles wat we
          doen.
        </div>
      </div>
      <div className='what-we-do-value-services-cards-container'>
        <div className="what-we-do-value-services-cards">
          {items.map((item, index) => (
            <ValueServiceCard
              key={item.id}
              serviceNameName={item.title}
              imagePath={item.filename}
              description={item.description}
              maxHeight={maxHeight}
              setRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValueServices
