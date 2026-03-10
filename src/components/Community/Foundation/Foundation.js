import React from 'react'
import { useState, useEffect } from 'react'
import './Foundation.css'
import Foundation_1 from './Foundation_1'
import Foundation_2 from './Foundation_2'
import Foundation_3 from './Foundation_3'

const Foundation = () => {
  const [screen, setScreen] = useState(getScreenType())
  
    function getScreenType() {
      const width = window.innerWidth
  
      if (width <= 750) return 1
      return 0
    }
  
    useEffect(() => {
      const handleResize = () => {
        setScreen(getScreenType())
      }
  
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])



  return (
    <div>
      {screen === 0 ? <Foundation_1/> : <Foundation_2/>}
      
    </div>
  )
}

export default Foundation
