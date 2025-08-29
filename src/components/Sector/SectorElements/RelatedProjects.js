import React from 'react'
import { useState } from 'react'
import './RelatedProjects.css'
import ServiceCard from '../../WhatWeDo/WhatWeDoElements/ServiceCard'
import RelatedProjectsCard from './RelatedProjectsCard'

const RelatedProjects = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Los Angeles Memorial Coliseum',
      description: 'Los Angeles, CA',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Wilshire Grand Center',
      description: 'Los Angeles, CA',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title:
        'Administratief gebouw & nood operatiecentrum van Contra Costa County',
      description: 'Martinez, CA',
    },
  ])

  return (
    <div className="sector-related-projects">
      <div className="sector-related-projects-container">
        <div className="sector-related-projects-body-top">
          <div className='sector-related-projects-slogan'>Gerelateerde projecten</div>
          {/*  */}
          <div className="sector-related-projects-learn-more-block-container">
            <div className="sector-related-projects-learn-more-block">
              <div className="sector-related-projects-learn-more-text">
                ALLE PROJECTEN
              </div>
              <div className="sector-related-projects-learn-more-arrow"></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="sector-related-projects-cards-block">
        {items.map((item) => (
          <div className="sector-related-projects-cards-block-item">
            <RelatedProjectsCard
              serviceNameName={item.title}
              imagePath={item.filename}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProjects
