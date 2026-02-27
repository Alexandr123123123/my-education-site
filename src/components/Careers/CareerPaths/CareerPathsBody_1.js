import React from 'react'
import { useState } from 'react'
import './CareerPathsBody_1.css'
import CareerPathsBodyCard from './CareerPathsBodyCard'
import CareerPathsBodyCardCenter from './CareerPathsBodyCardCenter'
import CareerPathsLayer from './CareerPathsLayer'

const CareerPathsBody_1 = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_1.jpg`,
      name: 'Afgestudeerde',
      description:
        'For new graduates, we offer full-time entry-level positions to begin a career in the electrical construction industry. Learn how to become an employee-owner and grow in an organization where personal development is our priority.',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      name: 'Stagiair',
      description:
        'For new graduates, we offer full-time entry-level positions to begin a career in the electrical construction industry. Learn how to become an employee-owner and grow in an organization where personal development is our priority.',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      name: 'Vakbekwaam',
      description:
        'For new graduates, we offer full-time entry-level positions to begin a career in the electrical construction industry. Learn how to become an employee-owner and grow in an organization where personal development is our priority.',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_4.jpg`,
      name: 'Professional',
      description:
        'For new graduates, we offer full-time entry-level positions to begin a career in the electrical construction industry. Learn how to become an employee-owner and grow in an organization where personal development is our priority.',
    },
  ])

  const [activeWorker, setActiveWorker] = useState(10)
  return (
      <div className="careers-career-paths-body_1">
        {/* left */}
        <div className="careers-career-paths-body_1-left">
          <CareerPathsBodyCard
            workers={workers[0]}
            setWorkers={setWorkers}
            activeWorker={activeWorker}
            setActiveWorker={setActiveWorker}
            id={0}
          />
          <CareerPathsBodyCard
            workers={workers[1]}
            setWorkers={setWorkers}
            activeWorker={activeWorker}
            setActiveWorker={setActiveWorker}
            id={1}
          />
        </div>
        {/* center */}
        <CareerPathsBodyCardCenter/>
        {/* right */}
        <div className="careers-career-paths-body_1-right">
          <CareerPathsBodyCard
            workers={workers[2]}
            setWorkers={setWorkers}
            activeWorker={activeWorker}
            setActiveWorker={setActiveWorker}
            id={2}
          />
          <CareerPathsBodyCard
            workers={workers[3]}
            setWorkers={setWorkers}
            activeWorker={activeWorker}
            setActiveWorker={setActiveWorker}
            id={3}
          />
        </div>
        {/*  */}
      </div>
  )
}

export default CareerPathsBody_1
