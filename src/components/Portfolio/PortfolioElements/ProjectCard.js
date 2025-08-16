import React from 'react'
import './ProjectCard.css'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className='project-card-container'>
        <div className="project-image">
          <div className="project-image-container">
            <img src={props.projectPhoto} alt="abc"></img>
          </div>
        </div>
        <div className="project-text">
          <NavLink to="/company" className="project-card-link">
            {props.projectName}
          </NavLink>
        </div>
        <div className="project-description">
          STAAT CALIFORNIË, DEPARTEMENT VAN ALGEMENE DIENSTEN SACRAMENTO, CA
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
