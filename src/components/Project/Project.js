import React, { useState } from 'react'
import './Project.css'
import logo from '../../assets/background.jpeg'
import logo1 from '../../assets/abc.jpg'
import ProjectCardDetails from './ProjectElrments/ProjectCardDetails.js'
import RelatedCategories from './ProjectElrments/RelatedCategories.js'
import CreditsBlock from './ProjectElrments/CreditsBlock.js'
import SliderForProject from './ProjectElrments/SliderForProject.js'
import ImageButtonForGallery from './ProjectElrments/ImageButtonForGallery.js'

const Project = () => {
  const [activeGallery, setActiveGallery] = useState(0)

  const [items, setItems] = useState([
    {
      id: 1,
      filename: 
      `${process.env.PUBLIC_URL}/src/image_9.jpg`,
      
      title: 'Первый элемент',
      description: 'Описание первого элемента',
    },
    {
      id: 2,
      filename: 
      `${process.env.PUBLIC_URL}/src/image_7.jpg`,
      title: 'Второй элемент',
      description: 'Описание второго элемента',
    },
    {
      id: 3,
      filename: 
      `${process.env.PUBLIC_URL}/src/image_12.jpg`,
      title: 'Третий элемент',
      description: 'Описание третьего элемента',
    },
  ])

  return (
    <div className="project-container">
      <div className="fullscreen-image-abcabcabc">
        <img
          src={items[0].filename}
          alt="Swing Space View 1"
          className="fullscreen-image"
        />
        <div className="fullscreen-image-filter"></div>
        <div className="project-container-name-project">
          10th & O Street Capitol Annex Swing Space
        </div>
      </div>

      {activeGallery ? (
        <SliderForProject
          items={items}
          activeGallery={activeGallery}
          setActiveGallery={setActiveGallery}
        />
      ) : null}
      <div className="flex-container-body">
        <div className="body-left-block">
          <ImageButtonForGallery
            items={items}
            setActiveGallery={setActiveGallery}
          />
          <div className="header-summary">Project Summary</div>
          <div className="project-summary">
            The Swing Space Annex temporarily houses approximately 1,250
            legislative and executive elected officials and staff from the
            Capitol Annex until the new Annex project is completed. The building
            will then be jointly used as office space for legislative and
            executive employees. The 10-story building is approximately 472,600
            gross square feet and includes function space for committee
            hearings, caucus meetings, general meeting rooms, and legislative
            and Executive Branch offices, as well as parking. The project was
            designed to be one of the most sustainable state office buildings to
            house elected officials in the country, with the goal of LEED Gold,
            and having achieved LEED Platinum. To meet that certification level,
            the building features low water use fixtures, a high-performance
            building facade, materials with high recycled content, day lighting,
            native vegetation on the surrounding site and terraces, as well as
            LED lighting throughout. Upon completion, the 10th & O Street
            building will be Zero Net Carbon and will also achieve Zero Net
            Energy through energy efficiency and offsite power generation.
          </div>
          <RelatedCategories />
          <CreditsBlock />
        </div>
        <div className="body-right-block">
          <ProjectCardDetails />
        </div>
      </div>
    </div>
  )
}

export default Project
