import React, { useEffect, useRef } from "react";
import Menu from './Menu';
import './styles/HeaderHome.scss'

function HeaderHome() {
  const backgroundRef = useRef(null);
  const marqueeRef = useRef(null);
  const requestRef = React.useRef(null);

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
        setTranslate(0, yScrollPosition * 0.5, backgroundRef.current);
      }
      if (marqueeRef.current) {
        setTranslate(0, 0, marqueeRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);


  return (
    <div className="HeaderHome">
      <Menu  />
      <section>
        <img src="./images/home-background.png" className="background-home" alt="Background" ref={backgroundRef}/>
        <div className="marquee-container" ref={marqueeRef}>
          <span className="marquee-content">
            <h1>Boulangerie d'ici · Boulangerie d'ici · Boulangerie d'ici · Boulangerie d'ici</h1>
          </span>
          <span className="marquee-content" aria-hidden="true">
            <h1>Boulangerie d'ici · Boulangerie d'ici · Boulangerie d'ici · Boulangerie d'ici</h1>
          </span>
        </div>
        <div className="text-container">
          Pain artisanal <br/>
          Fait avec amour
        </div>
      </section>
    </div>
  )
}

export default HeaderHome
