import React from 'react'
import { useState, useEffect } from 'react'
import './QuickFacts.css'

const QuickFacts = () => {
  const [activeButton, setActiveButton] = useState(0)

  const [facts, setFacts] = useState([
    {
      id: 1,
      title: 'Top-3',
      description:
        'Rosendin has consistently been recognized as a Top Electrical Contractor by ENR',
    },
    {
      id: 2,
      title: '90+',
      description:
        'The number of awards and certificates we have received for safety excellence since 2011',
    },
    {
      id: 3,
      title: '100+',
      description:
        'Number of charitable organizations supported by Rosendin nationwide',
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
      } else if (w >= 550 && w <= 1000) {
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
    }
  }

  return (
    <div className="company-quick-facts">
      <div className="company-quick-facts-body">
        {/* buttons */}
        <div
          className="company-quick-facts-body-left-button"
          style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => leftButton()}
        ></div>
        <div
          className="company-quick-facts-body-right-button"
          style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => rightButton()}
        ></div>
        {/* content */}
        <div className="company-quick-facts-body-content">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className="company-quick-facts-body-content-item"
              style={{
                transform: `translateX(${-activeButton * 100}%)`,
                width: activeWidth[activeSlider],
              }}
            >
              {/* vertical-line */}
              <div
                className="company-quick-facts-body-content-item-line"
                style={{
                  visibility:
                    index <= activeButton + activeSlider - 2 &&
                    index >= activeButton
                      ? 'visible'
                      : 'hidden',
                }}
              ></div>
              <div className="company-quick-facts-body-content-item-top-and-bottom">
                <div className="company-quick-facts-body-content-item-top">
                  {fact.title}
                </div>
                <div className="company-quick-facts-body-content-item-bottom">
                  {fact.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default QuickFacts
