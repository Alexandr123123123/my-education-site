import React from 'react'
import './ValueServiceCard.css'

const ValueServiceCard = (props) => {
  return (
    <div className="what-we-do-value-service-card-container-abc">
  
      <div
        className="what-we-do-value-service-card"
        style={{
          height: props.maxHeight > 0 ? props.maxHeight : 250,
          background: props.background,
        }}
      >
        <div
          className="what-we-do-value-service-card-container"
          ref={props.setRef}
        >
          <div className="what-we-do-value-service-card-orange-line"></div>
          {/* image */}
          <div className="what-we-do-value-service-card-image">
            <img src={props.imagePath} alt="abc"></img>
          </div>
          {/* description */}
          <div className="what-we-do-value-service-card-description">
            <div className="what-we-do-value-service-card-name">
              {props.serviceNameName}
            </div>
            <div className="what-we-do-value-service-card-text">
              {props.description}
            </div>
          </div>
          {/* learn-more */}
          <div className="what-we-do-value-service-card-learn-more-container">
            <div className="what-we-do-value-service-card-learn-more">
              <div className="what-we-do-value-service-card-learn-more-text">
                LEARN MORE
              </div>
              <div className="what-we-do-value-service-card-learn-more-arrow"></div>
            </div>
          </div>
          {/* learn-more */}
          <div className="what-we-do-value-service-card-learn-more-container-1">
            <div className="what-we-do-value-service-card-learn-more">
              <div className="what-we-do-value-service-card-learn-more-text">
                LEARN MORE
              </div>
              <div className="what-we-do-value-service-card-learn-more-arrow"></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default ValueServiceCard
