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
        'Het bedrijf is opgebouwd rond zijn medewerkers, wat duidelijk aantoont hoe sterk de focus ligt op mensen en hun ontwikkeling.',
    },
    {
      id: 2,
      title: 'Bouwen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      description: 'Een uitstekende plek om te werken met volop groeimogelijkheden.',
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
        'Een uitstekende stageprogramma met een goede vergoeding in een bedrijf dat volop groeimogelijkheden biedt, zowel voor mensen met als zonder ervaring. Er wordt een sterke bedrijfscultuur opgebouwd en er wordt veel aandacht besteed aan het aantrekken van talent door geïnteresseerden de kans te geven om stage te lopen. De kennis en ervaring die ik via het stageprogramma heb opgedaan, zullen van grote waarde zijn voor mijn toekomstige carrière.',
    },
    {
      id: 5,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description:
        'Een sterke bedrijfscultuur en een goede werk-privébalans. Een fijne werkomgeving met gemotiveerde collega’s en veel interessante projecten. Extra voordelen zoals pensioenregelingen en participatie voor medewerkers maken het geheel aantrekkelijk. Goede arbeidsvoorwaarden en volop aandacht voor groei en ontwikkeling.',
    },
    {
      id: 6,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'Een bedrijf dat draait om zijn medewerkers en sterk inzet op de ontwikkeling van mensen en het opbouwen van duurzame relaties.',
    },
    {
      id: 7,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description:
        'Een groot bedrijf met interessante projecten en doorgroeimogelijkheden binnen de organisatie, afhankelijk van de beschikbaarheid van werk. De diversiteit aan werkzaamheden binnen de sector is een extra pluspunt.',
    },
    {
      id: 8,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'Ik werk met een uitstekend veiligheidsteam. 1) Altijd bereid om te helpen 2) Motiveren mij om elke dag beter te worden 3) Geven mij de kans om verantwoordelijkheid te nemen voor projecten 4) Hechten waarde aan stagiairs en geven hen echte ervaring in plaats van enkel routinewerk',
    },
    {
      id: 9,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description: 'ESOP, een prettige werkomgeving en fijne collega’s.',
    },
    {
      id: 10,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Mogelijkheden voor professionele groei, uitstekend salaris, reisopties en aandacht voor een goede werk-privébalans.',
    },
    {
      id: 11,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        "Geweldige werkomgeving, collega's en projectmanagers staan altijd klaar om te helpen. Afdelingsmanagers bieden uitermate nuttige ondersteuning.",
    },
    {
      id: 12,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        "Het bedrijf geeft veel om zijn medewerkers en biedt faciliteiten op de werkplek om het werken aangenamer te maken. Ieders bijdrage wordt gewaardeerd en er zijn veel ervaren collega's van wie je kunt leren. De werk-privébalans is hier behoorlijk goed vergeleken met andere bedrijven.",
    },
    {
      id: 13,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        "Het is een geweldige plek om te werken. De mensen met wie ik heb samengewerkt zijn allemaal vriendelijk, geduldig en behulpzaam geweest. Van mijn leidinggevende tot mijn collega's, iedereen heeft de tijd genomen om me echt te leren wat ik moest weten. Als je bereid bent om te leren, staan mensen altijd klaar om je te helpen succesvol te zijn.",
    },
    {
      id: 14,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description: 'Vriendelijke werkomgeving, goede voordelen en doorgroeimogelijkheden.',
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
                Bezoek ons op Glassdoor
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
