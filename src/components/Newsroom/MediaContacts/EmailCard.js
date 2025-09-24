import React from 'react'
import './EmailCard.css'

const EmailCard = () => {
  return (
    <div className="newsroom-email-card">
      <div className='newsroom-email-card-layer'>
        <div className="newsroom-email-card-name">Newsletter Signup</div>
        <div className="newsroom-email-card-text_1">
          Sign up or connect with us to receive the latest news and updates.
        </div>
        <div className="newsroom-email-card-area">
          <input
            type="text"
            placeholder="Enter Your Email"
            class="newsroom-email-card-area-text"
          ></input>
          <div className="newsroom-email-card-area-arrow"></div>
        </div>
        <div className="newsroom-email-card-text_2">
          We take your privacy seriously. You can unsubscribe at any time.
        </div>
        <div className="newsroom-email-card-social-media">
          <div className="newsroom-email-card-social-media-item newsroom-email-card-social-media-item_1"></div>
          <div className="newsroom-email-card-social-media-item newsroom-email-card-social-media-item_2"></div>
          <div className="newsroom-email-card-social-media-item newsroom-email-card-social-media-item_3"></div>
          <div className="newsroom-email-card-social-media-item newsroom-email-card-social-media-item_4"></div>
          <div className="newsroom-email-card-social-media-item newsroom-email-card-social-media-item_5"></div>
        </div>
      </div>
    </div>
  )
}

export default EmailCard
