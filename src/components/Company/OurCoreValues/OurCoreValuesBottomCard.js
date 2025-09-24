import React from 'react'
import './OurCoreValuesBottomCard.css'

const OurCoreValuesButtonsCard = (props) => {
  return (
    <div
      className="company-our-core-values-bottom-card"
      style={{ backgroundColor: props.cardParams.backgroundColor }}
    >
      <div className="company-our-core-values-bottom-card-title-and-text">
        <div className="company-our-core-values-bottom-card-title">
          {props.cardParams.title[0]}
          <br></br>
          {props.cardParams.title[1]}
        </div>
        <div className="company-our-core-values-bottom-card-text">
          {props.cardParams.text}
        </div>
      </div>
    </div>
  )
}

export default OurCoreValuesButtonsCard
