import React from 'react'
import { useState } from 'react'
import './CompanyInAction.css'

const CompanyInAction = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Being a 100% employee-owned company, that just goes to show you how employee-focused the company is.',
    },
    {
      id: 2,
      title: 'Bouwen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      description: '“Great Company to work for. A lot of room for growth.”',
    },
    {
      id: 3,
      title: 'Programmeren & Inbedrijfstelling',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      description:
        'Everyone is so welcoming and they try to train well/ The ESOP is great and overall a place to call family.',
    },
  ])

  const [activeMessage, setActiveMessage] = useState(0)

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
    <div className="community-company-in-action">
      <div className="community-company-in-action-name">Company in action</div>
      {/* top */}
      <div className="community-company-in-action-top">
        {messages.map((message) => (
          <div
            key={message.id}
            className="community-company-in-action-top-item"
            style={{
              transform: `translateX(${-activeMessage * 100}%)`,
            }}
          >
            <img src={message.filename} alt="abc"></img>
            <div className="community-company-in-action-top-item-top-video-circle">
              <div className="community-company-in-action-top-item-video-arrow"></div>
            </div>
          </div>
        ))}
      </div>
      {/* center */}
      <div className="community-company-in-action-body-center">
        <div className="community-company-in-action-body-center-page">
          {`${activeMessage + 1}/${messages.length}`}
        </div>
        <div className="community-company-in-action-body-center-item-line-container">
          <div className="community-company-in-action-body-center-item-line">
            {messages.map((message, index) => (
              <div
                className={`community-company-in-action-body-center-item-line-active 
                ${index === activeMessage ? 'community-company-in-action-body-center-item-line-active_1' : ''}`}
              ></div>
            ))}
          </div>
        </div>
        {/* buttons */}
        <div className="community-company-in-action-body-center-item-right">
          <div
            className="community-company-in-action-left-button"
            onClick={() => leftButton()}
          ></div>
          <div
            className="community-company-in-action-right-button"
            onClick={() => rightButton()}
          ></div>
        </div>
        {/*  */}
      </div>
      {/* bottom */}
      <div className="community-company-in-action-body-bottom-container">
        <div className="community-company-in-action-body-bottom">
          {messages.map((message) => (
            <div
              key={message.id}
              className="community-company-in-action-body-bottom-item"
              style={{
                transform: `translateX(${-activeMessage * 100}%)`,
              }}
            >
              {message.description}
            </div>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default CompanyInAction
