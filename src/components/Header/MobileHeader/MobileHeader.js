import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './MobileHeader.css'
import MobileHeaderButton from './MobileHeaderElements/MobileHeaderButton'
import MobileMenu from './MobileHeaderElements/MobileMenu'
import { MyContext } from '../../../MyContext'
import { NavLink } from 'react-router-dom'

const MobileHeader = () => {
  // const [activeMenu, setActiveMenu] = useState(false)
  const { activeMenu, setActiveMenu } = useContext(MyContext)
  const [modeMobileHeader, setModeMobileHeader] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setModeMobileHeader(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // проверить сразу при монтировании

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="mobile-header-and-menu"
      style={{
        minHeight: activeMenu ? '100vh' : '',
        backgroundColor: activeMenu ? 'rgb(0, 61, 165)' : '',
      }}
    >
      <div
        className={`mobile-header ${modeMobileHeader * !activeMenu ? 'mobile-header-active' : ''}`}
      >
        <NavLink
          to="/"
          className="mobile-header-logo"
          // onClick={()=> setActiveMenu(false)}
        >
          BEAVER
        </NavLink>
        {/* <div className=""></div> */}
        <MobileHeaderButton
          modeMobileHeader={modeMobileHeader}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      {activeMenu ? <MobileMenu /> : ''}
    </div>
  )
}

export default MobileHeader
