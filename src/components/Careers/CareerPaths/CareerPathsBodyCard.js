import React from 'react'
import './CareerPathsBodyCard.css'
import CareerPathsLayer from './CareerPathsLayer'

const CareerPathsBodyCard = ({
  workers,
  setWorkers,
  activeWorker,
  setActiveWorker,
  id,
}) => {
  return (
    <div
      className="careers-career-paths-body-card"
      onMouseEnter={() => setActiveWorker(id)}
      onMouseLeave={() => setActiveWorker(10)}
    >
      <CareerPathsLayer
        worker={workers}
        active={activeWorker === id ? true : 10}
      />
      <img src={workers.filename} alt="abc"></img>
      <div className="careers-career-paths-body-card-layer_1">
        <div
          className="careers-career-paths-body-card-layer_1-text"
          style={{ opacity: activeWorker === id ? 0 : 1 }}
        >
          {workers.name}
        </div>
      </div>
    </div>
  )
}

export default CareerPathsBodyCard
