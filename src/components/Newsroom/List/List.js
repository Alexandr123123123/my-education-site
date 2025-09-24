import React from 'react'
import './List.css'
import ListCard from './ListCard'
import Navigation from './Navigation'

const List = () => {
  return (
    <div className="newsroom-list">
      <Navigation/>
      {/* top */}
      <div className="newsroom-list-top">
        <div className="newsroom-list-top-name">
          Laatste carrière nieuws & pers
        </div>
        <div className="newsroom-list-top-learn-more-container">
          <div className="newsroom-list-learn-more-block">
            <div className="newsroom-list-learn-more-text">
              Bekijk al het carrièrenieuws & pers
            </div>
            <div className="newsroom-list-learn-more-arrow"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <ListCard />
    </div>
  )
}

export default List
