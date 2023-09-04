import './styles/Product.scss'
import React from 'react';
import ProductSlider from './ProductHeader';
import Menu from './Menu';
import { findBy } from './helpers';
import products from './data/products.json';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import InfiniteCarousel from './InfiniteCarousel';

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

        <p>
          <strong>Information additionnelle</strong><br/>
          <ul>
            {product.additionnalInfo?.map(info => (
              <li>{info}</li>
            ))}
          </ul>
        </p>

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
