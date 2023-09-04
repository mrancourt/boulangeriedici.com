import React from 'react';
import { findWhere } from './helpers';
import products from './data/products.json'
import './styles/Favorites.scss'

function Favorites() {

  let favorites = findWhere(products, "favorite", true)

  return (
    <div className="Favorites">
      <h1>Favoris de la famille</h1>
      <div className="grid-container">
        {favorites.map(favorite => (
          <div key={favorite.id} className="grid-item">
            <img src={favorite.image} alt={favorite.name} />
            <div className="favorites-item-text">
              {favorite.name}
            </div>
          </div>
        ))}
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
