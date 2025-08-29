import React from 'react'
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div className="what-we-do-service-card">
      <div className="what-we-do-service-card-orange-line"></div>
      <div className="what-we-do-service-card-image-place">
        <div className="what-we-do-service-card-image-container">
          <img src={props.imagePath} alt="abc"></img>
        </div>
      </div>
      <div className="what-we-do-service-card-description-container">
        <div className="what-we-do-service-card-name">
          {props.serviceNameName}
        </div>
        <div className="what-we-do-service-card-description">
          {props.description}
        </div>
      </div>
      <div className="what-we-do-service-card-learn-more-block-container">
        <div className="what-we-do-service-card-learn-more-block">
          <div className="what-we-do-service-card-learn-more-text">
            LEARN MORE
          </div>
          <div className="what-we-do-service-card-learn-more-arrow"></div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
