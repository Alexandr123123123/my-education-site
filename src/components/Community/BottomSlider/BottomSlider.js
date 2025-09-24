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
        '“We’ve had a great partnership with Rosendin on our School-to-Career program which is bringing students into the workplace so they have an authentic experience. It’s [all] about businesses being able to open their doors and let students have that opportunity and Rosendin has been great about that.”',
      name: 'Deanna Palm, President',
      position: 'Hillsboro Chamber of Commerce',
    },
    {
      id: 2,
      title: 'Bouwen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      description:
        '“When you’re able to have people actually have the mindset, ideas, and ability to say this is where we’ve been, this is where we are now, and this is where we’ll be in the future, it helps make it better for everyone involved to feel comfortable saying this is not only a partnership that we’re having right now but for the foreseeable future and the benefits are not only for the people that work for Rosendin but the community in general.”',
      name: 'Rudy Metayer, City Councilmember',
      position: 'City of Pflugerville',
    },
    {
      id: 3,
      title: 'Programmeren & Inbedrijfstelling',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      description:
        '“Junior Achievement exists to prepare students for their future. Each year we teach over 83,000 low-income students work readiness skills, entrepreneurship skills, and financial literacy. Rosendin became involved 20 years ago beginning with our annual golf tournament and in 2011 they sponsored a shop in BizTown and are still a sponsor today. In 2014, Rosendin brought on a Board Member for Junior Achievement and started a Bowl-a-Thon fundraiser. To date, Rosendin has helped us support over 100,000 students in Arizona.”',
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
