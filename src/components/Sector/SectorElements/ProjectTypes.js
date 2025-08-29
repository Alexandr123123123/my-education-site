import React from 'react'
import { useState } from 'react'
import './ProjectTypes.css'

const ProjectTypes = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Audio Visual Besturing en Automatisering Systemen',
    },
    {
      id: 2,
      title: 'Achtergrond Muziek en PA Systemen',
    },
    {
      id: 3,
      title: 'Board Rooms en Meeting Rooms',
    },
    {
      id: 4,
      title: 'Broadcast Systemen',
    },
    {
      id: 5,
      title: 'Command en Control Systemen',
    },
    {
      id: 6,
      title: 'Convention Centers',
    },
    {
      id: 7,
      title: 'Digital Cinema Theaters',
    },
    {
      id: 8,
      title: 'Digital Signage Oplossingen',
    },
    {
      id: 9,
      title: 'Large Format LCD en LED Display Oplossingen',
    },
    {
      id: 10,
      title: 'Large Venue Sound en Video Systemen',
    },
    {
      id: 11,
      title: 'Smart en Interactive Classroom Systemen',
    },
    {
      id: 12,
      title: 'Video Conferencing Oplossingen',
    },
  ])

  return (
    <div className="sector-project-types">
      <div className="sector-project-types-image"></div>
      <div className="sector-project-types-name">Projecttypen</div>
      <div className="sector-project-types-container">
        {items.map((item) => (
          <div className="sector-project-types-item">
            <div className="sector-project-types-left-item">
              <div className="sector-project-types-item-image"></div>
            </div>
            <div key={item.id} className="sector-project-types-right-item">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTypes
