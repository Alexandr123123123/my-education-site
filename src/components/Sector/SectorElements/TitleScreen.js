import React from 'react'
import './TitleScreen.css'
import WhatWeDoMenu from '../../WhatWeDo/WhatWeDoElements/WhatWeDoMenu'

const TitleScreen = () => {
  return (
    <div className="sector-title-screen">
      <div className="sector-title-screen-content">
        <WhatWeDoMenu />
        <div className="sector-title-screen-content-body">
          <div className='sector-title-screen-content-body-image'></div>
          Audio/Visual systemen
        </div>
      </div>
    </div>
  )
}

export default TitleScreen
