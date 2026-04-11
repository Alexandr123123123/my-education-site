import React from 'react'
import { useState } from 'react'
import './BottomSlider.css'

const BottomSlider = () => {
  const [activeMessage, setActiveMessage] = useState(0)
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        '“Wij zetten ons actief in voor lokale gemeenschapsprojecten en initiatieven, van renovaties van openbare ruimtes tot ondersteuning van buurtactiviteiten en sociale programma’s. Ons team werkt samen met organisaties om een tastbare en blijvende impact te maken, waardoor de leefomgeving voor iedereen aangenamer en veiliger wordt.”',
      name: 'Deanna Palm, President',
      position: 'Hillsboro Chamber of Commerce',
    },
    {
      id: 2,
      title: 'Bouwen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      description:
        '“Door middel van workshops, stages en mentorprogramma’s investeren we in de toekomst van jongeren en nieuwe professionals in de bouwsector. We delen onze kennis, vaardigheden en ervaring zodat zij waardevolle inzichten en praktische ervaring opdoen, wat hen helpt om zelfverzekerd en goed voorbereid hun carrière te starten.”',
      name: 'Rudy Metayer, City Councilmember',
      position: 'City of Pflugerville',
    },
    {
      id: 3,
      title: 'Programmeren & Inbedrijfstelling',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      description:
        '“Wij nemen deel aan milieuvriendelijke en innovatieve projecten die bijdragen aan een duurzamere samenleving. Door onze middelen, kennis en creativiteit in te zetten, zorgen we dat deze projecten een blijvend positief effect hebben op de gemeenschap en het milieu, en tegelijkertijd laten we zien hoe innovatie en duurzaamheid hand in hand kunnen gaan in de bouwsector.”',
      name: 'Bri Tournas',
      position: 'Junior Achievement',
    },
  ])

  const leftButton = () => {
    if (activeMessage > 0) {
      setActiveMessage(activeMessage - 1)
    }
  }

  const rightButton = () => {
    if (activeMessage < messages.length - 1) {
      setActiveMessage(activeMessage + 1)
    }
  }
  return (
    <div className="community-bottom-slider">
      {/* buttons */}
      <div
        className="community-bottom-slider-left-button"
        onClick={() => leftButton()}
      ></div>
      <div
        className="community-bottom-slider-right-button"
        onClick={() => rightButton()}
      ></div>
      {/* body */}
      <div className="community-bottom-slider-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className="community-bottom-slider-body-item"
            style={{
              transform: `translateX(${-activeMessage * 100}%)`,
            }}
          >
            {/* left */}
            <div className="community-bottom-slider-body-left">
              <div className="community-bottom-slider-body-left-container">
                <div className="community-bottom-slider-body-left-graphic"></div>
                <div className="community-bottom-slider-body-left-image">
                  <img src={message.filename} alt="abc"></img>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="community-bottom-slider-body-right">
              <div className="community-bottom-slider-body-right-text">
                {message.description}
              </div>
              <div className="community-bottom-slider-body-right-name">
                {message.name}
              </div>
              <div className="community-bottom-slider-body-right-position">
                {message.position}
              </div>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  )
}

export default BottomSlider
