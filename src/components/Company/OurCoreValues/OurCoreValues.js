import React from 'react'
import './OurCoreValues.css'
import OurCoreValuesTopCards from './OurCoreValuesTopCards/OurCoreValuesTopCards'
import OurCoreValuesTopCard from './OurCoreValuesTopCards/OurCoreValuesTopCard'
import OurCoreValuesBottomCard from './OurCoreValuesBottomCard'

const OurCoreValues = () => {
  const cardsBottomParams = [
    {
      id: 1,
      title: ['We', 'Innoveren'],
      text: 'Mensen zullen ons herinneren om de oplossingen die we bieden. Ondernemende ideeën worden aangemoedigd om voortdurend de industrienormen te verhogen.',
      backgroundColor: 'rgb(255, 163, 0)',
    },
    {
      id: 2,
      title: ['We', 'Uitblinken'],
      text: 'De kwaliteit van ons werk zal ons jarenlang vertegenwoordigen. We zijn trots op wat we bouwen. Het is ons nalatenschap.',
      backgroundColor: 'rgb(0, 61, 165)',
    },
  ]

  return (
    <div className="company-our-core-values">
      <div className="company-our-core-values-name">Onze Kernwaarden</div>
      <div className="company-our-core-values-table">
        {/* top */}
        <OurCoreValuesTopCards />
        {/* bottom */}
        <div className="company-our-core-values-content-bottom">
          <OurCoreValuesBottomCard cardParams={cardsBottomParams[0]} />
          <OurCoreValuesBottomCard cardParams={cardsBottomParams[1]} />
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default OurCoreValues
