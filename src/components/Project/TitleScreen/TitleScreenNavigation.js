import React from 'react'
import './TitleScreenNavigation.css'

const TitleScreenNavigation = (props) => {
  return (
    <div className="project-project-elrments-navigation">
      {/*  */}
      <div className="project-project-elrments-navigation-container">
        {props.items.slice(0, 3).map((item, index) => (
          <div className="project-project-elrments-navigation-gallery">
            <img
              key={item.id}
              src={item.filename}
              alt="img"
              onClick={() => props.setActiveGallery(index + 1)}
            />
          </div>
        ))}
      </div>
      <div className='project-project-elrments-navigation-counter'>Gallery ({props.items.length})</div>
      {/*  */}
    </div>
  )
}

export default TitleScreenNavigation
