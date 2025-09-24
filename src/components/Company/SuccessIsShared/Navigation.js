import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="company-navigation">
      <NavLink
        to="/my-education-site/"
        className="company-navigation-home"
      ></NavLink>
      <div className="company-navigation-arrow"></div>
      <div className="company-navigation-this-page-name">
        Bedrijf
      </div>
    </div>
  )
}

export default Navigation
