import React from 'react'
import './Community.css'
import TitleScreen from './TitleScreen/TitleScreen'
import About from './About/About'
import Foundation from './Foundation/Foundation'
import News from './News/News'
import CompanyInAction from './CompanyInAction/CompanyInAction'
import BottomSlider from './BottomSlider/BottomSlider'
import Organizations from './Organizations/Organizations'

const Community = () => {
  return (
    <div className='Community'>
        <TitleScreen/>
        <About/>
        <Foundation/>
        <News/>
        <CompanyInAction/>
        <BottomSlider/>
        <Organizations/>
    </div>
  )
}

export default Community