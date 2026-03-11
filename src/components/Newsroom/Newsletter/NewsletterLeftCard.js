import React from 'react'
import { useState } from 'react'
import './NewsletterLeftCard.css'
import NewsletterLeftCardButton_1 from './NewsletterLeftCardButton_1'
import NewsletterLeftCardButton_2 from './NewsletterLeftCardButton_2'

const NewsletterLeftCard = () => {
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
    <div className="newsroom-newsletter-left-card">
      <div className="newsroom-newsletter-left-card-name">
        Laatste nieuwsbrief
      </div>
      <div className="newsroom-newsletter-left-card-top-container">
        {/* top */}
        <div className="newsroom-newsletter-left-card-top">
          <div className="newsroom-newsletter-left-card-title">
            7 maart 2025 | Carrière
          </div>
          <div className="newsroom-newsletter-left-card-image">
            <img src={items[0].filename} alt="abc"></img>
          </div>
        </div>
        {/* bottom */}
        <div className="newsroom-newsletter-left-card-bottom">
          <div className="newsroom-newsletter-left-card-nomination">
            {items[0].title}
          </div>
          <div className="newsroom-newsletter-left-card-text">
            The official newsletter of Rosendin Holdings, Inc. (Quarter 3, 2025)
          </div>
          <div className="newsroom-newsletter-left-card-bottom-title">
            Highlights
          </div>
          {items1.map((item) => (
            <div className="newsroom-newsletter-left-card-item">
              <div className="newsroom-newsletter-left-card-item-left">
                <div className="newsroom-newsletter-left-card-item-left-image"></div>
              </div>
              <div
                key={item.id}
                className="newsroom-newsletter-left-card-item-right"
              >
                {item.title}
              </div>
            </div>
          ))}
          <NewsletterLeftCardButton_1 />
          
        </div>
        {/*  */}
      </div><NewsletterLeftCardButton_2 />
    </div>
  )
}

export default NewsletterLeftCard
