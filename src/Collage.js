import React from 'react'
import './styles/Collage.scss'

const Collage = ({images}) => {
  return (
    <div className="summary-collage">
      {
        images.map((image, i) => <img key={image} className={`collage-image-${i}`} src={image} alt={`Image ${i}`} />)
      }
    </div>
  )
}

export default Collage
