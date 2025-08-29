import React from 'react'
import './RelatedProjectsCard.css'

const RelatedProjectsCard = (props) => {
  return (
      <div className="sector-related-projects-card">
        <div className="sector-related-projects-card-orange-line"></div>
        <div className="sector-related-projects-card-image-place">
          <div className="sector-related-projects-card-image-container">
            <img src={props.imagePath} alt="abc"></img>
          </div>
        </div>
        <div className="sector-related-projects-card-description-container">
          <div className="sector-related-projects-card-name">
            {props.serviceNameName}
          </div>
          <div className="sector-related-projects-card-description">
            {props.description}
          </div>
        </div>
        
      </div>
  )
}

export default RelatedProjectsCard
