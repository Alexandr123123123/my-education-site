import React from 'react'
import './Design.css'
import Navigation from './Navigation'

const Design = () => {
  return (
    <div className="sector-design">
      <Navigation />
      <div className="sector-design-content">
        <div className="sector-design-content-left-block">
          <div className="sector-design-content-left-block-title">
            Volledig Ontwerp & Integratie
          </div>
          <div className="sector-design-content-left-block-body">
            Het bekroonde audio/visuele team van Rosendin biedt complete
            audio/video design-build en integratiediensten binnen de meeste
            marktsectoren, waaronder hoogbouwresidenties, horeca & hotels,
            congrescentra, stadions, hightech kantoorgebouwen en
            huurdersverbeteringen, gezondheidszorg, transport en onderwijs. Lees
            meer over de projecten in onze Audio/Visual Systems-portfolio.
          </div>
        </div>
        <div className="sector-design-content-right-block">
            <div className="sector-design-content-right-block-image">
              <div className="sector-design-content-right-block-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
                  alt="abc"
                ></img>
                {/*  */}
                <div className="sector-design-content-right-block-extra-image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/src/worker_2.png`}
                    alt="abc"
                  ></img>
                </div>
                {/*  */}
              </div>
            </div>
        </div>
        
      </div>
      <div className='sector-design-line'></div>
    </div>
  )
}

export default Design
