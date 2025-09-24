import React from 'react'
import { useState } from 'react'
import './Affiliations.css'

const Affiliations = () => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/1.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/2.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/3.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/4.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/5.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/6.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/7.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/8.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/9.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/10.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 11,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/11.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 12,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/12.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 13,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/13.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 14,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/14.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 15,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/15.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 16,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/16.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 17,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/17.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 18,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/18.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 19,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/19.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 20,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/20.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 21,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/21.png`,
      title: 'Первый элемент',
      description: '10th & O Street Capitol Annex Swing Space',
    },
    {
      id: 22,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/22.png`,
      title: 'Второй элемент',
      description: '110 East',
    },
    {
      id: 23,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/23.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
    {
      id: 24,
      filename: `${process.env.PUBLIC_URL}/src/affiliations/24.png`,
      title: 'Третий элемент',
      description: '803 Waimanu',
    },
  ])

  return (
    <div className="company-affiliations">
      <div className="company-affiliations-body">
        {/* left-block */}
        <div className="company-affiliations-left">
          <div className="company-affiliations-left-name">Lidmaatschappen</div>
          <div className="company-affiliations-left-text">
            Rosendin is een trots lid van verschillende nationale
            brancheorganisaties en hun lokale afdelingen.
          </div>
        </div>
        {/* right-block */}
        <div className="company-affiliations-right">
          {brands.map((brand) => (
            <div key={brand.id} className="company-affiliations-right-item">
              <img src={brand.filename} alt="abc"></img>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Affiliations
