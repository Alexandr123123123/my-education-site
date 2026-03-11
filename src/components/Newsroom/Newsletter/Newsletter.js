import React from 'react'
import './Newsletter.css'
import NewsletterLeftCard from './NewsletterLeftCard'
import NewsletterRightCard from './NewsletterRightCard'

const Newsletter = () => {
  return (
    <div className="newsroom-newsletter">
      <div className="newsroom-newsletter-body">
        <NewsletterLeftCard/>
        <NewsletterRightCard/>
      </div>
    </div>
  )
}

export default Newsletter
