import React from 'react'
import { useState } from 'react'
import './Project_3.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_3 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/6.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_3/7.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Dit renovatieproject transformeert een traditionele halfopen bebouwing tot een lichtrijke, moderne gezinswoning met een sterke nadruk op visuele rust en hoogwaardige afwerking. De buitenzijde wordt gekenmerkt door een strak witgekalkte gevel die in scherp contrast staat met de nieuwe, vrijstaande bijgebouwen bekleed met verticaal houten latwerk (Thermowood). Deze houten texturen creëren een warme, organische overgang tussen de architectuur en de omliggende tuin.

Binnenin wordt de esthetiek gedefinieerd door een minimalistisch kleurenpalet en natuurlijke materialen. De leefruimtes zijn voorzien van een ambachtelijk gelegd eiken visgraatparket, wat een klassiek cachet geeft aan het verder hypermoderne interieur. De open keuken fungeert als het centrale ankerpunt, met een naadloos marmeren eiland, greeploze witte kasten en subtiele koperen accenten. Grote raampartijen met ranke zwarte profielen zorgen voor een maximale lichtinval en een directe verbinding met de buitenruimte, terwijl de loft-achtige zolderkamer met dakramen de ruimtelijkheid van de woning benadrukt.`,
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
      textA: `Edegem`,
      textB: `Een naadloze versmelting van historisch erfgoed en modern minimalisme.`,
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      leftItem: `Locatie`,
      rigthItem: 'Regio Antwerpen',
    },
    {
      id: 2,
      leftItem: `Opdrachtgever`,
      rigthItem: 'Particuliere investeerder / Residentiële sector',
    },
    {
      id: 3,
      leftItem: `Doorlooptijd`,
      rigthItem: '10 Maanden',
    },
    {
      id: 4,
      leftItem: `Duurzaamheid`,
      rigthItem:
        'Energie-efficiënte beglazing, Hoogwaardige isolatie, Thermowood',
    },
    {
      id: 5,
      leftItem: `Oppervlakte`,
      rigthItem: 'Ca. 210 m²',
    },
    {
      id: 6,
      leftItem: `Materialen`,
      rigthItem: 'Eiken visgraatparket, Carrara marmerlook, Zwart aluminium',
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

export default Project_3
