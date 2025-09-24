import React from 'react'
import './TitleScreen.css'
import WhatWeDoMenu from '../../WhatWeDo/WhatWeDoElements/WhatWeDoMenu'

const TitleScreen = () => {
  return (
    <div className='company-title-screen'>
        <div className="company-title-screen-content">
        <WhatWeDoMenu/>
        <div className="company-title-screen-content-text">BEDRIJF</div>
      </div>
    </div>
  )
}

export default TitleScreen