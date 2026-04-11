import React from 'react'
import './Foundation_1.css'

const Foundation_1 = () => {
  return (
    <div className="community-foundation_1">
      <div className="community-foundation_1-content-container">
        {/* left */}
        <div className="community-foundation_1-body-left">
          <div className="community-foundation_1-body-left-container">
            <img
              src={`${process.env.PUBLIC_URL}/src/foundation.png`}
              alt="abc"
            ></img>
          </div>
        </div>
        {/* right */}
        <div className="community-foundation_1-body">
          <div className="community-foundation_1-body-abc"></div>
          <div className="community-foundation_1-body-right">
            <div className="community-foundation_1-body-right-container">
              <div className="community-foundation_1-body-right-title">
                Impact. Versterk. Inspireer.
              </div>
              <div className="community-foundation_1-body-right-text">
                Het fonds (
                <span className="community-foundation_1-body-right-text-link">
                  www.therosendinfoundation.org
                </span>
                ) is opgericht om een positieve impact te hebben op
                gemeenschappen, mensen te versterken en innovatie te stimuleren.
              </div>
              <button className="community-foundation_1-body-right-bottom">
                MEER WETEN
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="community-foundation_1-line"></div>
    </div>
  )
}

export default Foundation_1
