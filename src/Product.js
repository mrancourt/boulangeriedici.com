import React from 'react';
import Carousel from './Carousel';
import Menu from './Menu';
import InfiniteCarousel from './InfiniteCarousel';
import { findBy } from './helpers';
import { useParams } from 'react-router-dom';
import products from './data/products.json';
import './styles/Product.scss'

const ProductNotFound = () => (
  <div>
    Produit introuvable.
  </div>
)

const Product = () => {
  let { productId } = useParams();
  let product = findBy(products, "id", parseInt(productId));

  // TODO: fix this to keep the header
  if (!product) {
    return <ProductNotFound />
  }

  return (
    <div className="Product">
      <Menu activeTab="nos-produits" height={120} />
      <InfiniteCarousel images={product.images} />

      <div className="container">
        <h1>{product.name}</h1>

        <p>
          {product.description}
        </p>

        <hr/>

        <p>
          <strong>Ingredients</strong><br/>
          {product.ingredients}
        </p>

        <div>
          <strong>Information additionnelle</strong><br/>
          <ul>
            {product.additionnalInfo?.map(info => (
              <li>{info}</li>
            ))}
          </ul>
        </div>

        <hr/>

        <a className="link" href='/nutrition-facts'>Valeurs Nutritives{' '}
          <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
        </a>

        <hr/>

        <h2 className="text-product-suggestions">Vous aimerez aussi</h2>
      </div>

      <Carousel products={products} />
    </div>
  );
}

export default Product;
