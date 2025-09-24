import React from 'react'
import { NavLink } from 'react-router-dom'
import './MarketSectorCard.css'

const MarketSectorCart = (props) => {
  return (
    <div className="what-we-do-market-sector-card">
      <NavLink
        to={props.link}
        className="what-we-do-market-sector-card-link"
      >
        <div className="what-we-do-market-sector-card-orange-line"></div>
        <div className="what-we-do-market-sector-card-image">
          <img src={props.imagePath} alt="abc"></img>
          <div className="what-we-do-market-sector-card-layer">
            <div className="what-we-do-market-sector-card-layer-name">
              {props.sectorName}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default MarketSectorCart
