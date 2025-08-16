import React from 'react'
import './ImageButtonForGallery.css'

const ImageButtonForGallery = (props) => {
  return (
    <div className="galary-abcab">
      <div className='gallary-image-container123'>
        {props.items.map((item, index) => (
          <div className="gallery123">
            <img
              key={item.id}
              src={item.filename}
              alt="img"
              onClick={() => props.setActiveGallery(index + 1)}
            />
          </div>
        ))}
        </div>
      <div>Gallery ({props.items.length})</div>
    </div>
  )
}

export default ImageButtonForGallery
