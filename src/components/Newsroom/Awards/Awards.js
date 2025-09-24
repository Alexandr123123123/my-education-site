import React from 'react'
import './Awards.css'
import AwardsCards from './AwardsCards'

const Awards = () => {
  return (
    <div className="newsroom-awards">
      {/* top */}
      <div className="newsroom-awards-top">
        <div className="newsroom-awards-top-name">
          Laatste carrière nieuws & pers
        </div>
        <div className="newsroom-awards-top-learn-more-container">
          <div className="newsroom-awards-learn-more-block">
            <div className="newsroom-awards-learn-more-text">
              Bekijk al het carrièrenieuws & pers
            </div>
            <div className="newsroom-awards-learn-more-arrow"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <AwardsCards />
    </div>
  )
}

export default Awards
