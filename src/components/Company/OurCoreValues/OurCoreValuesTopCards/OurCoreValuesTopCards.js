import React from 'react'
import { useState, useEffect } from 'react'
import './OurCoreValuesTopCards.css'
import OurCoreValuesTopCard from './OurCoreValuesTopCard'
import OurCoreValuesTopCards_0 from './OurCoreValuesTopCards_0'
import OurCoreValuesTopCards_1 from './OurCoreValuesTopCards_1'
import OurCoreValuesTopCards_2 from './OurCoreValuesTopCards_2'

const OurCoreValuesTopCards = () => {
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
      backgroundColor: 'rgb(255, 163, 0)',
      video: undefined,
    },
  ]

  const [screen, setScreen] = useState(getScreenType());

  function getScreenType() {
    const width = window.innerWidth;

    if (width <= 750) return 2;
    if (width <= 1000) return 1;
    return 0;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreenType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="company-our-core-values-top-cards">
      {screen === 0 ? (
        <OurCoreValuesTopCards_0 cardsTopParams={cardsTopParams} />
      ) : screen === 1 ? (
        <OurCoreValuesTopCards_1 cardsTopParams={cardsTopParams} />
      ) : (
        <OurCoreValuesTopCards_2 cardsTopParams={cardsTopParams} />
      )}
    </div>
  )
}

export default OurCoreValuesTopCards
