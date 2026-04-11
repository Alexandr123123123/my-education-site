import React from 'react'
import './BodyProject.css'
import DescriptionBodyProject from './DescriptionBodyProject'
import WorkArea from './WorkArea'
import PhotoCredits from './PhotoCredits'
import ProjectCardDetails from './ProjectCardDetails'

const BodyProject = (props) => {
  // console.log(props)
  return (
    <div className="project-body-project">
      <div className="project-body-project-left">
        <DescriptionBodyProject projectSummary={props.projectSummary}/>
        <WorkArea />
        <PhotoCredits photoCredits={props.photoCredits}/>
      </div>
      <div className="project-body-project-right">
        <ProjectCardDetails title={props.title} cardItems={props.cardItems}/>
      </div>
    </div>
  )
}

export default BodyProject
