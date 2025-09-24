import React from 'react'
import './CareerPathsLayer.css'

const CareerPathsLayer = (props) => {
  return (
    <div
      className="career-paths-layer"
      style={{ opacity: props.active === true ? 1 : 0 }}
    >
      <div className="career-paths-layer-name">{props.worker.name}</div>
      <div className="career-paths-layer-text">{props.worker.description}</div>
    </div>
  )
}

export default CareerPathsLayer
