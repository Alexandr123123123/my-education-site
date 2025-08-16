import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-social_media-and-search">
          <div className="footer-social_media">
            <div className="footer-icon footer-icon_1"></div>
            <div className="footer-icon footer-icon_2"></div>
            <div className="footer-icon footer-icon_3"></div>
            <div className="footer-icon footer-icon_4"></div>
            <div className="footer-icon footer-icon_5"></div>
          </div>
        </div>
        <div className="footer-licenses">
          <div className='footer-licenses-container'>
          <div className='footer-licenses-block_1'>STATE LICENSES</div>
          <div className='footer-licenses-block_2'>Corporate Headquarters</div>
          <div className='footer-licenses-block_2'>CA License # 142881</div>
          <div className='footer-licenses-block_3'>View All State Licenses</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-information">
          <div>
            © 2025 Rosendin Electric, Inc. All Rights Reserved. For Subs
          </div>
          <div className="footer-vertical-line"></div>
          <div>En Español</div>
          <div className="footer-vertical-line"></div>
          <div>Privacy Policy</div>
          <div className="footer-vertical-line"></div>
          <div>Accessibility</div>
        </div>
        <div className="footer-site-by">
          <div className='footer-site-by-container'>Site By </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
