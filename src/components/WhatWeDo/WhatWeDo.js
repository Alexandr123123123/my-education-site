import React from 'react'
import { NavLink } from 'react-router-dom'
import './WhatWeDo.css'
import TitleScreen from './WhatWeDoElements/TitleScreen'
import MarketSectors from './WhatWeDoElements/MarketSectors'
import MarketSectorCart from './WhatWeDoElements/MarketSectorCart'
import CoreServices from './WhatWeDoElements/CoreServices'
import ValueServices from './WhatWeDoElements/ValueServices'


const WhatWeDo = () => {
  return (
    <div className="what-we-do">
        <TitleScreen/>
        <MarketSectors/>
        <CoreServices/>
        <ValueServices/>
    </div>
  )
}

export default WhatWeDo
