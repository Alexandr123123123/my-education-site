import React from 'react'
import './OurCoreValuesTopCards_0.css'
import OurCoreValuesTopCard from './OurCoreValuesTopCard'

const OurCoreValuesTopCards_0 = (props) => {
  return (
    <div className="company-our-core-values-top-cards_0-body_0">
      <div className="company-our-core-values-top-cards_0-body_0-item">
        <OurCoreValuesTopCard cardParams={props.cardsTopParams[0]} />
      </div>
      <div className="company-our-core-values-top-cards_0-body_0-item">
        <OurCoreValuesTopCard cardParams={props.cardsTopParams[1]} />
      </div>
      <div className="company-our-core-values-top-cards_0-body_0-item">
        <OurCoreValuesTopCard cardParams={props.cardsTopParams[2]} />
      </div>
    </div>
  )
}

export default OurCoreValuesTopCards_0
