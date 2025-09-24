import React from 'react'
import WhatWeDoMenu from '../../WhatWeDo/WhatWeDoElements/WhatWeDoMenu'
import './TitleScreen.css'

const TitleScreen = () => {
  return (
    <div className="newsroom-title-screen">
      <div className="newsroom-title-screen-content">
        <WhatWeDoMenu />
        <div className="newsroom-title-screen-content-text">bedrijfs nieuws</div>
      </div>
    </div>
  )
}

export default TitleScreen
