import React from 'react'
import { useState } from 'react'
import './NewsletterCard.css'

const NewsletterCard = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      title: 'Werknemer van de Week',
      description:
        'Meer dan 220 fulltime coördinatoren, modelleurs en detailleurs die projecten uitvoeren in de Verenigde Staten en daarbuiten.',
    },
  ])

  const [items1, setItems1] = useState([
    {
      id: 1,
      title: 'Audio Visual Besturing en Automatisering Systemen',
    },
    {
      id: 2,
      title: 'Achtergrond Muziek en PA Systemen',
    },
    {
      id: 3,
      title: 'Board Rooms en Meeting Rooms',
    },
  ])

  return (
    <div className="newsroom-newsletter-card">
      <div className="newsroom-newsletter-card-title">
        7 maart 2025 | Carrière
      </div>
      <div className="newsroom-newsletter-card-image">
        <img src={items[0].filename} alt="abc"></img>
      </div>
      <div className="newsroom-newsletter-card-nomination">
        {items[0].title}
      </div>
      <div className="newsroom-newsletter-card-text">
        The official newsletter of Rosendin Holdings, Inc. (Quarter 3, 2025)
      </div>
      <div className="newsroom-newsletter-card-title_1">Highlights</div>
      {items1.map((item) => (
        <div className="newsroom-newsletter-card-item">
          <div className="newsroom-newsletter-card-item-left">
            <div className="newsroom-newsletter-card-item-left-image"></div>
          </div>
          <div key={item.id} className="newsroom-newsletter-card-item-right">
            {item.title}
          </div>
        </div>
      ))}
      {/* learn-more */}
      <div className="newsroom-newsletter-card-learn-more-container">
        <div className="newsroom-newsletter-card-learn-more">
          <div className="newsroom-newsletter-card-learn-more-text">
            View This Issue
          </div>
          <div className="newsroom-newsletter-card-learn-more-arrow"></div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default NewsletterCard
