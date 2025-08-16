import React from 'react'
import './ProjectCardDetails.css'

const ProjectCardDetails = () => {
  return (
    <div className="container-for-project-card-details">
      <div className="header-for-project-card-details">
        <div className='project-details-arrow-container'>
          <div className='project-details-arrow'></div>
          <div>PROJECT DETAILS</div>
        </div>
        <div className='container-for-project-card-details-information-icon'></div>
      </div>
      <div className="project-name">
        10th & O Street Capitol Annex Swing Space
      </div>
      <div className="subscribe-project">
        Temporary facilities for more than 1200 legislative and executive
        elected officials and staff
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">Location</div>
        <div className="item-project-card-right">Sacramento, CA</div>
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">Client</div>
        <div className="item-project-card-right">
          State of California Department of General Services
        </div>
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">General Contractor</div>
        <div className="item-project-card-right">
          Hensel Phelps Construction
        </div>
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">Duration</div>
        <div className="item-project-card-right">36 Months</div>
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">Budget</div>
        <div className="item-project-card-right">$52 Milliont</div>
      </div>
      <div className="line"></div>
      <div className="flex-container-for-item-project-card">
        <div className="item-project-card-left">Size</div>
        <div className="item-project-card-right">472,600 SF</div>
      </div>
      <div className="download-project-sheet-button">
        <div className='download-project-sheet-button-titlle'>DOWNLOAD PROJECT SHEET</div>
        <div className='download-project-sheet-button-icon'>a</div>
      </div>
    </div>
  )
}

export default ProjectCardDetails
