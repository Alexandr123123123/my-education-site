import React from 'react'
import { useState } from 'react'
import './TextSlider.css'

const TextSlider = () => {
  const [activeMessage, setActiveMessage] = useState(0)
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
    {
      id: 4,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'Amazing intern program with great pay in a company full of growth and opportunities for thos with or without experience. Roseldin has a valuable culture they set forth and understandthe commitment it takes to recruit the best employees by giving those interested in the industry an opportunity to intern with them. The amount of knowledge and experience I obtained through their intern program, will be very valuable for me in my future career/.',
    },
    {
      id: 5,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description:
        'Great Culture and Work-life balance/ Greate People and lost of projects. Retirement, Employee Stock is a plus. Benefits are great. Encourages Growth and Learning.',
    },
    {
      id: 6,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'An Employee Owned Company that puts everything into Building people and relationships.',
    },
    {
      id: 7,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description:
        'Large company, seeking intelligent projects, room to grow with-in the company as long as work is available. Various aspects of the electrical industry is a plus.',
    },
    {
      id: 8,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'I have a great safety team in Maryland office. 1.Always willing to help 2.Push me to get better everyday. 3.Empowered to take cantrolof projects 4.They put value into interns (not just busy work being forced on me).',
    },
    {
      id: 9,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description: 'ESOP, great work environment. Great people.',
    },
    {
      id: 10,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Opportunities for professional growth, excellent pay, travel opportunities, focus on employee work balance.',
    },
    {
      id: 11,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Greate Environment Coworkers and PM;s always willing to help Division Managers are extremely helpful.',
    },
    {
      id: 12,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        "Rosendin cares a lot about their employees and will provide amenities in the work place to make working there more enjoyable. Everyone's contributions are valued and there are many experienced workers to learn from. The work life balance is quite good compared to other companies.",
    },
    {
      id: 13,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Rosendin is a wonderful place to work. The people I have worked with have all been very kind, patient, and informative. From my boss to my coworkers, everyone has taken the time to to really teack me what I needed to know. As long as you put in the effort to learn, people are willing to help you to be successful.',
    },
    {
      id: 14,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description: 'Friendly. Good Benefits. Advancement oppotrunities.',
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
    <div className="careers-text-slider">
      {/* buttons */}
      <div
        className="careers-text-slider-left-button"
        onClick={() => leftButton()}
      ></div>
      <div
        className="careers-text-slider-right-button"
        onClick={() => rightButton()}
      ></div>
      {/* body */}
      <div className="careers-text-slider-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className="careers-text-slider-body-item"
            style={{
              transform: `translateX(${-activeMessage * 100}%)`,
            }}
          >
            <div className="careers-text-slider-body-item-text">
              {message.description}
            </div>
            {/* learn-more */}
            <div className="careers-text-slider-body-learn-more">
              <div className="careers-text-slider-learn-more-text">
                Visit us on glassdoor
              </div>
              <div className="careers-text-slider-learn-more-arrow"></div>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  )
}

export default TextSlider
