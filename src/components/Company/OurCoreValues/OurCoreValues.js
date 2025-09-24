import React from 'react'
import './OurCoreValues.css'
import OurCoreValuesTopCard from './OurCoreValuesTopCard'
import OurCoreValuesBottomCard from './OurCoreValuesBottomCard'

const OurCoreValues = () => {
  const abc = 1
  const cardsTopParams = [
    {
      id: 1,
      title: ['We', 'Geven Om'],
      text: 'We zijn een organisatie gebouwd op integriteit. We creëren een omgeving die mensen in staat stelt veilig te werken, hun beste zelf te zijn en elkaar te respecteren.',
      backgroundColor: 'rgb(91, 103, 112)',
      video: undefined,
    },
    {
      id: 2,
      title: ['We', 'Luisteren'],
      text: 'Ons succes is gebaseerd op het horen en begrijpen van de doelstellingen van onze klanten. We bouwen relaties.',
      backgroundColor: 'rgb(0, 61, 165)',
      video: `${process.env.PUBLIC_URL}/src/worker_1_1.jpg`,
    },
    {
      id: 3,
      title: ['We', 'Delen'],
      text: 'We werken samen, inspireren en dagen elkaar uit.',
      backgroundColor: 'rgb(91, 103, 112)',
      video: undefined,
    },
  ]

  const cardsBottomParams = [
    {
      id: 1,
      title: ['We', 'Innoveren'],
      text: 'Mensen zullen ons herinneren om de oplossingen die we bieden. Ondernemende ideeën worden aangemoedigd om voortdurend de industrienormen te verhogen.',
      backgroundColor: 'rgb(255, 163, 0)',
    },
    {
      id: 2,
      title: ['We', 'Uitblinken'],
      text: 'De kwaliteit van ons werk zal ons jarenlang vertegenwoordigen. We zijn trots op wat we bouwen. Het is ons nalatenschap.',
      backgroundColor: 'rgb(0, 61, 165)',
    },
  ]

  return (
    <div className="company-our-core-values">
      <div className="company-our-core-values-name">Onze Kernwaarden</div>
      <div className="company-our-core-values-table">
        {/* top */}
        <div className="company-our-core-values-content-top">
          <OurCoreValuesTopCard cardParams={cardsTopParams[0]} />
          <OurCoreValuesTopCard cardParams={cardsTopParams[1]} />
          <OurCoreValuesTopCard cardParams={cardsTopParams[2]} />
        </div>
        {/* bottom */}
        <div className="company-our-core-values-content-bottom">
          <OurCoreValuesBottomCard cardParams={cardsBottomParams[0]}/>
          <OurCoreValuesBottomCard cardParams={cardsBottomParams[1]}/>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default OurCoreValues
