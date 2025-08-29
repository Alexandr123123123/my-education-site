import React from 'react'
import { useState, useEffect } from 'react'
import './QuickFacts.css'

const QuickFacts = () => {
  const [activeButton, setActiveButton] = useState(0)

  const [facts, setFacts] = useState([
    {
      id: 1,
      title: '50%',
      description:
        'Percentage van het interne personeel dat beschikt over een CTS-certificering',
    },
    {
      id: 2,
      title: '12',
      description: 'Aantal NECA Awards voor Audio/Visuele Uitmuntendheid',
    },
    {
      id: 3,
      title: '25',
      description: 'Aantal branche-/product fabrikant certificeringen',
    },
  ])

  const [activeSlider, setActiveSlider] = useState(3)

  const activeWidth = [0, '100%', '50%', '33.33%']

  useEffect(() => {
    const handleResize1 = () => {
      const w = window.innerWidth
      if (w >= 1000) {
        if (activeButton > facts.length - 3) {
          setActiveButton(facts.length - 3)
        }
        setActiveSlider(3)
      } else if (w >= 500 && w <= 1000) {
        if (activeButton > facts.length - 2) {
          setActiveButton(facts.length - 2)
        }
        setActiveSlider(2)
      } else {
        setActiveSlider(1)
      }
    }

    handleResize1()

    window.addEventListener('resize', handleResize1)
    return () => window.removeEventListener('resize', handleResize1)
  }, [activeButton, setActiveSlider])

  const leftButton = () => {
    if (activeButton > 0) {
      setActiveButton(activeButton - 1)
    }
  }

  const rightButton = () => {
    if (activeButton < facts.length - activeSlider) {
      setActiveButton(activeButton + 1)
      console.log(activeSlider)
    }
  }

  return (
    <div className="sector-quick-facts">
      <div className="sector-quick-facts-top-element"></div>
      <div className="sector-quick-facts-name"></div>
      <div className="sector-quick-facts-content-container">
        <div
          className="sector-quick-facts-left-button"
          style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => leftButton()}
        ></div>
        <div
          className="sector-quick-facts-right-button"
          style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => rightButton()}
        ></div>
        <div className="sector-quick-facts-content">
          {facts.map((fact, index) => (
            <div
              className="sector-quick-facts-content-item"
              key={fact.id}
              style={{
                transform: `translateX(${-activeButton * 100}%)`,
                width: activeWidth[activeSlider],
              }}
            >
              <div className="sector-quick-facts-content-item-top">
                {fact.title}
              </div>
              <div className="sector-quick-facts-content-item-bottom">
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickFacts
