import React, { useEffect, useState, useRef } from "react";

import './styles/HeaderHome.scss'
import Menu from './Menu';

function HeaderHome() {
  const backgroundRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        if (backgroundRef) {
          backgroundRef.current.style.top = value * 0.5 + 'px';
        }
        if (marqueeRef) {
          marqueeRef.current.style.top = 0 + 'px';
        }
      })
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className="HeaderHome">
      <Menu  />
      <section>
        <img src="./images/home-background.png" className="background-home" ref={backgroundRef}/>
        <div className="marquee-container" ref={marqueeRef}>
          <span className="marquee-content">
            <h1>Boulangerie d'ici</h1>
          </span>
          <span className="marquee-content" aria-hidden="true">
            <h1>Boulangerie d'ici</h1>
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
