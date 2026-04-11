import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MarketSectors.css'
import Navigation from './Navigation'
import MarketSectorCart from './MarketSectorCard'

const MarketSectors = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      title: 'Elektro',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      title: 'Slim Huis',
      description: 'Описание второго элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      title: 'Verwarming',
      description: 'Описание третьего элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },

    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      title: 'Ventilatie',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      title: 'Sanitair',
      description: 'Описание второго элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/entertaiment.jpg`,
      title: 'Keuken',
      description: 'Описание третьего элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/healthcare.jpg`,
      title: 'Badkamer',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/goverment.jpg`,
      title: 'Isolatie',
      description: 'Описание второго элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/renewable-energe.jpg`,
      title: 'Zonnepanelen',
      description: 'Описание третьего элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/transportatiom.jpg`,
      title: 'Warmtepomp',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 11,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/transportatiom.jpg`,
      title: 'Energie',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
    {
      id: 12,
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/transportatiom.jpg`,
      title: 'Afwerking',
      description: 'Описание первого элемента',
      link: '/my-education-site/audio/visual-systemen/',
    },
  ])

  return (
    <div className="what-we-do-market-sectors">
      <Navigation />
      <div className="what-we-do-market-sectors-name">Marktsectoren</div>
      <div className="what-we-do-market-sectors-slogan">
        Wij bedienen een diverse groep klanten, wiens dagelijkse werk een impact
        heeft op de wereld die we allemaal delen.
      </div>
      <div className="what-we-do-market-sectors-body">
        {items.map((item) => (
          <MarketSectorCart
            sectorName={item.title}
            imagePath={item.filename}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

export default MarketSectors
