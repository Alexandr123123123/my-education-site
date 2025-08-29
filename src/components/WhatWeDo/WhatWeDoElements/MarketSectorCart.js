import React from 'react'
import './MarketSectorCart.css'

const MarketSectorCart = (props) => {
  return (
    <div className="market-sector-cart">
      <div className="market-sector-cart-image-container">
        <img src={props.imagePath} alt="abc"></img>
        <div className="market-sector-cart-content">
          <div className="market-sector-cart-orange-line"></div>
          <div className="market-sector-cart-name-sector">
            {props.sectorName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketSectorCart
