import React from 'react'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      <div className="featured-projects-container">
        <div className="featured-projects-name">06. UITGELICHTE PROJECTEN</div>
        <div className="featured-projects-line"></div>
        <div className="featured-projects-body">
          <div className="featured-projects-left-block">
            <div className="featured-projects-left-name-project">
              San Francisco International Airport Harvey Milk Terminal 1
              Centrumrenovatie
            </div>
            <div className="featured-projects-left-location-project">
              Locatie: San Francisco, CA
            </div>
            <button className="featured-projects-left-botton">projectdetails</button>
          </div>
          <div className="featured-projects-right-block">
            <div className="featured-projects-right-text">
              SFO heeft Terminal 1 herontwikkeld tot de Harvey Milk Terminal om
              te voldoen aan de behoeften van de moderne reiziger en de
              gastervaring te revolutioneren. Harvey Milk Terminal 1 verhoogt
              SFO’s standaard in het bieden van een reiservaring van
              wereldklasse die milieuvriendelijk is en zal naar verwachting
              voldoen aan of zelfs de bekroonde milieunormen van Terminal 2 en
              Terminal 3 Boarding Area E overtreffen.
            </div>
            <div className="featured-projects-right-table">
              <div className="featured-projects-project-stats">
                PROJECTSTATISTIEKEN
              </div>
              <div className="featured-projects-table-line"></div>
              <div className="featured-projects-right-table-item">
                <div className="featured-projects-right-table-item-left">
                  1.375
                </div>
                <div className="featured-projects-right-table-item-right">
                  Miljoen vierkante voet
                </div>
              </div>
              <div className="featured-projects-table-line"></div>
              <div className="featured-projects-right-table-item">
                <div className="featured-projects-right-table-item-left">
                  $2.4B
                </div>
                <div className="featured-projects-right-table-item-right">
                  Totale bouwwaarde
                </div>
              </div>
              <div className="featured-projects-table-line"></div>
              <div className="featured-projects-right-table-item">
                <div className="featured-projects-right-table-item-left">
                  $201M
                </div>
                <div className="featured-projects-right-table-item-right">
                  Waarde van speciale elektrische systemen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
