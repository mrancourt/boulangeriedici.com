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
                <img src={product.image} alt={product.name} />
                <div className="hover-icon">
                  {/*<img src='/images/right-arrow.png' alt='' />*/}
                </div>
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
