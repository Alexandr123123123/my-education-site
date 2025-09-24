import React from 'react'
import { useState } from 'react'
import './EmployeeSpotlightsCard.css'

const EmployeeSpotlightsCard = (props) => {
  const [activeMessage, setActiveMessage] = useState(0)

  const leftButton = () => {
    if (props.activeEmployeeSpotlightsCard > 0) {
      props.setActiveEmployeeSpotlightsCard(
        props.activeEmployeeSpotlightsCard - 1
      )
    }
  }

  const rightButton = () => {
    if (props.activeEmployeeSpotlightsCard < props.workers.length - 1) {
      props.setActiveEmployeeSpotlightsCard(
        props.activeEmployeeSpotlightsCard + 1
      )
    }
  }

  const closeButton = () => {
    props.setActiveEmployeeSpotlightsCard(false)
  }

  return (
    <div className="careers-employee-spotlights-card">
      {/* buttons */}
      <div
        className="careers-employee-spotlights-card-left-button"
        onClick={() => leftButton()}
      ></div>
      <div
        className="careers-employee-spotlights-card-right-button"
        onClick={() => rightButton()}
      ></div>
      {/* body */}
      <div className="careers-employee-spotlights-card-body">
        <div
          className="careers-employee-spotlights-card-body-close-button-container"
          onClick={() => closeButton()}
        >
          <div className="careers-employee-spotlights-card-body-close-button"></div>
        </div>
        {props.workers.map((worker, index) => (
          <div
            key={worker.id}
            className="careers-employee-spotlights-card-body-item"
            style={{
              transform: `translateX(${-props.activeEmployeeSpotlightsCard * 100}%)`,
            }}
          >
            {/* left */}
            <div className="careers-employee-spotlights-card-body-left">
              <div className="careers-employee-spotlights-card-body-left-image">
                <img src={worker.filename} alt="abc"></img>
              </div>
            </div>
            {/* right */}
            <div className="careers-employee-spotlights-card-body-right">
              <div className="careers-employee-spotlights-card-body-right-text">
                {worker.text}
              </div>
              <div className="careers-employee-spotlights-card-body-right-name">
                {worker.title}
              </div>
              <div className="careers-employee-spotlights-card-body-right-position">
                {worker.description}
              </div>
              <div className="careers-employee-spotlights-card-body-right-location">
                {worker.location}
              </div>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  )
}

export default EmployeeSpotlightsCard
