import React from 'react'
import './WorkArea.css'
import logo from '../../../assets/category.png'

const WorkArea = () => {
  return (
    <div className='project-body-project-work-area'>
      <div className="project-body-project-work-area-item">
        <img src={logo} alt="abc" />
        <div className="project-body-project-work-area-item-name">SECTORS</div>
        <div className="project-body-project-work-area-item-category">Institutional</div>
      </div>
      <div className="project-body-project-work-area-item">
        <img src={logo} alt="abc" />
        <div className="project-body-project-work-area-item-name">OFFICES</div>
        <div className="project-body-project-work-area-item-category">Sacramento, CA</div>
      </div>
      <div className="project-body-project-work-area-item">
        <img src={logo} alt="abc" />
        <div className="project-body-project-work-area-item-name">SERVICES</div>
        <div className="project-body-project-work-area-item-category">Engineering</div>
        <div className="project-body-project-work-area-item-category">Building Information Modeling</div>
      </div>
      <div className="project-body-project-work-area-item">
        <img src={logo} alt="abc" />
        <div className="project-body-project-work-area-item-name">VALUE ADD</div>
        <div className="project-body-project-work-area-item-category">Design-Build</div>
        <div className="project-body-project-work-area-item-category">Prefabrication</div>
      </div>
    </div>
  )
}

export default WorkArea
