import React from 'react'
import { useState, useEffect } from 'react'
import './EmployeeSpotlights.css'
import EmployeeSpotlightsCard from './EmployeeSpotlightsCard'

const EmployeeSpotlights = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      title: 'George Washington',
      description: '1st President of the US',
      text: 'George Washington. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      title: 'John Adams',
      description: '2nd President of the US',
      text: 'John Adams. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',

      location: 'California',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      title: 'Thomas Jefferson',
      description: '3rd President of the US',
      text: 'Thomas Jefferson. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_4.jpg`,
      title: 'James Madison',
      description: '4th President of the US',
      text: 'James Madison. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_5.jpg`,
      title: 'James Monroe',
      description: '5th President of the US',
      text: 'James Monroe. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_6.jpg`,
      title: 'John Quincy Adams',
      description: '6th President of the US',
      text: 'John Quincy Adams. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_7.jpg`,
      title: 'Andrew Jackson',
      description: '7th President of the US',
      text: 'Andrew Jackson. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_8.jpg`,
      title: 'Martin Van Buren',
      text: 'I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      description: '8th President of the US',
      location: 'California',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_9.jpg`,
      title: 'William Henry Harrison',
      description: '9th President of the US',
      text: 'William Henry Harrison. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_10.jpg`,
      title: 'John Tyler',
      description: '10th President of the US',
      text: 'John Tyler. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 11,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_11.jpg`,
      title: 'James K. Polk',
      description: '11th President of the US',
      text: 'James K. Polk. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
    {
      id: 12,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_12.jpg`,
      title: 'Zachary Taylor',
      description: '12th President of the US',
      text: 'Zachary Taylor. I had the opportunity to work with several other contractors during my college internships, and I value each one of those experiences. The last internship I did was with Rosendin, and I immediately knew that this was going to be where I was going to spend my career. The way Rosendin conducts business and invests in its employees is what sets us apart from other contractors. There are a certain drive and motivation at Rosendin that can be contagious where people are motivated to succeed and constantly improve. At my age, that is the most important thing to me – being constantly motivated and moving forward.',
      location: 'California',
    },
  ])

  const [activeEmployeeSpotlightsCard, setActiveEmployeeSpotlightsCard] =
    useState(false)

  useEffect(() => {
    if (activeEmployeeSpotlightsCard === false) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
    console.log(activeEmployeeSpotlightsCard)
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeEmployeeSpotlightsCard])

  return (
    <div className="careers-employee-spotlights">
      {activeEmployeeSpotlightsCard === false ? (
        ''
      ) : (
        <EmployeeSpotlightsCard
          workers={workers}
          activeEmployeeSpotlightsCard={activeEmployeeSpotlightsCard}
          setActiveEmployeeSpotlightsCard={setActiveEmployeeSpotlightsCard}
        />
      )}
      {/* title */}
      <div className="careers-employee-spotlights-title">
        Werknemers in de schijnwerpers
      </div>
      {/* workers-list */}
      <div className="careers-employee-spotlights-workers-list">
        {workers.map((worker, index) => (
          <div
            key={worker.id}
            className="careers-employee-spotlights-workers-list-item"
            onClick={() => setActiveEmployeeSpotlightsCard(index)}
          >
            <img src={worker.filename} alt="abc"></img>
            <div className="careers-employee-spotlights-workers-list-item-layer_1">
              <div className="careers-employee-spotlights-workers-list-item-layer_1-container">
                {/* left */}
                <div className="careers-employee-spotlights-workers-list-item-name-and-position">
                  <div className="careers-employee-spotlights-workers-list-item-name">
                    {worker.title}
                  </div>
                  <div className="careers-employee-spotlights-workers-list-item-position">
                    {worker.description}
                  </div>
                </div>
                {/* right */}
                <div className="careers-employee-spotlights-workers-list-item-button-container">
                  <div className="careers-employee-spotlights-workers-list-item-button">
                    <div className="careers-employee-spotlights-workers-list-item-button-graphic-element-1"></div>
                    <div className="careers-employee-spotlights-workers-list-item-button-graphic-element-2"></div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
      <div className='service-element'></div>
    </div>
  )
}

export default EmployeeSpotlights
