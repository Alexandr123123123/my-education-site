import React from 'react'
import './Working.css'

const Working = () => {
  return (
    <div className="landing-working">
      <div className="container">
        <div className="landing-working-name">04. WERKEN BIJ ONS</div>
        <div className="landing-working-title">
          Niet zomaar een baan. Een toekomst.
        </div>
        <div className="landing-working-content-container">
          <div className="landing-working-fact-table">
            <div className="landing-working-photo-around-table">
              <img
                src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
                alt="abc"
              ></img>
            </div>
            <div className="landing-working-fact-table-item">
              <div className="landing-working-fact-table-item-top">#5</div>
              <div className="landing-working-fact-table-item-bottom">
                Beoordeeld als een van de beste werkplekken in de Bay Area
              </div>
            </div>
            <div className="landing-working-fact-table-item">
              <div className="landing-working-fact-table-item-top">8,000+</div>
              <div className="landing-working-fact-table-item-bottom">
                Werknemers
              </div>
            </div>
            <div className="landing-working-fact-table-item">
              <div className="landing-working-fact-table-item-top">$2.8B</div>
              <div className="landing-working-fact-table-item-bottom">
                Jaarlijkse inkomsten
              </div>
            </div>
          </div>
          <div className="landing-working-content-body">
            Ons team bestaat uit vakmensen met ervaring, verantwoordelijkheid en
            oog voor kwaliteit. Samen werken wij aan renovatie- en technische
            projecten die comfort en betrouwbaarheid garanderen voor onze
            klanten. Wij investeren in ontwikkeling, samenwerking en een
            professionele werkomgeving waarin iedereen kan groeien. Denk jij dat
            jij bij ons team past? Dan horen wij graag van je.
          </div>
          <button className="landing-working-content-button">Carrière</button>
        </div>
      </div>
    </div>
  )
}

export default Working
