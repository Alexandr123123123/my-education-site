import React from 'react'
import { useState } from 'react'
import './RequestForm.css'
import Navigation from './Navigation'

const RequestForm = () => {
  const [click, setClick] = useState(false)
  return (
    <div className="contact-request-form">
      <Navigation />
      <div className="contact-request-form-title">
        Neem contact op met het grootste, door werknemers beheerde
        elektrotechnische bedrijf van het land.
      </div>
      <div className="contact-request-form-body">
        {/* left */}
        <div className="contact-request-form-body-left">
          <div className="contact-request-form-body-left-name">
            Request For Information
          </div>
          <div className="contact-request-form-body-left-text">
            For more information on Rosendin and how we can meet your needs,
            please fill out the form below and someone will respond to your
            inquiry within 24 hours.
          </div>
        </div>
        {/* right */}
        <div className="contact-request-form-body-right">
          <div className="contact-request-form-body-right-container_1">
            <div className="contact-request-form-body-right-container_2">
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_1">
                <input placeholder="Nature of Your Inquiry *"></input>
              </div>
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_2">
                <input placeholder="Full Name *"></input>
              </div>
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_3">
                <input placeholder="Email Address (Work) *"></input>
              </div>
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_4">
                <input placeholder="Subject *"></input>
              </div>
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_5">
                <input placeholder="Phone Number"></input>
              </div>
              <div className="contact-request-form-body-right-item contact-request-form-body-right-item_6">
                <textarea placeholder="Your Message *" rows="4"></textarea>
              </div>
            </div>
          </div>
          {/* click */}
          <div
            className="contact-request-form-body-right-click"
            onClick={() => setClick(!click)}
          >
            <div className="contact-request-form-body-right-click-left">
              {click && (
                <div className="contact-request-form-body-right-click-left-image"></div>
              )}
            </div>
            <div className="contact-request-form-body-right-click-text">
              Click here to receive Rosendin's quarterly newsletter.
            </div>
          </div>
          {/* button */}
          <div className="contact-request-form-body-right-button">
            Submit Request
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default RequestForm
