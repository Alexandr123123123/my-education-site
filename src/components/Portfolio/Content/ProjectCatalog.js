import React from 'react'
import { useState } from 'react'
import './ProjectCatalog.css'
import ProjectCard from './ProjectCard'

const Content = () => {
  const [projectCards, setProjectCards] = useState([
    {
      id: 1,
      projectName: '110 East',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_6.jpg`,
      text: 'Stiles | Shorenstein',
      location: 'Charlotte, NC',
    },
    {
      id: 2,
      projectName: '803 Waimanu',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_7.jpg`,
      text: 'Coastal Rim Properties',
      location: 'Honolulu, HI',
    },
    {
      id: 3,
      projectName: 'ABIA Consolidated Maintenance Facility',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_8.jpg`,
      text: 'Austin Bergstrom International Airport',
      location: 'Austin, TX',
    },
    {
      id: 4,
      projectName: 'Aegis Ashore Pacific Missile Range Facility',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_9.jpg`,
      text: 'Naval Facilities Engineering Command (NAVFAC)',
      location: 'Kekaha, HI',
    },
    {
      id: 5,
      projectName: 'Aktina Renewable Power Project',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_10.jpg`,
      text: 'Tokyo Gas America, Ltd.',
      location: 'Wharton County, TX',
    },
    {
      id: 6,
      projectName: 'Alameda County Juvenile Justice Center',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_11.jpg`,
      text: 'Alameda County',
      location: 'San Leandro, CA',
    },
    {
      id: 7,
      projectName: 'Anaheim Convention Center Grand Plaza',
      projectPhoto: `${process.env.PUBLIC_URL}/src/image_12.jpg`,
      text: 'City of Anaheim',
      location: 'Anaheim, CA',
    },
  ])

  return (
    <div className='portfolio-project-catalog'>
      <div className="portfolio-project-catalog-body-container">
        <div className="portfolio-project-catalog-body">
          {projectCards.map((projectCard, index) => (
            <ProjectCard
              projectName={projectCard.projectName}
              projectPhoto={projectCard.projectPhoto}
              text={projectCard.text}
              location={projectCard.location}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
