import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="contact-navigation">
      <NavLink
        to="/my-education-site"
        className="contact-navigation-home"
      ></NavLink>
      <div className="contact-navigation-arrow"></div>
      <div className="contact-navigation-this-page-name">Contacten</div>
    </div>
  )
}

export default Navigation
