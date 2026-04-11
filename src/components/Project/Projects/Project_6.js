import React from 'react'
import { useState } from 'react'
import './Project_6.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_6 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_6/1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_6/2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_6/3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_6/4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_6/5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Dit renovatieproject, gekenmerkt door het uitgebreide gebruik van warm eikenhout en kamerhoge glaspartijen, vormt een harmonieuze verbinding tussen de woning en de omliggende natuur. De architecturale visie steunt op transparantie en tactiliteit; grote schuiframen met slanke profielen vervagen de grens tussen de binnenruimte en de royale houten terrassen. In het interieur zorgt het natuurlijke houtwerk voor een rustgevend contrast met de strakke, moderne lijnen van het meubilair en de lichte gietvloeren. Bijzondere aandacht is besteed aan de integratie van buitenruimtes, waarbij het terras fungeert als een directe verlenging van de leefruimte. De technische uitvoering omvat hoogwaardige isolatieprofielen en zonwerende beglazing, wat resulteert in een energie-efficiënte woning met een overvloed aan natuurlijk daglicht. Dit project is een schoolvoorbeeld van hoe natuurlijke materialen en een modern open concept kunnen samensmelten tot een warme, eigentijdse thuis.`,
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
      textA: `Oogststraat`,
      textB: `Een naadloze overgang tussen binnen en buiten met natuurlijke texturen en modern comfort.`,
    },
  ])

  const [cardItems, setCardItems] = useState([
   {
      id: 1,
      leftItem: `Projectnaam`,
      rigthItem: 'Eiken & Glas Transformatie',
    },
    {
      id: 2,
      leftItem: `Locatie`,
      rigthItem: 'Vlaams-Brabant, België',
    },
    {
      id: 3,
      leftItem: `Opdrachtgever`,
      rigthItem: 'Particuliere woningbouw',
    },
    {
      id: 4,
      leftItem: `Doorlooptijd`,
      rigthItem: 'Ca. 12 Maanden',
    },
    {
      id: 5,
      leftItem: `Duurzaamheid`,
      rigthItem: 'Isolerende houten profielen, zonwerend glas, terras-integratie',
    },
    {
      id: 6,
      leftItem: `Oppervlakte`,
      rigthItem: 'Ca. 165 m²',
    },
    {
      id: 7,
      leftItem: `Belangrijkste materialen`,
      rigthItem: 'Natuurlijk eikenhout, kamerhoog glas, antraciet aluminium, houten terrasplanken',
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

export default Project_6
