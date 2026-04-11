import React from 'react'
import { useState } from 'react'
import './ProjectCatalog.css'
import ProjectCard from './ProjectCard'

const Content = () => {
  const [projectCards, setProjectCards] = useState([
    {
      id: 1,
      projectName: '110 East',
      projectPhoto: `${process.env.PUBLIC_URL}/src/project/image_6.jpg`,
      text: 'Stiles | Shorenstein',
      location: 'Charlotte, NC',
      linkSite: '/my-education-site/110-east',
    },
    {
      id: 2,
      projectName: 'Lescluzestraat',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_1.jpg`,
      text: 'Coastal Rim Properties',
      location: 'Honolulu, HI',
      linkSite: '/my-education-site/lescluzestraat',
    },
    {
      id: 3,
      projectName: 'Boudewijn',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_2/1.jpg`,
      text: 'Austin Bergstrom International Airport',
      location: 'Austin, TX',
      linkSite: '/my-education-site/boudewijn',
    },
    {
      id: 4,
      projectName: 'Edegem',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_3/1.jpg`,
      text: 'Naval Facilities Engineering Command (NAVFAC)',
      location: 'Kekaha, HI',
      linkSite: '/my-education-site/edegem',
    },
    {
      id: 5,
      projectName: 'Potter',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_4/1.jpg`,
      text: 'Tokyo Gas America, Ltd.',
      location: 'Wharton County, TX',
      linkSite: '/my-education-site/potter',
    },
    {
      id: 6,
      projectName: 'Heideland',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_5/1.jpg`,
      text: 'Alameda County',
      location: 'San Leandro, CA',
      linkSite: '/my-education-site/heideland',
    },
    {
      id: 7,
      projectName: 'Oogststraat',
      projectPhoto: `${process.env.PUBLIC_URL}/src/projects/project_6/1.jpg`,
      text: 'City of Anaheim',
      location: 'Anaheim, CA',
      linkSite: '/my-education-site/oogststraat',
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
              linkSite={projectCard.linkSite}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
