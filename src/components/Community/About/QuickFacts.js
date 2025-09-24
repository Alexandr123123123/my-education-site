import React from 'react'
import { useState, useEffect } from 'react'
import './QuickFacts.css'

const QuickFacts = () => {

  const [facts, setFacts] = useState([
    {
      id: 1,
      title: '100+',
      description:
        'Number of charitable organizations supported by Rosendin natiomwide',
    },
    {
      id: 2,
      title: '$500K',
      description: 'Our annual contributions to community organizations',
    },
    {
      id: 3,
      title: '5000',
      description:
        'Total number of annual volunteer hours served by Rosendin employees',
    },
    {
      id: 4,
      title: '5000',
      description:
        'Total pounds of food donated to shelters across the country annually',
    },
  ])
const [activeButton, setActiveButton] = useState(0)

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
    }
  }
  
  return (
    <div className="community-quick-facts">
      <div className='community-quick-facts-top-element'></div>
      <div className="community-quick-facts-body">
        {/* buttons */}
        <div
          className="community-quick-facts-body-left-button"
          // style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => leftButton()}
        ></div>
        <div
          className="community-quick-facts-body-right-button"
          // style={{ visibility: activeSlider === 3 ? 'hidden' : 'visible' }}
          onClick={() => rightButton()}
        ></div>
        {/* content */}
        <div className="community-quick-facts-body-content">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className="community-quick-facts-body-content-item"
              style={{
                transform: `translateX(${-activeButton * 100}%)`,
                width: activeWidth[activeSlider],
              }}
            >
              {/* vertical-line */}
              <div
                className="community-quick-facts-body-content-item-line"
                style={{
                  visibility:
                    index <= activeButton + activeSlider - 2 &&
                    index >= activeButton
                      ? 'visible'
                      : 'hidden',
                }}
              ></div>
              <div className="community-quick-facts-body-content-item-top-and-bottom">
                <div className="community-quick-facts-body-content-item-top">
                  {fact.title}
                </div>
                <div className="community-quick-facts-body-content-item-bottom">
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


