import React from 'react'
import { useState } from 'react'
import './Project_2.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_2 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/6.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/7.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/8.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/9.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/10.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 11,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/11.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 12,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_2/12.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Dit omvattende renovatieproject betreft de volledige herontwikkeling van het interieur en exterieur van een karaktervol woongebouw, getransformeerd tot een hoogwaardige, minimalistische leefruimte. Het ontwerp integreert naadloos historische architecturale elementen, zoals de originele marmeren schouwen, met hypermoderne afwerkingen. Een centraal focuspunt van de renovatie was het creëren van een vloeiende, lichtrijke omgeving, gerealiseerd door de installatie van kamerhoge glaspartijen met zwarte profielen en een strak, wit-op-wit kleurenpalet.

Het hart van de woning beschikt over een op maat gemaakte keuken met warm houten schrijnwerk, een monolithisch wit kookeiland en hoogwaardige koperen accenten. De technische upgrades omvatten nieuwe energiezuinige beglazing, geïntegreerde smart home-systemen en een volledige vernieuwing van de thermische bouwschil. De buitenrenovatie introduceerde een private aangelegde stadstuin met inheemse vegetatie, wat een rustig stedelijk toevluchtsoord biedt. Door traditioneel vakmanschap — zichtbaar in het handgelegde eiken visgraatparket — te combineren met moderne duurzame technologieën, bereikt dit project een verfijnde balans tussen erfgoed en 21e-eeuwse luxe.`,
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
      textA: `Boudewijn`,
      textB: `Een naadloze versmelting van historisch erfgoed en modern minimalisme.`,
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      leftItem: `Projectnaam`,
      rigthItem: 'Urban Heritage & Minimalist Transformation',
    },
    {
      id: 2,
      leftItem: `Locatie`,
      rigthItem: 'Brussel',
    },
    {
      id: 3,
      leftItem: `Opdrachtgever`,
      rigthItem: 'Particuliere investeerder / Residentiële sector',
    },
    {
      id: 4,
      leftItem: `Doorlooptijd`,
      rigthItem: '14 Maanden',
    },
    {
      id: 5,
      leftItem: `Duurzaamheid`,
      rigthItem: 'Hoogrendementsbeglazing, Smart Home Integratie, Energie-efficiënte technieken',
    },
    {
      id: 6,
      leftItem: `Oppervlakte`,
      rigthItem: 'Ca. 280 m²',
    },
    {
      id: 7,
      leftItem: `Belangrijkste materialen`,
      rigthItem: 'Eiken visgraatparket, Natuursteen (Travertijn), Koperen kranen, Zwart staal',
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

export default Project_2
