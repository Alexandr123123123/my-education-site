import React, { useState } from 'react'
import './Project.css'
import TitleScreen from './TitleScreen/TitleScreen.js'
import BodyProject from './BodyProject/BodyProject.js'

const Project = () => {
  // titleScreen
  const [activeGallery, setActiveGallery] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      filename: `${process.env.PUBLIC_URL}/src/project/image_9.jpg`,
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: `${process.env.PUBLIC_URL}/src/project/image_7.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: `${process.env.PUBLIC_URL}/src/project/image_12.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
  ])

  // bodyProject

  const [projectSummary, setProjectSummary] = useState([
    {
      id: 1,
      text: `The Swing Space Annex temporarily houses approximately 1,250 legislative
and executive elected officials and staff from the Capitol Annex until
the new Annex project is completed. The building will then be jointly
used as office space for legislative and executive employees.

The 10-story building is approximately 472,600 gross square feet and
includes function space for committee hearings, caucus meetings,
general meeting rooms, and legislative and Executive Branch offices,
as well as parking.

The project was designed to be one of the most sustainable state office
buildings to house elected officials in the country, with the goal of
LEED Gold, and having achieved LEED Platinum. To meet that certification
level, the building features low water use fixtures, a high-performance
building facade, materials with high recycled content, day lighting,
native vegetation on the surrounding site and terraces, as well as LED
lighting throughout.

Upon completion, the 10th & O Street building will be Zero Net Carbon
and will also achieve Zero Net Energy through energy efficiency and
offsite power generation.`,
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
      textA: `10th & O Street Capitol Annex Swing Space`,
      textB: `Temporary facilities for more than 1200 legislative and executive elected officials and staff`,
    },
  ])

  const [cardItems, setCardItems] = useState([
      {
        id: 1,
        leftItem: `Location`,
        rigthItem: 'Sacramento, CA',
      },
      {
        id: 2,
        leftItem: `Client`,
        rigthItem: 'State of California Department of General Services',
      },
      {
        id: 3,
        leftItem: `General Contractor`,
        rigthItem: 'Hensel Phelps Construction',
      },
      {
        id: 4,
        leftItem: `Duration`,
        rigthItem: '36 Months',
      },
      {
        id: 5,
        leftItem: `Budget`,
        rigthItem: '$52 Milliont',
      },
      {
        id: 6,
        leftItem: `Size`,
        rigthItem: '472,600 SF',
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

export default Project
