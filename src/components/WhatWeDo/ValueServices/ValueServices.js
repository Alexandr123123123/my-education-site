import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './ValueServices.css'
import ValueServiceCard from './ValueServiceCard'

const ValueServices = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Intake & Advies',
      description:
        'Wij luisteren naar uw wensen en geven professioneel advies over oplossingen en mogelijkheden.',
      background: 'green',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Ontwerp & Planning',
      description:
        'Gedetailleerde plannen, 3D-modellen en tijdlijnen zorgen voor duidelijkheid en transparantie.',
      background: 'red',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Uitvoering',
      description:
        'Onze vakmensen realiseren het project volgens plan met regelmatige updates.',
      background: 'red',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Oplevering & Nazorg',
      description:
        'Controle van elk detail en ondersteuning na oplevering voor een tevreden klant.',
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
        <div className="what-we-do-value-services-name">Hoe Wij Werken</div>
        <div className="what-we-do-value-services-slogan">
          Van eerste idee tot oplevering – wij begeleiden u stap voor stap voor
          een zorgeloos bouwproces.
        </div>
      </div>
      <div className="what-we-do-value-services-cards-container">
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
