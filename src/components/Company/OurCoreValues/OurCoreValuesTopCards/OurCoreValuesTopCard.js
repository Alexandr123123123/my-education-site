import React from 'react'
import './OurCoreValuesTopCard.css'

const OurCoreValuesTopCard = (props) => {
  return (
    <div
      className="company-our-core-values-top-card"
      style={{
        backgroundColor:
          props.backgroundColor ?? props.cardParams.backgroundColor,
      }}
    >
      <div className="company-our-core-values-top-card-title-and-text">
        <div className="company-our-core-values-top-card-title">
          {props.cardParams.title[0]}
          <br></br>
          {props.cardParams.title[1]}
        </div>
        <div className="company-our-core-values-top-card-text">
          {props.cardParams.text}
        </div>
      </div>
      {/* video */}
      {!(props.cardParams.video === undefined) ? (
        <div>
          <div className='company-our-core-values-top-card-video-area'></div>
          <div className="company-our-core-values-top-card-video">
            <img src={props.cardParams.video} alt="abc"></img>
            <div className="company-our-core-values-top-card-video-layer_1">
              <div className="company-our-core-values-top-card-video-layer_1-circle">
                <div className="company-our-core-values-top-card-video-layer_1-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default OurCoreValuesTopCard
