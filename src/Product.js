import React, { useState } from 'react';
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

  const [showNutritionFacts, setShowNutritionFacts] = useState(false);


  // TODO: fix this to keep the header
  if (!product) {
    return <ProductNotFound />
  }

  return (
    <div className="Product">
      <Menu activeTab="nos-produits" height={100} />

      <div className="backdrop-container">
        <div className="backdrop">
          <InfiniteCarousel images={product.images} />
        </div>
      </div>

      <div className="container">
        <h1>{product.name}</h1>

        <p>
          {product.description}
        </p>

        <hr/>

        <div className="product-info">
          <div className="section">
            <p>
              <strong>Ingredients</strong><br/>
              {product.ingredients}
            </p>

            <div>
              <strong>Information additionnelle</strong><br/>
              <ul>
                {product.additionnalInfo?.map((info, i) => (
                  <li key={`${product.id}-${i}`}>{info}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section text-center hide-on-mobile">
            <img className="nutritions-facts" src={product.nutritionFacts} alt={`Valeurs nutritives - ${product.name}`} />
          </div>

          <hr/>

          {/* TODO: fix this whole thing, mobile vs desktop is too messy */}
          <div className="nutritions-facts-link-container hide-on-desktop">
            <a className="link nutritions-facts-link" onClick={() => setShowNutritionFacts(!showNutritionFacts)}>Valeurs Nutritives{' '}
              <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
            </a>
          </div>

          {showNutritionFacts && (
            <div className="section text-center">
              <img className="nutritions-facts" src={product.nutritionFacts} alt={`Valeurs nutritives - ${product.name}`} />
            </div>
          )}

          <hr className="hide-on-mobile"/>

        </div>
      </div>


      <div className="hide-on-mobile">
        <h2 className="text-product-suggestions">Vous aimerez aussi</h2>
        <Carousel products={products} />
      </div>
    </div>
  );
}

export default Product;
