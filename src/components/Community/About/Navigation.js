import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="community-navigation">
      <NavLink
        to="/my-education-site/"
        className="community-navigation-home"
      ></NavLink>
      <div className="community-navigation-arrow"></div>
      <div className="community-navigation-this-page-name">Gemeenschap</div>
    </div>
  )
}

export default Navigation
