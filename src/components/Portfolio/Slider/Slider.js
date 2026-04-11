import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Slider.css'
import { NavLink } from 'react-router-dom'

const SliderForPortfolio = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/1.jpg`,
      title: 'Первый элемент',
      description: 'Boudewijn',
      linkSite: '/my-education-site/boudewijn',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/1.jpg`,
      title: 'Второй элемент',
      description: 'Potter',
      linkSite: '/my-education-site/potter',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_1.jpg`,
      title: 'Третий элемент',
      description: 'Lescluzestraat',
      linkSite: '/my-education-site/oogststraat',
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
              <NavLink to={item.linkSite} className="portfolio-slider-layer_1-button">
                VIEW PROJECT
              </NavLink>
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
