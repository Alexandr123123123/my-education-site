import React, { useState } from 'react'
import './Portfolio.css'
import SliderForProjectCatalog from './Slider/Slider'
import Content from './Content/ProjectCatalog'

const Portfolio = () => {
  return (
    <div>
      <SliderForProjectCatalog />
      <Content />
    </div>
  )
}

export default Portfolio
