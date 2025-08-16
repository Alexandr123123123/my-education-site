import React from 'react'
import './Brand.css'

const Brand = () => {
  return (
    <div className="brand">
      <div className="abcabcabc1">
        <div className="brand-container-for-worker-image">
          <img 
          src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
          alt="abc"></img>
          <div className="brand-container-for-worker-image-2">
            <img
              src={`${process.env.PUBLIC_URL}/src/worker_2.png`}
              alt="abc"
            ></img>
          </div>
        </div>
        <div className="brand-catalog">
          <div className="brand-catalog-item">
            <img 
            src={`${process.env.PUBLIC_URL}/src/brand_1.png`}
            alt="abc"></img>
          </div>
          <div className="brand-catalog-item">
            <img 
            src={`${process.env.PUBLIC_URL}/src/brand_2.png`}
            alt="abc"></img>
          </div>
          <div className="brand-catalog-item">
            <img 
            src={`${process.env.PUBLIC_URL}/src/brand_3_1.png`}
            alt="abc"></img>
          </div>
          <div className="brand-catalog-item">
            <img 
            src={`${process.env.PUBLIC_URL}/src/brand_4.png`}
            alt="abc"></img>
          </div>
          <div className="brand-catalog-item">
            <img 
            src={`${process.env.PUBLIC_URL}/src/brand_5.png`}
            alt="abc"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
