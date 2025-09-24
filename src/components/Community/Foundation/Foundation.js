import React from 'react'
import './Foundation.css'

const Foundation = () => {
  return (
    <div className="community-foundation">
      <div className="community-foundation-content-container">
        <div className="community-foundation-body">
          {/* left */}
          <div className="community-foundation-body-left">
            <img
              src={`${process.env.PUBLIC_URL}/src/foundation.png`}
              alt="abc"
            ></img>
          </div>
          {/* right */}
          <div className="community-foundation-body-right">
            <div className="community-foundation-body-right-container">
              <div className="community-foundation-body-right-title">
                Impact. Versterk. Inspireer.
              </div>
              <div className="community-foundation-body-right-text">
                De Rosendin Foundation (
                <span className="community-foundation-body-right-text-link">
                  www.therosendinfoundation.org
                </span>
                ) is opgericht om een positieve impact te hebben op
                gemeenschappen, mensen te versterken en innovatie te inspireren.
              </div>
              <button className="community-foundation-body-right-bottom">
                MEER WETEN
              </button>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="community-foundation-line"></div>
    </div>
  )
}

export default Foundation
