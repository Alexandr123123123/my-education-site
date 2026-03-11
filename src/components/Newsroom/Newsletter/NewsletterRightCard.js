import React from 'react'
import './NewsletterRightCard.css'
import NewsletterRightCardButton_1 from './NewsletterRightCardButton_1'

const NewsletterRightCard = () => {
  return (
    <div className="newsroom-newsletter-right-card">
      <div className="newsroom-newsletter-right-card-name">
        Uitgelichte video
      </div>
      <div className="newsroom-newsletter-right-card-video">
        <img
          src={`${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`}
          alt="abc"
        ></img>
        <div className="newsroom-newsletter-right-card-video-layer">
          <div className="newsroom-newsletter-right-card-video-layer-container">
            <div className="newsroom-newsletter-right-card-video-layer-circle">
              <div className="newsroom-newsletter-right-card-video-layer-arrow"></div>
            </div>
            <div className="newsroom-newsletter-right-card-video-layer-text_1">
              Women Answering the Call to Solve the Skilled Labor Shortage
            </div>
            <div className="newsroom-newsletter-right-card-video-layer-text_2">
              Behind Every Successful NECA/IBEW Project is a Team of Powerful
              Women
            </div>
          </div>
        </div>
      </div>
      <NewsletterRightCardButton_1 />
      {/*  */}
    </div>
  )
}

export default NewsletterRightCard
