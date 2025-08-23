import React from 'react'
import { useState } from 'react'
import './Brand.css'

const Brand = () => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/brand_1.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/brand_2.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/brand_3_1.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/brand_4.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/brand_5.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
  ])

  return (
    <div className="landing-brand">
      <div className="landing-brand-container-for-brand-catalog">
        <div className="landing-brand-container-for-worker-image-1">
          <img
            src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
            alt="abc"
          ></img>
          <div className="landing-brand-container-for-worker-image-2">
            <img
              src={`${process.env.PUBLIC_URL}/src/worker_2.png`}
              alt="abc"
            ></img>
          </div>
        </div>
        <div className="landing-brand-catalog">
          {brands.map((brand) => (
            <div className="landing-brand-catalog-item">
              <img src={brand.filename} alt="abc"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brand
