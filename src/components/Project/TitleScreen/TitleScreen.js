import React from 'react'
import { useState, useEffect } from 'react'
import './TitleScreen.css'
import SliderForProject from './SliderForProject.js'
import TitleScreenNavigation from './TitleScreenNavigation.js'

const TitleScreen = (props) => {
  // const [activeGallery, setActiveGallery] = useState(0)

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     filename: `${process.env.PUBLIC_URL}/src/image_9.jpg`,
  //     title: 'Первый элемент',
  //     description: 'Описание первого элемента',
  //   },
  //   {
  //     id: 2,
  //     filename: `${process.env.PUBLIC_URL}/src/image_7.jpg`,
  //     title: 'Второй элемент',
  //     description: 'Описание второго элемента',
  //   },
  //   {
  //     id: 3,
  //     filename: `${process.env.PUBLIC_URL}/src/image_12.jpg`,
  //     title: 'Третий элемент',
  //     description: 'Описание третьего элемента',
  //   },
  // ])

  useEffect(() => {
    if (props.activeGallery !== 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [props.activeGallery])

  return (
    <div className="project-title-screen">
      <div className="project-title-screen-body">
        <img
          src={props.items[0].filename}
          alt="Swing Space View 1"
          className="project-title-screen-body-image"
        />
        <div className="project-title-screen-body-filter"></div>
        <div className="project-title-screen-body-name">
          {props.title[0].textA}
        </div>
        <TitleScreenNavigation
          items={props.items}
          setActiveGallery={props.setActiveGallery}
        />
      </div>
      {props.activeGallery ? (
        <SliderForProject
          items={props.items}
          activeGallery={props.activeGallery}
          setActiveGallery={props.setActiveGallery}
        />
      ) : null}
    </div>
  )
}

export default TitleScreen
