import React from 'react'
import { useState } from 'react'
import './Project_4.css'
import TitleScreen from '../TitleScreen/TitleScreen'
import BodyProject from '../BodyProject/BodyProject'

const Project_4 = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/1.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/2.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/3.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 4,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/4.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 5,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/5.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 6,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/6.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 7,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/7.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 8,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/8.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 9,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/9.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
    {
      id: 10,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/10.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 11,
      filename: `${process.env.PUBLIC_URL}/src/projects/project_4/11.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `Dit renovatieproject belichaamt de essentie van modern minimalisme, waarbij een gedateerd appartement is getransformeerd tot een lichte, serene en hoogwaardige leefomgeving. Het ontwerp wordt gedefinieerd door een strikt wit-op-wit kleurenpalet, wat een maximaal gevoel van ruimte en lichtinval creëert. Centraal in de woning staat de strakke, greeploze keuken met een monolithisch kookeiland en een geïntegreerd afzuigsysteem, subtiel geaccentueerd door koperen kranen en zwarte design-schakelaars. De vloer, uitgevoerd in breed eiken lamelparket, brengt natuurlijke warmte in het verder koele en abstracte interieur. Grote raampartijen omlijsten het stedelijke uitzicht als levende schilderijen, terwijl de technische infrastructuur volledig is gemoderniseerd met slanke verticale radiatoren en energiezuinige inbouwspots. Het resultaat is een rustgevende, bijna sculpturale architectuur die functionele luxe combineert met een compromisloze esthetiek.`,
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
      textA: `Potter`,
      textB: `Een samensmelting van licht, ruimte en puur minimalisme.`,
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      leftItem: `Projectnaam`,
      rigthItem: 'Pure White Minimalist Living',
    },
    {
      id: 2,
      leftItem: `Locatie`,
      rigthItem: 'Stedelijke omgeving (Antwerpen/Brussel)',
    },
    {
      id: 3,
      leftItem: `Opdrachtgever`,
      rigthItem: 'Residentiële herontwikkeling',
    },
    {
      id: 4,
      leftItem: `Doorlooptijd`,
      rigthItem: 'Ca. 8 Maanden',
    },
    {
      id: 5,
      leftItem: `Duurzaamheid`,
      rigthItem: 'HR++ beglazing, energiezuinige LED-verlichting, nieuwe thermische radiatoren',
    },
    {
      id: 6,
      leftItem: `Oppervlakte`,
      rigthItem: 'Ca. 95 m²',
    },
    {
      id: 7,
      leftItem: `Belangrijkste materialen`,
      rigthItem: 'Breed eiken parket, wit marmerlook composiet, koperen kranen, mat wit schrijnwerk',
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

export default Project_4
