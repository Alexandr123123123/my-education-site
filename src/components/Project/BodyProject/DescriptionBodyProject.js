import React from 'react'
import './DescriptionBodyProject.css'

const DescriptionBodyProject = (props) => {
  return (
    <div className='project-body-project-description-body-project'>
      <div className="project-body-project-description-body-project-title">Projectoverzicht</div>
      <div className="project-body-project-description-body-project-summary">
        {props.projectSummary[0].text}
      </div>
    </div>
  )
}

export default DescriptionBodyProject
