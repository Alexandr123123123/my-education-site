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
        BEDRIJF
      </NavLink>
      <NavLink to="/my-education-site/what-we-do" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        WAT WIJ DOEN
      </NavLink>
      <NavLink to="/my-education-site/portfolio" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        PROJECTEN
      </NavLink>
      <NavLink to="/my-education-site/careers" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        CARRIÈRE
      </NavLink>
      <NavLink to="/my-education-site/community" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        GEMEENSCHAP
      </NavLink>
      <NavLink to="/my-education-site/newsroom" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        NIEUWS
      </NavLink>
      <NavLink to="/my-education-site/contact-us" className={({ isActive }) =>
          isActive ? 'menu-item-active' : 'menu-item'
        }>
        CONTACT
      </NavLink>
    </div>
  )
}

export default Menu
