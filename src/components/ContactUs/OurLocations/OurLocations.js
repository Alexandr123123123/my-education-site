import React, { useState } from 'react'
import './OurLocations.css'
import Card_1 from './Card_1'
import Card_2 from './Card_2'
import Card_3 from './Card_3'

const OurLocations = () => {
  const [locations, setLocations] = useState([
    [
      {
        id: 1,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 2,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
    ],
    [
      {
        id: 1,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 2,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
      {
        id: 3,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 4,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
    ],
    [
      {
        id: 1,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 2,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
    ],
    [
      {
        id: 1,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 2,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
      {
        id: 3,
        city: 'Aiea, HI',
        fullCity: '99-129 Waiua Way Aiea, HI 96701',
        position: 'abc',
      },
      {
        id: 4,
        city: 'Anaheim, CA',
        fullCity: '1730 South Anaheim Way Anaheim, CA 92805',
        position: 'abc',
      },
    ],
  ])

  const [locationsArea, setLocationsArea] = useState([
    {
      id: 1,
      area: 'West (12)',
    },
    {
      id: 2,
      area: 'Northwest (3)',
    },
    {
      id: 3,
      area: 'East (3)',
    },
    {
      id: 4,
      area: 'South (6)',
    },
  ])

  const [activeLocationsArea, setActiveLocationsArea] = useState(0)

  const [card_1, setCard_1] = useState([
    {
      id: 1,
      name: 'Working At Rosendin',
      text: 'We’ve created an environment built around relationships and growth. Our vision is to lead, inspire and help our people become the best they can be.',
    },
    {
      id: 2,
      name: 'Working At Rosendin',
      text: 'We’ve created an environment built around relationships and growth. Our vision is to lead, inspire and help our people become the best they can be.',
    },
    {
      id: 3,
      name: 'Working At Rosendin',
      text: 'We’ve created an environment built around relationships and growth. Our vision is to lead, inspire and help our people become the best they can be.',
    },
  ])

  return (
    <div className="contact-us-our-locations">
      <div className="contact-us-our-locations-left">
        <div className="contact-us-our-locations-left-name">Our Locations</div>
        {/* top */}
        {/* <div className="contact-us-our-locations-left-top-container"> */}
        <div className="contact-us-our-locations-left-top">
          {locationsArea.map((item, index) => (
            <div
              key={ClipboardItem.id}
              className={`contact-us-our-locations-left-top-item ${
                activeLocationsArea === index
                  ? 'contact-us-our-locations-left-top-item-active'
                  : ''
              }`}
              onClick={() => setActiveLocationsArea(index)}
            >
              {item.area}
            </div>
          ))}
        </div>
        {/* </div> */}
        {/*  */}
        <div className="contact-us-our-locations-left-body">
          {locations[activeLocationsArea].map((location) => (
            <div className="contact-us-our-locations-left-body-item">
              <div className="contact-us-our-locations-left-body-item-container">
                <div className="contact-us-our-locations-left-body-item-city">
                  {location.city}
                </div>
                <div className="contact-us-our-locations-left-body-item-full-city">
                  {location.fullCity}
                </div>
                <div className="contact-us-our-locations-left-body-item-position">
                  {location.position}
                </div>
                {/* learn-more */}
                <div className="contact-us-our-locations-left-body-item-learn-more-container">
                  <div className="contact-us-our-locations-left-body-item-learn-more">
                    <div className="contact-us-our-locations-left-body-item-learn-more-text">
                      Office Details
                    </div>
                    <div className="contact-us-our-locations-left-body-item-learn-more-arrow"></div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="contact-us-our-locations-raight">
        {card_1.map((item) => (
          <Card_1 card_1={item} />
        ))}
        <Card_2 />
        <Card_3/>
      </div>
    </div>
  )
}

export default OurLocations
