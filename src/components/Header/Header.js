import React from 'react'
import { useState, useEffect } from 'react'
import './Header.css'
import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Функция для проверки ширины экрана
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900) // например, если ширина <= 768px — мобильный
    }

    checkMobile() // проверить при загрузке
    window.addEventListener('resize', checkMobile) // слушать ресайзы

    return () => window.removeEventListener('resize', checkMobile) // очистка слушателя
  }, [])

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </>
  )
}

export default Header