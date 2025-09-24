import React from 'react'
import { NavLink } from 'react-router-dom'
import './WhatWeDo.css'
import TitleScreen from './TitleScreen/TitleScreen'
import MarketSectors from './MarketSectors/MarketSectors'
import MarketSectorCart from './MarketSectors/MarketSectorCard'
import CoreServices from './CoreServices/CoreServices'
import ValueServices from './ValueServices/ValueServices'

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <TitleScreen />
      <MarketSectors />
      <CoreServices />
      <ValueServices />
    </div>
  )
}

export default WhatWeDo
