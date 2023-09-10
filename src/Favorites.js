import React from 'react';
import { findWhere, slugify } from './helpers';
import products from './data/products.json'
import './styles/Favorites.scss'
import { Link } from 'react-router-dom';

function Favorites() {

  let favorites = findWhere(products, "favorite", true)

  return (
    <div className="Favorites">
      <h1>Favoris de la famille</h1>
      <div className="grid-container">
        {favorites.map((favorite, i) => (
          <Link key={favorite.id} to={`/nos-produits/${favorite.id}/${slugify(favorite.name)}`}>
            <div className={`grid-item ${i > 2 ? 'hide-on-mobile' : ''}`}>
              <div className="img-container">
                <img src={favorite.image} alt={favorite.name} />
                <div className="hover-icon">
                  <img src='/images/right-arrow.png' alt='' />
                </div>
              </div>
              <div className="favorites-item-text">
                {favorite.name}
              </div>
            </div>
          </Link>
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
