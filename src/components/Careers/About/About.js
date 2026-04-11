import React from 'react'
import './About.css'
import Navigation from './Navigation'
import PhotoAndQuickFacts from './PhotoAndQuickFacts'

const About = () => {
  return (
    <div className="careers-about">
      <div className="careers-about-body">
        <Navigation />
        <div className="careers-about-body-slogan">Word deel van iets</div>
        <div className="careers-about-body-title">
          Word deel van iets groters
        </div>
        <div className="careers-about-body-text-1">
          Ons succes wordt gedragen door onze mensen. We worden verbonden door
          een gezamenlijke visie op de toekomst en een gedeeld
          verantwoordelijkheidsgevoel. Samen doen we er alles aan om de groei
          van ons bedrijf… en jouw carrière te ondersteunen.
        </div>
        <div className="careers-about-body-text-2">
          De veiligheid van medewerkers, klanten, partners en de gemeenschap is
          een van onze kernwaarden. De basis van ons werk is het principe We
          Care. Dit weerspiegelt onze toewijding aan integriteit en het creëren
          van een omgeving waarin iedereen veilig kan werken, zich kan
          ontwikkelen en elkaar respecteert. We bouwen aan een cultuur van zorg,
          samenwerking, aandacht, innovatie en kwaliteit in alles wat we doen.
        </div>
        <button className="careers-about-body-button">
          Openstaande vacatures
        </button>
      </div>
      <PhotoAndQuickFacts />
    </div>
  )
}

export default About
