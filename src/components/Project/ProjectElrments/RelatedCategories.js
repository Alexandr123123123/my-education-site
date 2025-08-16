import React from 'react'
import './RelatedCategories.css'
import logo from '../../../assets/category.png'

const RelatedCategories = () => {
  return (
    <div className="related-categories-block">
      <div className="related-categories-block-item">
        <img src={logo} alt='abc'/>
        <div className="name-categori">SECTORS</div>
        <div className="categori">Institutional</div>
      </div>
      <div className="related-categories-block-item">
        <img src={logo} alt='abc'/>
        <div className="name-categori">OFFICES</div>
        <div className="categori">Sacramento, CA</div>
      </div>
      <div className="related-categories-block-item">
        <img src={logo} alt='abc'/>
        <div className="name-categori">SERVICES</div>
        <div className="categori">Engineering</div>
        <div className="categori">Building Information Modeling</div>
      </div>
      <div className="related-categories-block-item">
        <img src={logo} alt='abc'/>
        <div className="name-categori">VALUE ADD</div>
        <div className="categori">Design-Build</div>
        <div className="categori">Prefabrication</div>
      </div>
    </div>
  )
}

export default RelatedCategories
