import React, { useState } from 'react';
import './styles/Carousel.scss';
import { slugify } from './helpers';
import { Link } from 'react-router-dom';

function Carousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(products.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const offset = -(currentIndex * 40) + '%';

  // TODO: remove current product
  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(${offset})` }}>
        {products.map(product => (
          <Link key={product.id} to={`/nos-produits/${product.id}/${slugify(product.name)}`} className="carousel-item">
            <div className="carousel-img-container">
              <img src={product.image} alt={product.name} />
              <div className="hover-icon">
                {/*<img src='/images/right-arrow.png' alt='' />*/}
              </div>
            </div>
            <div className="carousel-item-text">
              {product.name}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center carousel-actions">
        <img src='/images/carousel-left-arrow.png' alt='Left arrow' onClick={handlePrev} />
        <img src='/images/carousel-right-arrow.png' alt='Right arrow' onClick={handleNext} />
      </div>

    </div>
  );
}

export default Carousel;
