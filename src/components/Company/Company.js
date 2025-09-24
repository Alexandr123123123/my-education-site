import React from 'react'
import './Company.css'
import TitleScreen from './TitleScreen/TitleScreen'
import SuccessIsShared from './SuccessIsShared/SuccessIsShared'
import OurMission from './OurMission/OurMission'
import OurVision from './OurVision/OurVision'
import OurCoreValues from './OurCoreValues/OurCoreValues'
import Affiliations from './Affiliations/Affiliations'

const Company = () => {
  return (
    <div className="company">
      <TitleScreen />
      <SuccessIsShared />
      <OurMission />
      <OurVision />
      <OurCoreValues />
      <Affiliations />
    </div>
  )
}

export default Company
