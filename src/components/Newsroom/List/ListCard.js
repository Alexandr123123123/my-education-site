import React from 'react'
import { useState } from 'react'
import './ListCard.css'

const ListCard = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      title: 'Werknemer van de Week 2025 - George Washington',
      description:
        'Meer dan 220 fulltime coördinatoren, modelleurs en detailleurs die projecten uitvoeren in de Verenigde Staten en daarbuiten.',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      title: 'Werknemer van de Week 2025 - John Adams',
      description:
        'Meer dan 80 interne engineering- en technische professionals die zorgen voor het succes van projectuitvoering.',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      title: 'Werknemer van de Week 2025 - Thomas Jefferson',
      description:
        'Een toegewijd team dat werkt aan het identificeren en ontwikkelen van de beste oplossingen voor unieke klantbehoeften.',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      title: 'Werknemer van de Week 2025 - George Washington',
      description:
        'Meer dan 220 fulltime coördinatoren, modelleurs en detailleurs die projecten uitvoeren in de Verenigde Staten en daarbuiten.',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      title: 'Werknemer van de Week 2025 - John Adams',
      description:
        'Meer dan 80 interne engineering- en technische professionals die zorgen voor het succes van projectuitvoering.',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      title: 'Werknemer van de Week 2025 - Thomas Jefferson',
      description:
        'Een toegewijd team dat werkt aan het identificeren en ontwikkelen van de beste oplossingen voor unieke klantbehoeften.',
    },
  ])

  return (
    <div className="newsroom-list-card">
      <div className="newsroom-list-card-cards-body">
        <div className="newsroom-list-card-cards-body-container">
          {items.map((item) => (
            <div className="newsroom-list-card-cards-body-item">
              <div className="newsroom-list-card-cards-body-item-content">
                <div className="newsroom-list-card-cards-body-item-title">
                  7 maart 2025 | Carrière
                </div>
                <div className="newsroom-list-card-cards-body-item-image">
                  <img src={item.filename} alt="abc"></img>
                </div>
                <div className="newsroom-list-card-cards-body-item-nomination">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListCard
