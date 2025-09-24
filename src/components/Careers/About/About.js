import React from 'react'
import './About.css'
import Navigation from './Navigation'
import PhotoAndQuickFacts from './PhotoAndQuickFacts'

const About = () => {
  return (
    <div className="careers-about">
      <div className="careers-about-body">
        <Navigation />
        <div className="careers-about-body-slogan">
          Je maakt hier deel uit van iets
        </div>
        <div className="careers-about-body-title">
          Je maakt hier deel uit van iets groters
        </div>
        <div className="careers-about-body-text-1">
          Ons succes is geworteld in onze mensen. We komen allemaal samen rond
          een langetermijnvisie en een gevoel van gedeeld eigenaarschap. Als
          groep doen we alles wat nodig is om het succes van ons bedrijf… en
          jouw carrière te waarborgen.
        </div>
        <div className="careers-about-body-text-2">
          De veiligheid van de medewerkers, klanten, partners en leden van de
          gemeenschap van Rosendin is een waarde die al meer dan 100 jaar deel
          uitmaakt van onze geschiedenis. In het hart van wat we doen ligt onze
          kernwaarde: We Care. Deze kernwaarde is gebaseerd op integriteit en
          het creëren van een omgeving waarin onze mensen in staat worden
          gesteld veilig te werken, het beste van zichzelf te laten zien en
          elkaar te respecteren. Rosendin zet zich in voor een onverzettelijke
          focus op Zorg, Delen, Luisteren, Innoveren en Uitblinken.
        </div>
        <button className="careers-about-body-button">
          Openstaande Posities
        </button>
      </div>
      <PhotoAndQuickFacts />
    </div>
  )
}

export default About
