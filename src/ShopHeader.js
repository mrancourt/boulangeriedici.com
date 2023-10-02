import React, { useRef, useState } from 'react';
import './styles/ShopHeader.scss'

function ShopHeader() {
  let backgroundRef = useRef(null);
  let backgroundMaskRef = useRef(null);
  const requestRef = React.useRef(null);

  const [backgroundLoaded, setBackgroundLoaded] = useState(false)

  let xScrollPosition;
  let yScrollPosition;

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }

  const animate = time => {
    if (xScrollPosition !== window.scrollX || yScrollPosition !== window.scrollY) {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;
      if (backgroundRef.current) {
        setTranslate(0, yScrollPosition * .9, backgroundRef.current);
      }
      if (backgroundMaskRef.current) {
        setTranslate(0, yScrollPosition * .9, backgroundMaskRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="ShopHeader">
      <section>
        <div className="text">
          <h1>Boutique</h1>
        </div>
        <img className="background" src='images/shop-background.png' alt='Background' ref={backgroundRef} onLoad={() => setBackgroundLoaded(true)} />
        {backgroundLoaded && (
          <img className="background-mask" src='/images/shop-mask-transparent.png' alt='Background' ref={backgroundMaskRef} />
        )}
      </section>
    </div>
  );
}

export default ShopHeader;
