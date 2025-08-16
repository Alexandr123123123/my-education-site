import React from 'react'
import { useState } from 'react'
import './MobileHeaderButton.css'

const MobileHeaderButton = (props) => {
  return (
    <button
      className={`burger ${props.activeMenu ? 'open' : ''} ${!props.activeMenu * props.modeMobileHeader ? 'mobile-header-button-active' : ''}`}
      onClick={() => {
        props.setActiveMenu(!props.activeMenu)
      }}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default MobileHeaderButton
