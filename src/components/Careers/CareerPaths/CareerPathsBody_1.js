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
        'Wij bieden afgestudeerden startersfuncties om een carrière in de bouw- en renovatiesector te beginnen. Je wordt deel van ons team en krijgt de kans om te groeien in een bedrijf waar professionele en persoonlijke ontwikkeling centraal staan.',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_2.jpg`,
      name: 'Stagiair',
      description:
        'Begin je carrière in de bouw met een waardevolle stage bij ons team. Je krijgt de kans om praktijkervaring op te doen, betrokken te zijn bij echte projecten en je vaardigheden te ontwikkelen in een professionele en ondersteunende omgeving.',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_3.jpg`,
      name: 'Vakbekwaam',
      description:
        'Word onderdeel van ons team van hooggekwalificeerde vakmensen en werk aan uitdagende bouw- en renovatieprojecten. Gebruik uw expertise om kwaliteit te leveren, uzelf verder te ontwikkelen en impact te maken in een professioneel en ondersteunend team.',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/workers/president_4.jpg`,
      name: 'Professional',
      description:
        'Sluit je aan bij ons team van ervaren professionals en werk aan uitdagende bouw- en renovatieprojecten. Breng je expertise in, lever topkwaliteit en ontwikkel jezelf verder in een stimulerende en ondersteunende werkomgeving.',
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
      <CareerPathsBodyCardCenter />
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
