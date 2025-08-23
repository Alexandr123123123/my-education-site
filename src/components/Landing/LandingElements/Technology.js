import React from 'react'
import './Technology.css'

const Technology = () => {
  return (
    <div className="landing-technology">
      <div className="container">
        <div className='landing-technology-color-filter'></div>
        <div className="landing-technology-content-container">
          <div className="landing-technology-content-image">
            <img
              src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
              alt="abc"
            ></img>
          </div>
          <div className="landing-technology-content-text">
            <div className="landing-technology-content-text-name-block">
              02. Technologische Innovatie
            </div>
            <div className="landing-technology-content-text-title">
              Een Innovatief Evenwicht
            </div>
            <div className="landing-technology-content-text-body">
              Technologie blijft de manier waarop we werken en onze sector als
              geheel transformeren. Onze teams moeten de behoefte aan innovatie
              in evenwicht brengen met praktische kennis om projectstabiliteit
              te waarborgen. Als marktleider in het ontwikkelen en implementeren
              van nieuwe tools, trainingen en technologieën helpen wij onze
              teams veiliger en efficiënter te werken. Tegelijkertijd blijven
              wij trouw aan de gevestigde standaarden die de tand des tijds
              hebben doorstaan. Deze doelgerichte combinatie van nieuwe en
              beproefde technieken onderscheidt ons werkelijk van de rest.
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
