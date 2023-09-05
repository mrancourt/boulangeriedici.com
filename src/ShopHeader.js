import React, { useRef, useEffect } from 'react';
import './styles/ShopHeader.scss'

function ShopHeader() {

  let backgroundRef = useRef(null);
  let backgroundMaskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        backgroundRef.current.style.top = value * 0.6 + 'px';
        backgroundMaskRef.current.style.top = value * 0.6 + 'px';
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  });

  return (
    <div className="ShopHeader">
      <section>
        <div className="text">
          <h1>Boutique</h1>
        </div>
        <img className="shop-background" src='images/shop-background.png' alt='Background Image' ref={backgroundRef} />
        <img className="shop-background-mask" src='/images/shop-mask-transparent.png' alt='Background Image' ref={backgroundMaskRef} />
      </section>
    </div>
  );
}

export default ShopHeader;
