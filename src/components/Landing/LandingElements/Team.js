import React from 'react'
import { useState, useEffect } from 'react'
import './Team.css'

const Team = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/coworker-1.jpg`,
      title: 'Xí Jìnpíng',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/coworker-2.jpg`,
      title: 'Theodore Roosevelt Jr.',
      description: '110 East',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/coworker-3.jpg`,
      title: 'Woodrow Wilson',
      description: '803 Waimanu',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/coworker-4.jpg`,
      title: 'Ronald Reagan',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/coworker-5.jpeg`,
      title: 'George Bush',
      description: '110 East',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/coworker-6.jpg`,
      title: 'George Washington',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    // {
    //   id: 6,
    //   filename: `${process.env.PUBLIC_URL}/src/image_6.jpg`,
    //   title: 'Третий элемент',
    //   description: '803 Waimanu',
    // },
  ])
  const [activeSlider, setActiveSlider] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w >= 600) {
        if (activeButton > items.length - 3) {
          setActiveButton(items.length - 3)
        }
        setActiveSlider(3)
      } else if (w >= 350 && w <= 600) {
        if (activeButton > items.length - 2) {
          setActiveButton(items.length - 2)
        }
        setActiveSlider(2)
      } else {
        setActiveSlider(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeButton, setActiveSlider])

  const leftButton = () => {
    if (activeButton > 0) {
      setActiveButton(activeButton - 1)
    }
  }

  const rightButton = () => {
    if (activeButton < items.length - activeSlider) {
      setActiveButton(activeButton + 1)
    }
  }

  return (
    <div className="landing-team">
      <div className="landing-team-name">05. ONZE MENSEN</div>
      <div className="landing-team-title">Passie. Toewijding. Trots.</div>
      <div className="landing-team-slider-container">
        <div
          className="landing-team-slider-left-button"
          onClick={() => leftButton()}
        ></div>
        <div
          className="landing-team-slider-right-button"
          onClick={() => rightButton()}
        ></div>
        <div className="landing-team-slider">
          {items.map((item) => (
            <div
              className="landing-team-slider-item"
              style={{ transform: `translateX(${-activeButton * 100}%)` }}
            >
              <div className="landing-team-slider-item-container">
                <div className="landing-team-slider-item-name-worker">
                  {item.title}
                </div>
                <img src={item.filename}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
