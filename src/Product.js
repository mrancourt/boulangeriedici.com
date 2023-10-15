import React, { useState } from 'react';
import Menu from './Menu';
import { findBy, slugify } from './helpers';
import { Link, useParams } from 'react-router-dom';
import products from './data/products.json';
import './styles/Product.scss'
import Slideshow from './Slideshow';

const ProductNotFound = () => (

  <div className="container not-found">
    <h1>Produit introuvable</h1>
    Hmm... Il semblerait que vous cherchiez une miche particulière. Elle n'est pas ici, mais nous avons tant d'autres pains délicieux à découvrir!
  </div>
)

const ProductMain = ({product}) => {
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);

  return (
    <div className="container">
      <h1>{product.name}</h1>

      {product.subtitle && (
        <em>{product.subtitle}</em>
      )}

      <p>
        {product.description}
      </p>

      <hr/>

      <div className="product-info">
        <div className="section">
          <p>
            <strong>Ingrédients</strong>
          </p>
          <p>
            {product.ingredients}
          </p>
          <div>
            <strong>Informations additionnelles</strong><br/>
            <ul>
              {product.additionalInfo?.map((info, i) => (
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
  )
}

const Product = () => {
  const { productId } = useParams();
  const product = findBy(products, "id", parseInt(productId));
  const relatedProducts = products.filter(product => product.id !== productId);

  return (
    <div className="Product">
      <Menu activeTab="nos-produits" height={100} />

      <Slideshow id="product" autoScroll>
        {
          Array.from({ length: 10 }).flatMap((_, outerIndex) =>
            product?.images.map((image, innerIndex) =>
              <img key={`${image}-${outerIndex}-${innerIndex}`} src={image} alt={image} className="slide" />
            )
          )
        }
      </Slideshow>

      {product ? <ProductMain product={product} /> : <ProductNotFound /> }

      <div className="hide-on-mobile">
        <h2 className="text-product-suggestions">Vous aimerez aussi</h2>
        <Slideshow id="other-products" prevNextButtons>
          {relatedProducts.map(product => (
            // TODO: make link work
            <a href={`/nos-produits/${product.id}/${slugify(product.name)}`} className="carousel-item">
              <div className="carousel-img-container">
                <img src={product.images[0]} alt={product.name} />
                <img src={product.images[1]} alt={product.name} />
              </div>
              <div className="carousel-item-text">
                {product.name}
              </div>
            </a>
          ))}
        </Slideshow>
      </div>
    </div>
  );
}

export default Product;
