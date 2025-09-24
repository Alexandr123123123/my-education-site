import React from 'react'
import './TitleScreen.css'
import WhatWeDoMenu from '../../WhatWeDo/WhatWeDoElements/WhatWeDoMenu'

const TitleScreen = () => {
  return (
    <div className="community-title-screen">
      <div className="community-title-screen-content">
        <WhatWeDoMenu />
        <div className="community-title-screen-content-text">gemeenschap</div>
      </div>
    </div>
  )
}

export default TitleScreen
