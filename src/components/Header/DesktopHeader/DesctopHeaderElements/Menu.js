import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/my-education-site/company" className="menu-item">
        COMPANY
      </NavLink>
      <NavLink to="/my-education-site/what-we-do" className="menu-item">
        WHAT WE DO
      </NavLink>
      <NavLink to="/my-education-site/portfolio" className="menu-item">
        PORTFOLIO
      </NavLink>
      <NavLink to="/my-education-site/careers" className="menu-item">
        CAREERS
      </NavLink>
      <NavLink to="/my-education-site/community" className="menu-item">
        COMMUNITY
      </NavLink>
      <NavLink to="/my-education-site/contact-us" className="menu-item">
        CONTACT US
      </NavLink>
    </div>
  )
}

export default Menu
