import React from 'react'
import TitleScreen from './TitleScreen/TitleScreen'
import About from './About/About'
import EmployeeSpotlights from './EmployeeSpotlights/EmployeeSpotlights'
import CareerPaths from './CareerPaths/CareerPaths'
import LatestCareerNews from './LatestCareerNewsAndPress/LatestCareerNews'
import TextSlider from './TextSlider/TextSlider'

const Careers = () => {
  return (
    <div className='careers'>
        <TitleScreen/>
        <About/>
        <EmployeeSpotlights/>
        <CareerPaths/>
        <LatestCareerNews/>
        <TextSlider/>
    </div>
  )
}

export default Careers