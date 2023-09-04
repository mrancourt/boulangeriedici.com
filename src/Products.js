import './styles/Products.scss'
import React from 'react';
import { Link } from "react-router-dom";

import { slugify } from './helpers';

function Products({products}) {
  return (
    <div className="Products">
      <div className="grid-container">
        {products.map(product => (
          <Link key={product.id} to={`/nos-produits/${product.id}/${slugify(product.name)}`} state={{ from: 'origin' }}>
            <div className="grid-item" >
              <img src={`/images/${product.image}`} alt={product.name} />
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
