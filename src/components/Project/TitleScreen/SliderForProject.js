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
    <div className="project-project-elements-slider-for-project">
      <div className="project-project-elements-slider-for-project-button" onClick={() => props.setActiveGallery(0)}></div>
      <div className="project-project-elements-slider-for-project-button_1" onClick={nextImage}></div>
      <div className="project-project-elements-slider-for-project-button_2" onClick={previousImage}></div>
      <img src={props.items[props.activeGallery - 1].filename} alt="abc"></img>
    </div>
  )
}

export default SliderForProject
