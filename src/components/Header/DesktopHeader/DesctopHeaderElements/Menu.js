import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/company" className="menu-item">
        COMPANY
      </NavLink>
      <NavLink to="/what-we-do" className="menu-item">
        WHAT WE DO
      </NavLink>
      <NavLink to="/portfolio" className="menu-item">
        PORTFOLIO
      </NavLink>
      <NavLink to="/careers" className="menu-item">
        CAREERS
      </NavLink>
      <NavLink to="/community" className="menu-item">
        COMMUNITY
      </NavLink>
      <NavLink to="/contact-us" className="menu-item">
        CONTACT US
      </NavLink>
    </div>
  )
}

export default Menu
