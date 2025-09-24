import React from 'react'
import './CoreServiceCard.css'

const CoreServiceCard = (props) => {
  return (
    <div className="what-we-do-core-service-card">
      <div className="what-we-do-core-service-card-container">
        <div className="what-we-do-core-service-card-orange-line"></div>
        {/* image */}
        <div className="what-we-do-core-service-card-image">
          <img src={props.imagePath} alt="abc"></img>
        </div>
        {/* description */}
        <div className="what-we-do-core-service-card-description">
          <div className="what-we-do-core-service-card-name">
            {props.serviceNameName}
          </div>
          <div className="what-we-do-core-service-card-text">
            {props.description}
          </div>
        </div>
        {/* learn-more */}
        <div className="what-we-do-core-service-card-learn-more-container">
          <div className="what-we-do-core-service-card-learn-more">
            <div className="what-we-do-core-service-card-learn-more-text">
              LEARN MORE
            </div>
            <div className="what-we-do-core-service-card-learn-more-arrow"></div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default CoreServiceCard
