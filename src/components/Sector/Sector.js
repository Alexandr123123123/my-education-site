import React from 'react'
import './Sector.css'
import TitleScreen from './SectorElements/TitleScreen'
import Design from './SectorElements/Design'
import ProjectTypes from './SectorElements/ProjectTypes'
import ProjectTypesAbout from './SectorElements/ProjectTypesAbout'
import QuickFacts from './SectorElements/QuickFacts'
import RelatedProjects from './SectorElements/RelatedProjects'

const Sector = () => {
  return (
    <div>
      <TitleScreen/>
      <Design/>
      <ProjectTypes/>
      <ProjectTypesAbout/>
      <QuickFacts/>
      <RelatedProjects/>
    </div>
  )
}

export default Sector