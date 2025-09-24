import React from 'react'
import './About.css'
import Navigation from './Navigation'
import PhotoAndQuickFacts from './PhotoAndQuickFacts'

const About = () => {
  return (
    <div className="community-about">
      <div className="community-about-body">
        <Navigation />
        <div className="community-about-body-slogan">
          Gemeenschappen Opbouwen
        </div>
        <div className="community-about-body-title">
          Een Helpende Hand Bieden
        </div>
        <div className="community-about-body-text">
          Een verschil maken in onze gemeenschappen is een prioriteit bij
          Rosendin, en we zetten ons in om anderen te dienen met onze tijd,
          talenten en financiële middelen. We steunen actief organisaties die
          mensen helpen herstellen, groeien en een beter leven ervaren.
        </div>
        <button className="community-about-body-button">Wie Wij Steunen</button>
      </div>
      <PhotoAndQuickFacts />
    </div>
  )
}

export default About
