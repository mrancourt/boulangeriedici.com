import React, { useRef, useEffect } from 'react';
import './styles/ShopHeader.scss'

// TODO: optimize performance around scroll handler

function ShopHeader() {
  let backgroundRef = useRef(null);
  let backgroundMaskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        backgroundRef.current.style.top = value * 0.8 + 'px';
        backgroundMaskRef.current.style.top = value * 0.8 + 'px';
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
        <img className="background" src='images/shop-background.png' alt='Background Image' ref={backgroundRef} />
        <img className="background-mask" src='/images/shop-mask-transparent.png' alt='Background Image' ref={backgroundMaskRef} />
      </section>
    </div>
  );
}

export default ShopHeader;
