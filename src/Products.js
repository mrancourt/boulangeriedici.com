import React from 'react';
import { Link } from "react-router-dom";
import { slugify } from './helpers';
import './styles/Products.scss'

function Products({products}) {
  return (
    <div className="Products">
      <div className="grid-container">
        {products.map(product => (
          <Link key={product.id} to={`/nos-produits/${product.id}/${slugify(product.name)}`} state={{ from: 'origin' }}>
            <div className="grid-item" >
              <div className="img-container">
                <img src={product.images[0]} alt={product.name} />
                <img src={product.images[1]} alt={product.name} />
              </div>
              <div className="favorites-item-text">
                {product.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
