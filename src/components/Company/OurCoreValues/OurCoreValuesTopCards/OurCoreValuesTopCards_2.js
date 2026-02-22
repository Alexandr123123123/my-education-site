import React from 'react'
import './OurCoreValuesTopCards_2.css'
import OurCoreValuesTopCard from './OurCoreValuesTopCard'

const OurCoreValuesTopCards_2 = (props) => {
  return (
    <div className="company-our-core-values-top-cards_0-body_2">
      <div className="company-our-core-values-top-cards_0-body_2-item">
        <OurCoreValuesTopCard
          backgroundColor="rgb(255, 163, 0)"
          cardParams={props.cardsTopParams[0]}
        />
      </div>
      <div className="company-our-core-values-top-cards_0-body_2-item">
        <OurCoreValuesTopCard
          backgroundColor="rgb(0, 61, 165)"
          cardParams={props.cardsTopParams[1]}
        />
      </div>
      <div className="company-our-core-values-top-cards_0-body_2-item">
        <OurCoreValuesTopCard
          backgroundColor="rgb(91, 103, 112)"
          cardParams={props.cardsTopParams[2]}
        />
      </div>
    </div>
  )
}

export default OurCoreValuesTopCards_2
