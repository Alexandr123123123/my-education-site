import React from 'react'
import './Portfolio.css'
import ProjectCard from './PortfolioElements/ProjectCard'
import SliderForProjectCatalog from './PortfolioElements/SliderForPortfolio'

const Portfolio = () => {
  return (
    <div>
      <SliderForProjectCatalog />
      <div className="projects-container">
        <ProjectCard
          projectName={'110 East'}
          projectPhoto={'./src/image_6.jpg'}
        />
        <ProjectCard
          projectName={'803 Waimanu'}
          projectPhoto={'./src/image_7.jpg'}
        />
        <ProjectCard
          projectName={'ABIA Consolidated Maintenance Facility'}
          projectPhoto={'./src/image_8.jpg'}
        />
        <ProjectCard
          projectName={'Aegis Ashore Pacific Missile Range Facility'}
          projectPhoto={'./src/image_9.jpg'}
        />
        <ProjectCard
          projectName={'Aktina Renewable Power Project'}
          projectPhoto={'./src/image_10.jpg'}
        />
        <ProjectCard
          projectName={'Alameda County Juvenile Justice Center'}
          projectPhoto={'./src/image_11.jpg'}
        />
        <ProjectCard
          projectName={'Anaheim Convention Center Grand Plaza'}
          projectPhoto={'./src/image_12.jpg'}
        />
      </div>
    </div>
  )
}

export default Portfolio
