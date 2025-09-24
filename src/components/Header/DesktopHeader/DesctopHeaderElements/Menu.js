import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/my-education-site/company"
        className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }
      >
        COMPANY
      </NavLink>
      <NavLink to="/my-education-site/what-we-do" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        WHAT WE DO
      </NavLink>
      <NavLink to="/my-education-site/portfolio" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        PORTFOLIO
      </NavLink>
      <NavLink to="/my-education-site/careers" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        CAREERS
      </NavLink>
      <NavLink to="/my-education-site/community" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        COMMUNITY
      </NavLink>
      <NavLink to="/my-education-site/newsroom" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        NEWSROOM
      </NavLink>
      <NavLink to="/my-education-site/contact-us" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        CONTACT US
      </NavLink>
    </div>
  )
}

export default Menu
