import React from 'react'
import { useState } from 'react'
import './PhotoAndQuickFacts.css'
import QuickFacts from '../QuickFacts/QuickFacts'

const PhotoAndQuickFacts = () => {
  return (
    <div className="photo-and-quick-facts">
      <div className="photo-and-quick-facts-body">
        <div className="photo-and-quick-facts-body-image-1">
          <img
            src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
            alt="abc"
          ></img>
          <div className="photo-and-quick-facts-body-image-2">
            <img
              src={`${process.env.PUBLIC_URL}/src/worker_2.png`}
              alt="abc"
            ></img>
          </div>
        </div>
        {/* <div className="photo-and-quick-facts-catalog">
          <QuickFacts />
        </div> */}
      </div>
    </div>
  )
}

export default PhotoAndQuickFacts
