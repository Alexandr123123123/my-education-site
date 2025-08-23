import React from 'react'
import './About.css'
import Brand from './Brand'

const About = () => {
  return (
    <div>
      <div className="landing-main-container">
        <div className="landing-about-history">
          <div className="landing-about-history-content-block">
            <div className="landing-about-history-name-content-block">
              01. WAAROM ROSENDIN
            </div>
            <div className="landing-about-history-content-block-title">
              Een eeuw van gedeeld succes
            </div>
            <div className="landing-about-history-content-block-body">
              Sinds 1919 hebben wij onze reputatie opgebouwd door betrouwbare
              elektrische en communicatiesystemen te leveren, waarde te creëren
              voor klanten en mensen te ondersteunen in een veilige, diverse en
              inclusieve omgeving. Wij werken samen met klanten aan zeer
              veeleisende bouwprojecten, gewaardeerd om onze kennis, schaal,
              kwaliteit en veiligheid. Met een gevoel van gedeelde toewijding
              zet ons hele team zich in voor relaties die blijvende resultaten
              opleveren.
            </div>
            <button className="landing-about-history-content-block-button">
              MEER WETEN
            </button>
          </div>
        </div>
        <Brand />
      </div>
    </div>
  )
}

export default About
