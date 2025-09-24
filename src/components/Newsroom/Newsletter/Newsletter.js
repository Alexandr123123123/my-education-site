import React from 'react'
import './Newsletter.css'
import NewsletterCard from './NewsletterCard'

const Newsletter = () => {
  return (
    <div className="newsroom-newsletter">
      <div className="newsroom-newsletter-body">
        {/* left */}
        <div className="newsroom-newsletter-body-left">
          <div className="newsroom-newsletter-body-left-name">
            Laatste nieuwsbrief
          </div>
          <div>
            <NewsletterCard />
          </div>
          {/* learn-more-left */}
          <div className="newsroom-newsletter-learn-more-container">
            <div className="newsroom-newsletter-learn-more">
              <div className="newsroom-newsletter-learn-more-text">
                All Newsletters
              </div>
              <div className="newsroom-newsletter-learn-more-arrow"></div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* right */}
        <div className="newsroom-newsletter-body-right">
          <div className="newsroom-newsletter-body-right-name">
            Uitgelichte video
          </div>
          <div className="newsroom-newsletter-body-right-video">
            <img
              src={`${process.env.PUBLIC_URL}/src/market-sectors/visual-system.jpg`}
              alt="abc"
            ></img>
            <div className="newsroom-newsletter-body-right-video-layer">
              <div className="newsroom-newsletter-body-right-video-layer-container">
                <div className="newsroom-newsletter-body-right-video-layer-circle">
                  <div className="newsroom-newsletter-body-right-video-layer-arrow"></div>
                </div>
                <div className="newsroom-newsletter-body-right-video-layer-text_1">
                  Women Answering the Call to Solve the Skilled Labor Shortage
                </div>
                <div className="newsroom-newsletter-body-right-video-layer-text_2">
                  Behind Every Successful NECA/IBEW Project is a Team of
                  Powerful Women
                </div>
              </div>
            </div>
          </div>
          {/* learn-more-right */}
          <div className="newsroom-newsletter-learn-more-container">
            <div className="newsroom-newsletter-learn-more">
              <div className="newsroom-newsletter-learn-more-text">
                All Videos
              </div>
              <div className="newsroom-newsletter-learn-more-arrow"></div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Newsletter
