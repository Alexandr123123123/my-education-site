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
      <NavLink to="/my-education-site/company" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        BEDRIJF
      </NavLink>
      <NavLink to="/my-education-site/what-we-do" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        WAT WIJ DOEN
      </NavLink>
      <NavLink to="/my-education-site/portfolio" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        PROJECTEN
      </NavLink>
      <NavLink to="/my-education-site/careers" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        CARRIÈRE
      </NavLink>
      <NavLink to="/my-education-site/community" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        GEMEENSCHAP
      </NavLink>
      <NavLink to="/my-education-site/newsroom" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        NIEUWS
      </NavLink>
      <NavLink to="/my-education-site/contact-us" className="mobile-menu-item" onClick={()=> setActiveMenu(false)}>
        CONTACT
      </NavLink>
    </div>
  )
}

export default MobileMenu
