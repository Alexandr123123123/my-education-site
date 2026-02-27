import React from 'react'
import { useState, useEffect } from 'react'
import './CareerPaths.css'
import CareerPathsBody_1 from './CareerPathsBody_1'
import CareerPathsBody_2 from './CareerPathsBody_2'
import CareerPathsLayer from './CareerPathsLayer'

const CareerPaths = () => {
  const [screen, setScreen] = useState(getScreenType())

  function getScreenType() {
    const width = window.innerWidth

    if (width <= 750) return 2
    if (width <= 1000) return 1
    return 0
  }

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreenType())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="careers-career-paths">
      <div className="careers-career-paths-top-text">
        <div className="careers-career-paths-name">Carrièrepaden</div>
        <div className="careers-career-paths-title">
          Wat je ervaring ook is, er is een plek voor jou
        </div>
      </div>
      {/* body */}
      <div className="careers-career-paths-body-conteiner">
        {screen === 0 ? <CareerPathsBody_1 /> : <CareerPathsBody_2 />}
      </div>
      {/*  */}
    </div>
  )
}

export default CareerPaths
