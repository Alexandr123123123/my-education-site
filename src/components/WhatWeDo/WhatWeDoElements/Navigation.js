import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="what-we-do-navigation">
      <NavLink to="/" className="what-we-do-navigation-home"></NavLink>
      <div className="what-we-do-navigation-arrow"></div>
      <div className="what-we-do-navigation-page-name">Wat Wij Doen</div>
    </div>
  )
}

export default Navigation
