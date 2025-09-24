import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="newsroom-navigation">
      <NavLink
        to="/my-education-site/"
        className="newsroom-navigation-home"
      ></NavLink>
      <div className="newsroom-navigation-arrow"></div>
      <div className="newsroom-navigation-this-page-name">Bedrijfs nieuws</div>
    </div>
  )
}

export default Navigation
