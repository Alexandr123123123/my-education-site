import React from 'react'
import './Foundation_2.css'

const Foundation_2 = () => {
  return (
    <div className="community-foundation_2">
      <div className="community-foundation_2-content-container">
        {/* left */}
        <div className="community-foundation_2-body-left">
            <img
              src={`${process.env.PUBLIC_URL}/src/foundation.png`}
              alt="abc"
            ></img>
        </div>
        {/* right */}
        <div className="community-foundation_2-body">
          <div className="community-foundation_2-body-abc"></div>
          <div className="community-foundation_2-body-right">
            <div className="community-foundation_2-body-right-container">
              <div className="community-foundation_2-body-right-title">
                Impact. Versterk. Inspireer.
              </div>
              <div className="community-foundation_2-body-right-text">
                De Rosendin Foundation (
                <span className="community-foundation_2-body-right-text-link">
                  www.therosendinfoundation.org
                </span>
                ) is opgericht om een positieve impact te hebben op
                gemeenschappen, mensen te versterken en innovatie te inspireren.
              </div>
              <button className="community-foundation_2-body-right-bottom">
                MEER WETEN
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="community-foundation_2-line"></div>
    </div>
  )
}

export default Foundation_2