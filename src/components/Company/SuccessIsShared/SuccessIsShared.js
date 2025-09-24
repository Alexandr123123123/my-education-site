import React from 'react'
import './SuccessIsShared.css'
import Navigation from './Navigation'
import PhotoAndQuickFacts from './PhotoAndQuickFacts'

const SuccessIsShared = () => {
  return (
    <div className="success-is-shared">
      <div className="success-is-shared-body">
        <Navigation />
        <div className="success-is-shared-body-title">Succes wordt gedeeld</div>
        <div className="success-is-shared-body-subtitle">
          Toegewijd. Verbonden. Betrokken.
        </div>
        <div className="success-is-shared-body-text">
          Sinds onze oprichting wordt Rosendin gedreven om een positieve impact
          te hebben op de gemeenschappen waar we wonen en werken. Door een
          cultuur die wordt gemotiveerd door prestaties, competentie en gedeeld
          eigenaarschap, begrijpen onze teams hun waarde en voeren ze uit met
          verantwoordelijkheid, aansprakelijkheid en trots. Ons succes wordt
          aangedreven door een “alles op alles” mentaliteit, wat op zijn beurt
          het succes van de klant garandeert.
        </div>
        <button className="success-is-shared-body-button">
          WAAROM ROSENDIN
        </button>
      </div>
      <PhotoAndQuickFacts />
    </div>
  )
}

export default SuccessIsShared
