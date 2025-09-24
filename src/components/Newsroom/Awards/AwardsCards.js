import React from 'react'
import './AwardsCards.css'
import { useState } from 'react'

const AwardsCards = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      title:
        'Werknemer van de Week 2025 - George Washington',
      description:
        'Meer dan 220 fulltime coördinatoren, modelleurs en detailleurs die projecten uitvoeren in de Verenigde Staten en daarbuiten.',
      location: 'ENR Texas & Louisiana',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      title: 'Werknemer van de Week 2025 - John Adams',
      description:
        'Meer dan 80 interne engineering- en technische professionals die zorgen voor het succes van projectuitvoering.',
      location: 'ENR Texas & Louisiana',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      title: 'Werknemer van de Week 2025 - Thomas Jefferson',
      description:
        'Een toegewijd team dat werkt aan het identificeren en ontwikkelen van de beste oplossingen voor unieke klantbehoeften.',
      location: 'ENR Texas & Louisiana',
    },
  ])

  return (
    <div className="newsroom-awards-cards">
      <div className="newsroom-awards-cards-body">
        <div className="newsroom-awards-cards-body-container">
          {items.map((item) => (
            <div className="newsroom-awards-cards-body-item">
              <div className="newsroom-awards-cards-body-item-content">
                <div className="newsroom-awards-cards-body-item-title">
                  awards
                </div>
                <div className="newsroom-awards-cards-body-item-nomination">
                  {item.title}
                </div>
                <div className="newsroom-awards-cards-body-item-location-container">
                  <div className="newsroom-awards-cards-body-item-location">
                    {item.location}
                  </div>
                </div>
                {/* learn-more */}
                <div className="newsroom-awards-cards-body-item-learn-more-container">
                  <div className="newsroom-awards-cards-body-item-learn-more">
                    <div className="newsroom-awards-cards-body-item-learn-more-text">
                      LEARN MORE
                    </div>
                    <div className="newsroom-awards-cards-body-item-learn-more-arrow"></div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AwardsCards
