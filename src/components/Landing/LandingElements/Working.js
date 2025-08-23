import React from 'react'
import './Working.css'

const Working = () => {
  return (
    <div className="landing-working">
      <div className="container">
        <div className="landing-working-name">04. WERKEN BIJ ROSENDIN</div>
        <div className="landing-working-title">
          Niet zomaar een baan. Een toekomst.
        </div>
        <div className="landing-working-content-container">
            <div className='landing-working-fact-table'>
                <div className='landing-working-photo-around-table'>
                    <img
              src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
              alt="abc"
            ></img>
                </div>
                <div className='landing-working-fact-table-item'>
                    <div className='landing-working-fact-table-item-top'>#5</div>
                    <div className='landing-working-fact-table-item-bottom'>Beoordeeld als een van de beste werkplekken in de Bay Area</div>
                </div>
                <div className='landing-working-fact-table-item'>
                    <div className='landing-working-fact-table-item-top'>8,000+</div>
                    <div className='landing-working-fact-table-item-bottom'>Werknemers</div>
                </div>
                <div className='landing-working-fact-table-item'>
                    <div className='landing-working-fact-table-item-top'>$2.8B</div>
                    <div className='landing-working-fact-table-item-bottom'>Jaarlijkse inkomsten</div>
                </div>
            </div>
          <div className="landing-working-content-body">
            Ons team bestaat uit unieke individuen die de intelligentie, het
            talent en de vaardigheden meebrengen die nodig zijn om van Rosendin
            een van de beste elektrotechnische aannemers van het land te maken.
            Als jij hebt wat nodig is om je bij ons aan te sluiten, horen we
            graag van je.
          </div>
          <button className="landing-working-content-button">
            Carrière
          </button>
        </div>
      </div>
    </div>
  )
}

export default Working
