import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="sector-navigation">
      <NavLink to="/" className="sector-navigation-home"></NavLink>
      <div className="sector-navigation-arrow"></div>
      <NavLink to="/what-we-do" className="sector-navigation-page-name">
        Wat Wij Doen
      </NavLink>
      <div className="sector-navigation-arrow"></div>
      <div className="sector-navigation-this-page-name">Audio/Visual systemen</div>
    </div>
  )
}

export default Navigation
