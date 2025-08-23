import React from 'react'
import { useState } from 'react'
import './SliderForPortfolio.css'
import '../../../assets/abc.jpg'
import { useRef } from 'react'
import { useEffect } from 'react'

const SliderForPortfolio = () => {
  const [activeButton, setActiveButton] = useState(3)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: 
      `${process.env.PUBLIC_URL}/src/image_4.jpg`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 2,
      filename: 
      `${process.env.PUBLIC_URL}/src/image_5.jpg`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 3,
      filename: 
      
      `${process.env.PUBLIC_URL}/src/image_6.jpg`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
  ])

  return (
    <div className="container-for-slider">
      <div className="slider">
        <div className="slider_for_project-catalog">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="slider_for_project-catalog-item"
              // style={{ transform: `translateX(-${activeButton * 100}%)` }}
              // style={{ transform: "translateX(50%)" }}
            >
              <img src={item.filename} alt="abc" />
              <div className='portfolio-slider-image-filter'></div>
              <div className="portfolio-slider-name-project">
                <div className='portfolio-slider-name-project-body'>{item.description}</div>
                <div className="portfolio-slider-project-button">
                  VIEW PROJECT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-for-slider-block">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`button-for-slider ${activeButton === index ? 'button-for-slider-modify' : ''}`}
            onClick={() => setActiveButton(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SliderForPortfolio
