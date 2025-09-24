import React from 'react'
import './ContactUs.css'
import TitleScreen from './TitleScreen/TitleScreen'
import RequestForm from './RequestForm/RequestForm'
import OurLocations from './OurLocations/OurLocations'

const ContactUs = () => {
  return (
    <div>
      <TitleScreen />
      <RequestForm />
      <OurLocations/>
    </div>
  )
}

export default ContactUs
