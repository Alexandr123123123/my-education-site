import React from 'react'
import './ContactInformation.css'

const ContactInformation = (props) => {
  return (
    <div className="contact-information">
      <div className="contain-for-icon">
        <div className="icon"></div>
      </div>
      <div className="contact-information-item">24/7 EMERGENCY</div>
      <div
        className={`contact-information-line${props.modeHeader ? 'contact-information-line-active' : ''}`}
      ></div>
      <div className="contact-information-item">100+ YEARS STRONG</div>
      <div
        className={`contact-information-line${props.modeHeader ? 'contact-information-line-active' : ''}`}
      ></div>
      <div className="contact-information-item">ROSENDIN FOUNDATION</div>
      <div
        className={`contact-information-line${props.modeHeader ? 'contact-information-line-active' : ''}`}
      ></div>
      <div className="contact-information-item">FOR TRADE PARTNERS</div>
    </div>
  )
}

export default ContactInformation
