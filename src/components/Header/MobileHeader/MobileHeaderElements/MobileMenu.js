import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './MobileMenu.css'
import { MyContext } from '../../../../MyContext'


function MobileMenu() {
  const { activeMenu, setActiveMenu} = useContext(MyContext);
  // const [modeHeader, setModeHeader] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY
  //     setModeHeader(offset > 100)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   handleScroll() // проверить сразу при монтировании

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <div className="mobile-menu">
      <NavLink to="/company" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        COMPANY
      </NavLink>
      <NavLink to="/what-we-do" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        WHAT WE DO
      </NavLink>
      <NavLink to="/portfolio" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        PORTFOLIO
      </NavLink>
      <NavLink to="/careers" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        CAREERS
      </NavLink>
      <NavLink to="/community" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        COMMUNITY
      </NavLink>
      <NavLink to="/contact-us" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        CONTACT US
      </NavLink>
    </div>
  )
}

export default MobileMenu
