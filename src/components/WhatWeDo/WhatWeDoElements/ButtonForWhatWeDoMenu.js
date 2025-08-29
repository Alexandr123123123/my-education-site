import React from 'react'
import './ButtonForWhatWeDoMenu.css'

const ButtonForWhatWeDoMenu = (props) => {
  return (
      <button
        className={`button-for-what-we-do-menu ${props.activeMenu ? 'button-for-what-we-do-menu-open' : ''} `}
        // onClick={() => {
        //   props.setActiveMenu(!props.activeMenu)
        // }}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
  )
}

export default ButtonForWhatWeDoMenu
