import React from 'react'
import './Landing.css'
import Main from './LandingElements/Main'
import About from './LandingElements/About'
import Technology from './LandingElements/Technology'
import HistoryTwo from './LandingElements/HistoryTwo'
import Working from './LandingElements/Working'
import Team from './LandingElements/Team'
import FeaturedProjects from './LandingElements/FeaturedProjects'

function MainFeed() {
  return (
    <div className="main-feed">
      <Main />
      <About />
      <Technology />
      <HistoryTwo />
      <Working />
      <Team />
      <FeaturedProjects />
    </div>
  )
}

export default MainFeed
