import React from 'react'
import './OurMission.css'

const OurMission = () => {
  return (
    <div className="company-our-mission">
      <div className="company-our-mission-top-element"></div>
      <div className="company-our-mission-body">
        {/* left */}
        <div className="company-our-mission-left">
          <div className="company-our-mission-left-name">Onze Missie</div>
        </div>
        {/* right */}
        <div className="company-our-mission-right">
          <div class="company-our-mission-right-slogan-block">
            <div>BOUWKwaliteit.</div>
            <div>WAARDE IN ELK PROJECT.</div>
            <div class="company-our-mission-right-slogan-block-orange-item">
              RUIMTES DIE LEVEN.
            </div>
          </div>
          <div className="company-our-mission-right-text">
            Wij transformeren woningen en ruimtes om te voldoen aan de eisen van
            modern comfort en функциональность. Door renovatie en technische
            oplossingen te combineren, creëren wij omgevingen die niet alleen
            esthetisch aantrekkelijk zijn, maar ook duurzaam en praktisch in
            gebruik. Onze aanpak verhoogt de standaard van wonen door kwaliteit,
            veiligheid en efficiëntie centraal te stellen. Elk project wordt
            uitgevoerd met aandacht voor detail en met respect voor zowel de
            ruimte als de mensen die erin leven.
          </div>
        </div>
        {/*  */}
      </div>
      <div className="company-our-mission-bottom-element"></div>
    </div>
  )
}

export default OurMission
