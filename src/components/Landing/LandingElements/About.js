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
              01. OVER ONS
            </div>
            <div className="landing-about-history-content-block-title">
              Betrouwbare partner voor renovatie en techniek
            </div>
            <div className="landing-about-history-content-block-body">
              We hebben een reputatie als betrouwbare partner opgebouwd door
              renovatie- en technische werkzaamheden van hoge kwaliteit en met
              oog voor detail uit te voeren. We creëren waarde voor onze klanten
              door comfort, veiligheid en duurzaamheid in elk project te
              garanderen. We werken samen met opdrachtgevers aan complexe
              uitdagingen en hechten grote waarde aan professionaliteit, schaal
              en kwaliteit van uitvoering. Ons team is verenigd door een
              gemeenschappelijk doel: langdurige relaties opbouwen en duurzame
              resultaten behalen.
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
