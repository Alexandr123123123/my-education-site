import React from 'react'
import './About.css'
import Brand from './Brand'

const About = () => {
  return (
    <div>
      <div className="full-screen-green">
        <div className="vertical-block">
          <div className="section-title">01. Why Rosendin</div>
          <div className="section-subtitle"> A Century of Shared Success</div>
          <div className="section-description">
            Since 1919, our reputation has been founded on building quality
            electrical and communications installations, building value for
            clients, and building people in a diverse, safe, and inclusive
            environment. We serve customers with highly complex construction
            projects, who rely on us for knowledge, scalability, quality, and
            safety. Infused with a sense of shared ownership, our entire team
            focuses on building relationships that deliver results.
          </div>
          <div className="section-link">LEARN MORE</div>
        </div>
        {/* <div className='about-container-for-worker-image'>
        <img src="src/worker_1.png" alt="abc"></img>
        <div className='about-container-for-worker-image-2'>
          <img src="src/worker_2.png" alt="abc"></img>
        </div>
      </div>
      <div className='about-brand-catalog'>
        <div className='about-brand-catalog-item'>
          <img src="src/brand_1.png" alt="abc"></img>
        </div>
        <div className='about-brand-catalog-item'>
          <img src="src/brand_2.png" alt="abc"></img>
        </div>
        <div className='about-brand-catalog-item'>
          <img src="src/brand_3.png" alt="abc"></img>
        </div>
        <div className='about-brand-catalog-item'>
          <img src="src/brand_4.png" alt="abc"></img>
        </div>
        <div className='about-brand-catalog-item'>
          <img src="src/brand_5.png" alt="abc"></img>
        </div>
      </div> */}
      </div>
          <Brand/>
    </div>
  )
}

export default About
