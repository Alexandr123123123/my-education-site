import React from 'react'
import './Card_1.css'

const Card_1 = (props) => {
  return (
    <div key={props.card_1.id} className="contact-card_1">
      <div className="contact-card_1-name">{props.card_1.name}</div>
      <div className="contact-card_1-text">
        {props.card_1.text}
      </div>
      {/* learn-more */}
      <div className="contact-card_1-learn-more-container">
        <div className="contact-card_1-learn-more">
          <div className="contact-card_1-learn-more-text">
            Career Center
          </div>
          <div className="contact-card_1-learn-more-arrow"></div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default Card_1
