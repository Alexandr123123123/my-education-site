import React from 'react'
import './Card_3.css'

const Card_3 = () => {
  return (
      <div className="contact-card_3">
        <div className="contact-card_3-layer">
          <div className="contact-card_3-name">Newsletter Signup</div>
          <div className="contact-card_3-text_1">
            Sign up or connect with us to receive the latest news and updates.
          </div>
          <div className="contact-card_3-area">
            <input
              type="text"
              placeholder="Enter Your Email"
              class="contact-card_3-area-text"
            ></input>
            <div className="contact-card_3-area-arrow"></div>
          </div>
          <div className="contact-card_3-text_2">
            We take your privacy seriously. You can unsubscribe at any time.
          </div>
          <div className="contact-card_3-social-media">
            <div className="contact-card_3-social-media-item contact-card_3-social-media-item_1"></div>
            <div className="contact-card_3-social-media-item contact-card_3-social-media-item_2"></div>
            <div className="contact-card_3-social-media-item contact-card_3-social-media-item_3"></div>
            <div className="contact-card_3-social-media-item contact-card_3-social-media-item_4"></div>
            <div className="contact-card_3-social-media-item contact-card_3-social-media-item_5"></div>
          </div>
        </div>
      </div>
  )
}

export default Card_3
