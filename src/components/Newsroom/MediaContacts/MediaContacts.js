import React from 'react'
import { useState } from 'react'
import './MediaContacts.css'
import EmailCard from './EmailCard'

const MediaContacts = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Rosendin Horizontal Logo Files' },
    { id: 2, title: 'Rosendin Vertical Logo Files' },
    { id: 3, title: 'Rosendin Brand Guidelines' },
    { id: 4, title: 'Corporate Brochure' },
    { id: 5, title: 'Careers Brochure' },
    { id: 6, title: 'Field Careers Brochure' },
    { id: 7, title: 'Renewables Brochure' },
    { id: 8, title: 'Audio Visual Brochure' },
    { id: 9, title: 'BIM Brochure' },
    { id: 10, title: 'Data Centers Brochure' },
    { id: 11, title: 'Design-Build Brochure' },
    { id: 12, title: 'Prefabrication Brochure' },
  ])

  return (
    <div className="newsroom-media-contacts">
      <div className="newsroom-media-contacts-body">
        {/* left */}
        <div className="newsroom-media-contacts-body-left">
          <div className="newsroom-media-contacts-body-left-name">
            Media Contacts
          </div>
          {/* card */}
          <div className="newsroom-media-contacts-body-left-card">
            <div className="newsroom-media-contacts-body-left-card-image-container">
              <div className="newsroom-media-contacts-body-left-card-image">
                <img
                  src={`${process.env.PUBLIC_URL}/src/workers/president_1.jpg`}
                  alt="abc"
                ></img>
              </div>
            </div>
            {/* card-right */}
            <div className="newsroom-media-contacts-body-left-card-contacts">
              <div className="newsroom-media-contacts-body-left-card-name">
                George Washington
              </div>
              <div className="newsroom-media-contacts-body-left-card-position">
                1st president of the US
              </div>
              <div className="newsroom-media-contacts-body-left-card-email">
                GeorgeWashington@gmail.com
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
        {/* right */}
        <div className="newsroom-media-contacts-body-right">
          <div className="newsroom-media-contacts-body-right-name">
            Media Kit
          </div>
          <div className="newsroom-media-contacts-body-right-links">
            <div className="newsroom-media-contacts-body-right-links-name">
              Links/Downloads
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="newsroom-media-contacts-body-right-links-item"
              >
                <div className="newsroom-media-contacts-body-right-links-item-image"></div>
                {item.title}
              </div>
            ))}
          </div>
          <EmailCard />
        </div>
      </div>
    </div>
  )
}

export default MediaContacts
