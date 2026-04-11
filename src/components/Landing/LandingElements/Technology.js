import React from 'react'
import './Technology.css'

const Technology = () => {
  return (
    <div className="landing-technology">
      <div className="container">
        <div className="landing-technology-color-filter"></div>
        <div className="landing-technology-content-container">
          <div className="landing-technology-content-image">
            <img
              src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
              alt="abc"
            ></img>
          </div>
          <div className="landing-technology-content-text">
            <div className="landing-technology-content-text-name-block">
              02. MODERNE OPLOSSINGEN
            </div>
            <div className="landing-technology-content-text-title">
              Innovatief en praktisch in balans
            </div>
            <div className="landing-technology-content-text-body">
              Moderne technieken en oplossingen vormen de kern van hoe wij
              renovatie- en technische projecten aanpakken. Onze teams
              combineren de nieuwste methoden met praktische ervaring om
              betrouwbare en duurzame resultaten te garanderen. Door innovatieve
              tools, trainingsprogramma’s en efficiënte werkwijzen te
              implementeren, zorgen wij ervoor dat projecten veiliger en sneller
              worden uitgevoerd. Tegelijkertijd blijven wij trouw aan bewezen
              standaarden die hun waarde in de praktijk hebben bewezen. Deze
              combinatie van innovatie en betrouwbaarheid onderscheidt ons echt
              in de sector.
            </div>
            <button className="landing-technology-content-text-bottom">
              MEER WETEN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
