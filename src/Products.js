import './styles/Products.scss'
import React from 'react';

function Products() {
  return (
    <div className="Products">
      <div className="grid-container">
        <div className="grid-item">
          <img src='/images/vignette-1.png' alt='' />
          <div className="favorites-item-text">
            7 Grans Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='/images/vignette-2.png' alt='' />
          <div className="favorites-item-text">
            Brun Traditionnel Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='/images/vignette-3.png' alt='' />
          <div className="favorites-item-text">
            Kamut Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='/images/vignette-4.png' alt='' />
          <div className="favorites-item-text">
            Matinal Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='/images/vignette-5.png' alt='' />
          <div className="favorites-item-text">
            Raisins Canneberge Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='/images/vignette-6.png' alt='' />
          <div className="favorites-item-text">
            Sarasin vert Tranché
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
