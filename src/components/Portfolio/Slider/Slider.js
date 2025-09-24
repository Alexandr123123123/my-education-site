import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Slider.css'

const SliderForPortfolio = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/image_4.jpg`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/image_5.jpg`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/image_6.jpg`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
  ])

  return (
    <div className="portfolio-slider">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="portfolio-slider-item"
          style={{ transform: `translateX(-${activeButton * 100}%)` }}
        >
          <img src={item.filename} alt="abc" />
          <div className="portfolio-slider-layer_1">
            <div className="portfolio-slider-layer_1-description">
              <div className="portfolio-slider-layer_1-name">
                {item.description}
              </div>
              <div className="portfolio-slider-layer_1-button">
                VIEW PROJECT
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* buttons */}
      <div className="portfolio-slider-buttons-block">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`portfolio-slider-buttons-block-item ${activeButton === index ? 'portfolio-slider-buttons-block-item-modify' : ''}`}
            onClick={() => setActiveButton(index)}
          ></div>
        ))}
      </div>
      {/*  */}
    </div>
  )
}

export default SliderForPortfolio
