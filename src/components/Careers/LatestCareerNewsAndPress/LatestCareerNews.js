import React from 'react'
import './LatestCareerNews.css'
import CareerNewsCards from './CareerNewsCards'

const LatestCareerNews = () => {
  return (
    <div className="careers-latest-career-news">
      {/* top */}
      <div className="careers-latest-career-news-top">
        <div className="careers-latest-career-news-top-name">
          Laatste Gemeenschaps nieuws & Pers
        </div>
        <div className="careers-latest-career-news-top-learn-more-container">
          <div className="careers-latest-career-news-learn-more-block">
            <div className="careers-latest-career-news-learn-more-text">
              Bekijk al het gemeenschaps nieuws & pers
            </div>
            <div className="careers-latest-career-news-learn-more-arrow"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <CareerNewsCards/>
    </div>
  )
}

export default LatestCareerNews
