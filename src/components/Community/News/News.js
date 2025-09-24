import React from 'react'
import './News.css'
import NewsCard from './NewsCard'

const News = () => {
  return (
      <div className="community-news">
        {/* top */}
        <div className="community-news-top">
          <div className="community-news-top-name">
            Laatste carrière nieuws & pers
          </div>
          <div className="community-news-top-learn-more-container">
            <div className="community-news-learn-more-block">
              <div className="community-news-learn-more-text">
                Bekijk al het carrièrenieuws & pers
              </div>
              <div className="community-news-learn-more-arrow"></div>
            </div>
          </div>
        </div>
        {/*  */}
        <NewsCard />
      </div>
  )
}

export default News
