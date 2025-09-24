import React from 'react'
import './OurMission.css'

const OurMission = () => {
  return (
    <div className="company-our-mission">
      <div className="company-our-mission-top-element"></div>
      <div className="company-our-mission-body">
        {/* left */}
        <div className="company-our-mission-left">
          <div className="company-our-mission-left-name">
            Onze Missie
          </div>
        </div>
        {/* right */}
        <div className="company-our-mission-right">
          <div class="company-our-mission-right-slogan-block">
            <div>BOUWKWALITEIT.</div>
            <div>BOUWWAARDE.</div>
            <div class="company-our-mission-right-slogan-block-orange-item">
              MENSEN BOUWEN.
            </div>
          </div>
          <div className="company-our-mission-right-text">
            SFO heeft Terminal 1 herontwikkeld tot de Harvey Milk Terminal om te
            voldoen aan de behoeften van de moderne reiziger en de gastervaring
            te revolutioneren. Harvey Milk Terminal 1 verhoogt SFO’s standaard
            in het bieden van een reiservaring van wereldklasse die
            milieuvriendelijk is en zal naar verwachting voldoen aan of zelfs de
            bekroonde milieunormen van Terminal 2 en Terminal 3 Boarding Area E
            overtreffen.
          </div>
        </div>
        {/*  */}
      </div>
      <div className="company-our-mission-bottom-element"></div>
    </div>
  )
}

export default OurMission
