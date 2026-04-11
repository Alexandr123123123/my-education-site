import React from 'react'
import { useState } from 'react'
import './Project_5.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_5 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_5/1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_5/2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_5/3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_5/4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_5/5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Het renovatieproject 'Heideland' getuigt van een geslaagde transformatie van een traditionele meergezinswoning tot een reeks hoogwaardige, moderne appartementen. De focus van het ontwerp lag op het maximaliseren van lichtinval en het creëren van een tijdloze elegantie. De interieurs worden gekenmerkt door een gedurfd contrast: strakke witte muren en greeploze kasten vormen de basis, gecombineerd met luxueuze, grootformaat Calacatta-marmerlook tegels in zowel de keukens als de badkamers. Zwarte design-elementen, zoals de slanke profielen van de kamerhoge raampartijen, kranen, deurbeslag en stopcontacten, fungeren als grafische ankers in de ruimte. Nieuwe eikenhouten vloeren voegen warmte toe. De technische infrastructuur is volledig vernieuwd, met een opvallend nette installatie van nieuwe verwarmingsketels, koperen leidingwerk en moderne groepenkasten. Heideland biedt een verfijnde, stedelijke woonervaring waar moderne luxe en functionaliteit hand in hand gaan.`,
    },
  ])

  const [photoCredits, setPhotoCredits] = useState([
    {
      id: 1,
      textA: `Rendering Courtesy of the State of California Department of General Services`,
      textB: `Drone Photograph Courtesy of Hensel Phelps Construction`,
    },
  ])

  // card

  const [title, setTitle] = useState([
    {
      id: 1,
      textA: `Heideland`,
      textB: `Een krachtige samensmelting van marmeren texturen en grafische zwarte accenten in een lichtrijk interieur.`,
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      leftItem: `Projectnaam`,
      rigthItem: 'Heideland',
    },
    {
      id: 2,
      leftItem: `Locatie`,
      rigthItem: 'Stedelijke omgeving (België)',
    },
    {
      id: 3,
      leftItem: `Opdrachtgever`,
      rigthItem: 'Residentiële herontwikkeling / Projectontwikkelaar',
    },
    {
      id: 4,
      leftItem: `Doorlooptijd`,
      rigthItem: 'Ca. 10 Maanden',
    },
    {
      id: 5,
      leftItem: `Duurzaamheid`,
      rigthItem: 'HR++ beglazing, nieuwe condenserende ketels, moderne isolatie',
    },
    {
      id: 6,
      leftItem: `Oppervlakte`,
      rigthItem: 'Ca. 210 m²',
    },
    {
      id: 7,
      leftItem: `Belangrijkste materialen`,
      rigthItem: 'Calacatta-marmerlook, eiken lamelparket, zwart beslag',
    },
  ])

  return (
    <div className="project">
      <TitleScreen
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
        items={items}
        setItems={setItems}
        title={title}
      />
      <BodyProject
        projectSummary={projectSummary}
        photoCredits={photoCredits}
        title={title}
        cardItems={cardItems}
      />
    </div>
  )
}

export default Project_5
