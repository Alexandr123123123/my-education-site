import React from 'react'
import { useState } from 'react'
import './ProjectCardDetails.css'

const ProjectCardDetails = (props) => {
  // const [cardItems, setCardItems] = useState([
  //   {
  //     id: 1,
  //     leftItem: `Location`,
  //     rigthItem: 'Sacramento, CA',
  //   },
  //   {
  //     id: 2,
  //     leftItem: `Client`,
  //     rigthItem: 'State of California Department of General Services',
  //   },
  //   {
  //     id: 3,
  //     leftItem: `General Contractor`,
  //     rigthItem: 'Hensel Phelps Construction',
  //   },
  //   {
  //     id: 4,
  //     leftItem: `Duration`,
  //     rigthItem: '36 Months',
  //   },
  //   {
  //     id: 5,
  //     leftItem: `Budget`,
  //     rigthItem: '$52 Milliont',
  //   },
  //   {
  //     id: 6,
  //     leftItem: `Size`,
  //     rigthItem: '472,600 SF',
  //   },
  // ])

  return (
    <div className="project-body-project-card-details">
      {/*  */}
      <div className="project-body-project-card-details-header">
        <div className="project-body-project-card-details-arrow-container">
          <div className="project-body-project-card-details-arrow"></div>
          <div>PROJECT DETAILS</div>
        </div>
        <div className="project-body-project-card-details-information-icon"></div>
      </div>
      {/*  */}
      <div className="project-body-project-card-details-body-name">
        {props.title[0].textA}
      </div>
      <div className="project-body-project-card-details-body-subscribe-project">
        {props.title[0].textB}
      </div>
      {/*  */}
      {props.cardItems.map((item, index) => (
        <div key={item.id}>
          <div className="project-body-project-card-details-body-line"></div>
          <div className="project-body-project-card-details-body-item-container">
            <div className="project-body-project-card-details-body-item-left">{item.leftItem}</div>
            <div className="project-body-project-card-details-body-item-right">{item.rigthItem}</div>
          </div>
        </div>
      ))}
      <div className="project-body-project-card-details-button">
        <div className="project-body-project-card-details-titlle">
          DOWNLOAD PROJECT SHEET
        </div>
        <div className="project-body-project-card-details-icon">a</div>
      </div>
    </div>
  )
}

export default ProjectCardDetails
