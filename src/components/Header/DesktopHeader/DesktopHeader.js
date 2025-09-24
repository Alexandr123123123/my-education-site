import React from 'react'
import { useState, useEffect } from 'react'
import './DesktopHeader.css'
import Menu from './DesctopHeaderElements/Menu'
import ContactInformation from './DesctopHeaderElements/ContactInformation'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [modeHeader, setModeHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setModeHeader(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // проверить сразу при монтировании

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`header ${modeHeader ? 'header-active' : ''}`}>
      <NavLink to="/my-education-site" className="header-logo">
        BEAVER
      </NavLink>
      <div className="header-menu-and-contact-information-block">
        <ContactInformation modeHeader={modeHeader} />
        <Menu />
      </div>
    </div>
  )
}

export default Header
