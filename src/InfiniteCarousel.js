import React, { useState, useEffect, useRef } from 'react';
import './styles/InfiniteCarousel.scss';

const InfiniteCarousel = ({ images = [] }) => {
  const [offset, setOffset] = useState(0);
  const imagesRef = useRef(null);

  const widthOfOneImage = () => {
    // return imagesRef.current ? imagesRef.current.firstChild.clientWidth : 0;
  };

  useEffect(() => {
    const updateScroll = () => {
      setOffset(prevOffset => (prevOffset + 1) % (images.length * widthOfOneImage()));
    };

    const interval = setInterval(updateScroll, 30); // This determines the speed of the scroll.

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="infinite-carousel">
      <div className="carousel-container" ref={imagesRef}>
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
