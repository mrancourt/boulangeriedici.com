import React from 'react'
import Collage from './Collage';
import './styles/HistoryShort.scss'

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

        <Collage
        images={[
          "/images/history-image1.png",
          "/images/history-image2.png",
          "/images/history-image3.png",
        ]}
        />

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
