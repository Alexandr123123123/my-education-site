import React from 'react'
import './Newsroom.css'
import TitleScreen from './TitleScreen/TitleScreen'
import Newsletter from './Newsletter/Newsletter'
import MediaContacts from './MediaContacts/MediaContacts'
import List from './List/List'
import Awards from './Awards/Awards'

const Newsroom = () => {
  return (
    <div className="newsroom">
      <TitleScreen />
      <List/>
      <Awards/>
      <Newsletter />
      <MediaContacts />
    </div>
  )
}

export default Newsroom
