import React from 'react'
import './TitleScreen.css'
import WhatWeDoMenu from '../WhatWeDoElements/WhatWeDoMenu'

const TitleScreen = () => {
  return (
    <div className="what-we-do-title-screen">
      <div className="what-we-do-title-screen-content">
        <WhatWeDoMenu />
        <div className="what-we-do-title-screen-content-text">WAT WIJ DOEN</div>
      </div>
    </div>
  )
}

export default TitleScreen
