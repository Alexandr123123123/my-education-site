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
      text: 'Wij zijn een organisatie die draait om betrouwbaarheid en respect. Wij creëren een werkomgeving waarin onze teams veilig kunnen werken, hun vakmanschap volledig kunnen benutten en elkaar ondersteunen tijdens elk project.',
      backgroundColor: 'rgb(91, 103, 112)',
      video: undefined,
    },
    {
      id: 2,
      title: ['We', 'Luisteren'],
      text: 'Ons succes komt voort uit het begrijpen van de wensen van onze klanten. Zo bouwen wij sterke en duurzame relaties.',
      backgroundColor: 'rgb(0, 61, 165)',
      video: `${process.env.PUBLIC_URL}/src/worker_1_1.jpg`,
    },
    {
      id: 3,
      title: ['We', 'Delen'],
      text: 'Wij werken nauw samen, ondersteunen elkaar en stimuleren groei en innovatie in elk project.',
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
