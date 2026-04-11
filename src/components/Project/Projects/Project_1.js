import React from 'react'
import { useState } from 'react'
import './Project_1.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_1 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_1/Lescluzestraat_6.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Dit project omvat een volledige interieurrenovatie van een residentieel appartement, waarbij de bestaande ruimte werd getransformeerd naar een moderne, minimalistische woonomgeving. Het ontwerp legt de nadruk op strakke architecturale lijnen, hoogwaardige materialen en een neutraal kleurenpalet om natuurlijk licht en ruimtelijkheid te maximaliseren.
De renovatie omvat een volledig herontworpen open keuken met maatwerk kasten, geïntegreerde toestellen en een centraal keukeneiland met natuursteen werkblad en een moderne koperkleurige kraan. De badkamer werd volledig vernieuwd en uitgevoerd in een minimalistische stijl met grote marmerlook tegels en zwevende sanitaire elementen.
Doorheen het appartement werd de bestaande afwerking vervangen door een nieuw eiken visgraatparket, wat zorgt voor een warme en elegante uitstraling. Wanden en plafonds werden volledig vernieuwd om een strak en uniform interieur te creëren. Grote ramen met zwarte profielen versterken de natuurlijke lichtinval en verbinden de woning met de stedelijke omgeving.
Daarnaast werden ook de technische installaties volledig vernieuwd, inclusief elektriciteit, sanitair en verwarming, wat zorgt voor moderne functionaliteit en energie-efficiëntie. Het eindresultaat is een verfijnde woonruimte die comfort, duurzaamheid en hedendaags Europees design combineert.`,
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
      textA: `Lescluzestraat`,
      textB: `Turn-key renovatie gericht op maximaal wooncomfort en energie-efficiëntie`,
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      leftItem: `Projectnaam`,
      rigthItem: 'Residential Apartment Renovation',
    },
    {
      id: 2,
      leftItem: `Locatie`,
      rigthItem: 'Antwerpen',
    },
    {
      id: 3,
      leftItem: `Projecttype`,
      rigthItem: 'Volledige interieurrenovatie',
    },
    {
      id: 4,
      leftItem: `Duur`,
      rigthItem: '4 maanden',
    },
    {
      id: 5,
      leftItem: `Oppervlakte`,
      rigthItem: '140 m²',
    },
    {
      id: 6,
      leftItem: `Technische werken`,
      rigthItem: 'Volledige vernieuwing HVAC/elektriciteit/sanitair',
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

export default Project_1
