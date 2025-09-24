import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="careers-navigation">
      <NavLink
        to="/my-education-site/"
        className="careers-navigation-home"
      ></NavLink>
      <div className="careers-navigation-arrow"></div>
      <div className="careers-navigation-this-page-name">Carrières</div>
    </div>
  )
}

export default Navigation
