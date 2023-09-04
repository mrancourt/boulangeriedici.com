import React, { useState } from 'react';
import './styles/Carousel.scss';

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

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(${offset})` }}>
        {products.map(product => (
          <div className="carousel-item" key={product.id}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <div className="carousel-item-text">
              {product.name}
            </div>
          </div>
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
