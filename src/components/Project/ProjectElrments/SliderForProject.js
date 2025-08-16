import React from 'react'
import './SliderForProject.css'

const SliderForProject = (props) => {
  const nextImage = () => {
    props.setActiveGallery(
      props.activeGallery === props.items.length ? 1 : props.activeGallery + 1
    )
  }

  const previousImage = () => {
    props.setActiveGallery(
      props.activeGallery === 1 ? props.items.length : props.activeGallery - 1
    )
  }
  return (
    <div className="slider-for-capitol-annex">
      <div className="button" onClick={() => props.setActiveGallery(0)}></div>
      <div className="button_1" onClick={nextImage}></div>
      <div className="button_2" onClick={previousImage}></div>
      <img src={props.items[props.activeGallery - 1].filename} alt="abc"></img>
    </div>
  )
}

export default SliderForProject
