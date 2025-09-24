import React from 'react'
import { useState } from 'react'
import './CareerPaths.css'
import CareerPathsLayer from './CareerPathsLayer'

const CareerPaths = () => {
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
    <div className="careers-career-paths">
      <div className="careers-career-paths-top-text">
        <div className="careers-career-paths-name">Carrièrepaden</div>
        <div className="careers-career-paths-title">
          Wat je ervaring ook is,<br></br>er is een plek voor jou
        </div>
      </div>
      {/* body */}
      <div className="careers-career-paths-body-conteiner">
        <div className="careers-career-paths-body">
          {/* top */}
          <div className="careers-career-paths-body-top">
            <div
              className="careers-career-paths-body-item"
              onMouseEnter={() => setActiveWorker(0)}
              onMouseLeave={() => setActiveWorker(10)}
            >
              <CareerPathsLayer
                worker={workers[0]}
                active={activeWorker === 0 ? true : 10}
              />
              <img src={workers[0].filename} alt="abc"></img>
              <div className="careers-career-paths-body-item-layer_1">
                <div
                  className="careers-career-paths-body-item-layer_1-text"
                  style={{ opacity: activeWorker === 0 ? 0 : 1 }}
                >
                  Afgestudeerde
                </div>
              </div>
            </div>
            <div
              className="careers-career-paths-body-item"
              onMouseEnter={() => setActiveWorker(1)}
              onMouseLeave={() => setActiveWorker(10)}
            >
              <CareerPathsLayer
                worker={workers[1]}
                active={activeWorker === 1 ? true : 10}
              />
              <img src={workers[1].filename} alt="abc"></img>
              <div className="careers-career-paths-body-item-layer_1">
                <div
                  className="careers-career-paths-body-item-layer_1-text"
                  style={{ opacity: activeWorker === 1 ? 0 : 1 }}
                >
                  Stagiair
                </div>
              </div>
            </div>
          </div>
          {/* center */}
          <div className="careers-career-paths-body-center">
            <div className="careers-career-paths-body-item-center">
              <div className="careers-career-paths-body-item-center-text">
                Wat is jouw pad?
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="careers-career-paths-body-bottom">
            <div
              className="careers-career-paths-body-item"
              onMouseEnter={() => setActiveWorker(2)}
              onMouseLeave={() => setActiveWorker(10)}
            >
              <CareerPathsLayer
                worker={workers[2]}
                active={activeWorker === 2 ? true : 10}
              />
              <img src={workers[2].filename} alt="abc"></img>
              <div className="careers-career-paths-body-item-layer_1">
                <div
                  className="careers-career-paths-body-item-layer_1-text"
                  style={{ opacity: activeWorker === 2 ? 0 : 1 }}
                >
                  Vakbekwaam
                </div>
              </div>
            </div>
            <div
              className="careers-career-paths-body-item"
              onMouseEnter={() => setActiveWorker(3)}
              onMouseLeave={() => setActiveWorker(10)}
            >
              <CareerPathsLayer
                worker={workers[3]}
                active={activeWorker === 3 ? true : 10}
              />
              <img src={workers[3].filename} alt="abc"></img>
              <div className="careers-career-paths-body-item-layer_1">
                <div
                  className="careers-career-paths-body-item-layer_1-text"
                  style={{ opacity: activeWorker === 3 ? 0 : 1 }}
                >
                  Professional
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default CareerPaths
