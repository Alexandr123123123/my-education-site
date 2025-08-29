import React from 'react'
import { useState } from 'react'
import './ProjectTypesAbout.css'

const ProjectTypesAbout = () => {
  const [activeTypes, setActiveTypes] = useState(0)
  const [types, setTypes] = useState([
    {
      id: 1,
      title: 'Ontwerp',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`,
      description:
        'Het Audio/Visual-team van Rosendin beschikt over een personeel van gecertificeerde en zeer bekwame ontwerpers en CTS-D-gecertificeerde ingenieurs die hebben deelgenomen aan enkele van de grootste en meest complexe projecten op de markt van vandaag. Wij houden ons aan de strengste normen, waaronder ANSI/INFOCOMM, BICSI, IEEE en meer. Wij zijn consequent in staat om de technologisch meest geavanceerde systemen van vandaag te ontwerpen en te leveren.',
    },
    {
      id: 2,
      title: 'Bouwen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/pharma.jpg`,
      description:
        'Ons team van professionals op het gebied van projectmanagement en installatie maakt gebruik van de uitgebreide middelen die binnen Rosendin beschikbaar zijn, waardoor wij in staat zijn de meest veeleisende maatwerktoepassingen te realiseren voor de meest veeleisende klanten. Rosendin’s begrip van het projectproces, enorme bouwkennis en uitgebreide ervaring met prefabricatie zorgen ervoor dat wij niet alleen een integraal onderdeel zijn van het gehele bouwteam, maar ook beschikken over de benodigde vaardigheden en middelen om projecten op tijd en binnen budget te voltooien. Elke keer weer.',
    },
    {
      id: 3,
      title: 'Programmeren & Inbedrijfstelling',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/office.jpg`,
      description:
        'Voor complexe audio-visuele systemen zorgen programmering en inbedrijfstelling ervoor dat een project verandert van een verzameling verbonden onderdelen naar één eenvoudig te gebruiken en betrouwbaar systeem. Rosendin is gecertificeerd om alle grote audio-visuele besturingssystemen te programmeren. Met honderden succesvol afgeronde Crestron-, Extron- en AMX-projecten weet het Rosendin Programming Team precies wat er nodig is om systemen flexibel, gebruiksvriendelijk en, het allerbelangrijkste, betrouwbaar te maken. De laatste sleutel tot het geheel is ons rigoureuze inbedrijfstellings- en verificatieproces. Alle functies en instellingen worden getest, gevalideerd en gedocumenteerd, zodat er geen twijfel bestaat over de functionaliteit en configuratie van de uiteindelijke systemen.',
    },
    {
      id: 4,
      title: 'Service / Dienstverlening',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/data-center.jpeg`,
      description:
        'Zelfs de best ontworpen en geïnstalleerde systemen hebben service en ondersteuning nodig. Rosendin biedt een volledig assortiment aan service- en ondersteuningscontracten, variërend van gepland systeemonderhoud, technisch personeel voor evenementen, tot 24/7 ondersteuning.',
    },
    {
      id: 5,
      title: 'Industrie certificeringen',
      filename: `${process.env.PUBLIC_URL}/src/market-sectors/education.jpg`,
      description:
        'Rosendin beschikt over een geavanceerd technologieteam dat is uitgerust met de hoogste beschikbare industriec ertificeringen en opleidingsachtergronden van vandaag. De ingenieurs, installateurs en programmeurs van Rosendin zijn volledig gekwalificeerd en ervaren om consistente en betrouwbare diensten te leveren volgens de meest gevraagde normen.',
    },
  ])

  return (
    <div className="project-types-about">
      <div className="project-types-about-content">
        <div className="project-types-about-content-left-block">
          {types.map((item, index) => (
            <div
              key={item.id}
              className={`project-types-about-content-left-block-item ${index === activeTypes ? 'project-types-about-content-left-block-item-active' : ''} ${index === activeTypes - 1 ? 'project-types-about-content-left-block-item-active-modificator' : ''}`}
              onClick={() => setActiveTypes(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="project-types-about-content-right-block-container">
          {types.map((type, index) => (
            <div
              className={`project-types-about-content-right-block ${index === activeTypes ? 'project-types-about-content-right-block-active' : ''}`}
              style={{ transform: `translateX(-${activeTypes * 100}%)` }}
            >
              <div className="project-types-about-content-right-block-image-container-1">
                <div className="project-types-about-content-right-block-image-container-2">
                  <img src={type.filename} alt="abc"></img>
                </div>
              </div>
              {type.description}
              {/* <div className="project-types-about-content-right-block-image-text">
                {type.description}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectTypesAbout
