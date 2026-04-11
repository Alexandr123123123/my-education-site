import React from 'react'
import './ProjectCard.css'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className="portfolio-project-card">
      {/* image */}
      <div className="portfolio-project-card-image">
        <img src={props.projectPhoto} alt="abc"></img>
      </div>
      {/* description */}
      <NavLink to={props.linkSite} className="portfolio-project-card-name">{props.projectName}</NavLink>
      <div className="portfolio-project-card-text">
        {props.text}
        <br></br>
        {props.location}
      </div>
      {/*  */}
      <div className="portfolio-project-card-line-container">
        <div className="portfolio-project-card-line"></div>
      </div>
    </div>
  )
}

export default ProjectCard
