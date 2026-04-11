import React from 'react'
import './PhotoCredits.css'

const PhotoCredits = (props) => {
  return (
    <div className="project-body-project-photo-credits">
      <div className="project-body-project-photo-credits-header">Photo Credits</div>
      <div className="project-body-project-photo-credits-body">
        {props.photoCredits[0].textA} <br />
        {props.photoCredits[0].textB}
      </div>
    </div>
  )
}

export default PhotoCredits