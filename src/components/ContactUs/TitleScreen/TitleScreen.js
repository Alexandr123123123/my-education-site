import React from 'react'
import './TitleScreen.css'
import WhatWeDoMenu from '../../WhatWeDo/WhatWeDoElements/WhatWeDoMenu'

const TitleScreen = () => {
  return (
      <div className="contact-us-title-screen">
        <div className="contact-us-title-screen-content">
          <WhatWeDoMenu />
          <div className="contact-us-title-screen-content-text">
            Contacten
          </div>
        </div>
      </div>
  )
}

export default TitleScreen
