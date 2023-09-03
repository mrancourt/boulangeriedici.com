import React from 'react'

import './styles/HistoryShort.scss'
import Collage from './Collage';

function HistoryShort() {
  return (
    <div className="HistoryShort">
      <div className="summary-arrow">
        <img src='/images/down-arrow.png' alt='Down arrow' />
      </div>
      <div className="summary-section">
        <div className="side-text">
          Depuis 26 ans
        </div>

        {/*<Collage*/}
        {/*images={[*/}
        {/*  "/images/history-image1.png",*/}
        {/*  "/images/history-image2.png",*/}
        {/*  "/images/history-image3.png",*/}
        {/*]}*/}
        {/*/>*/}

        <div className="summary-collage">
          <img className="summary-image-1" src='/images/history-image1.png' alt='Image 1' />
          <img className="summary-image-2" src='/images/history-image2.png' alt='Image 2' />
          <img className="summary-image-3" src='/images/history-image3.png' alt='Image 3' />
        </div>
        <div className="summary-text">
          Géré par une famille de boulangers se concentrant
          sur une experience bio par excellence
          <br/>
          <a className="link" href='/notre-histoire'>Notre Histoire{' '}
            <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HistoryShort
