import React from 'react';
import './styles/Favorites.scss'

function Favorites() {
  return (
    <div className="Favorites">
      <h1>Favoris de la famille</h1>
      <div className="grid-container">
        <div className="grid-item">
          <img src='./images/vignette-1.png' alt='' />
          <div className="favorites-item-text">
            7 Grans Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='./images/vignette-2.png' alt='' />
          <div className="favorites-item-text">
            Brun Traditionnel Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='./images/vignette-3.png' alt='' />
          <div className="favorites-item-text">
            Kamut Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='./images/vignette-4.png' alt='' />
          <div className="favorites-item-text">
            Matinal Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='./images/vignette-5.png' alt='' />
          <div className="favorites-item-text">
            Raisins Canneberge Tranché
          </div>
        </div>
        <div className="grid-item">
          <img src='./images/vignette-6.png' alt='' />
          <div className="favorites-item-text">
            Sarasin vert Tranché
          </div>
        </div>
      </div>

      <p className="link-block text-center">
        <a className="link" href='/nos-produits'>Visitez La Boutique{' '}
          <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
        </a>
      </p>

    </div>
  );
}

export default Favorites;
