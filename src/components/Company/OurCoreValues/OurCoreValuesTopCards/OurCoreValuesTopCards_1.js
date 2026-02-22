import React from 'react'
import './OurCoreValuesTopCards_1.css'
import OurCoreValuesTopCard from './OurCoreValuesTopCard'

const OurCoreValuesTopCards_1 = (props) => {
  return (
    <div className="company-our-core-values-top-cards_0-body_1">
      <div className="company-our-core-values-top-cards_0-body_1-item company-our-core-values-top-cards_0-body_1_0">
        <div className="company-our-core-values-top-cards_0-body_1-item-item">
          <OurCoreValuesTopCard
            backgroundColor="rgb(255, 163, 0)"
            cardParams={props.cardsTopParams[0]}
          />
        </div>
        <div className="company-our-core-values-top-cards_0-body_1-item-item">
          <OurCoreValuesTopCard
            backgroundColor="rgb(91, 103, 112)"
            cardParams={props.cardsTopParams[2]}
          />
        </div>
      </div>
      <div className="company-our-core-values-top-cards_0-body_1-item company-our-core-values-top-cards_0-body_1_1">
        <OurCoreValuesTopCard
          backgroundColor="rgb(0, 61, 165)"
          cardParams={props.cardsTopParams[1]}
        />
      </div>
    </div>
  )
}

export default OurCoreValuesTopCards_1
