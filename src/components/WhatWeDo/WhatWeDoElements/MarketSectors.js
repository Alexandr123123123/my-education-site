import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MarketSectors.css'
import Navigation from './Navigation'
import MarketSectorCart from './MarketSectorCart'

const MarketSectors = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Audio/Visual systemen',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Biotechnologie',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Commercieel',
      description: 'Описание третьего элемента',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Datacenter',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      title: 'Onderwijs',
      description: 'Описание второго элемента',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/entertaiment.jpg`,
      title: 'Entertainment',
      description: 'Описание третьего элемента',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/healthcare.jpg`,
      title: 'Gezondheidszorg',
      description: 'Описание первого элемента',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/goverment.jpg`,
      title: 'Overheid',
      description: 'Описание второго элемента',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/renewable-energe.jpg`,
      title: 'Hernieuwbare energie',
      description: 'Описание третьего элемента',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/transportatiom.jpg`,
      title: 'Vervoer',
      description: 'Описание первого элемента',
    },
  ])

  return (
    <div className="what-we-do-market-sectors">
      <Navigation />
      <div className="what-we-do-market-sectors-name">Marktsectoren</div>
      <div className="what-we-do-market-sectors-slogan">
        Rosendin bedient een breed scala aan klanten, wiens dagelijkse werk
        invloed heeft op de wereld die we allemaal delen.
      </div>
      <div className="what-we-do-market-sectors-body">
        {items.map((item) => (
          <NavLink to="/my-education-site/company" className="what-we-do-market-sectors-body-card">
            <MarketSectorCart
              sectorName={item.title}
              imagePath={item.filename}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default MarketSectors
