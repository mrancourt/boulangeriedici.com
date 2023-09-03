import React, { useEffect, useState, useRef } from "react";

import './styles/HeaderHome.scss'

function HeaderHome() {
  const backgroundRef = useRef(null);
  const marqueeRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

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

        const fadeLength = 100;
        let scrollPos = window.scrollY;
        let newOpacity = 1 - (scrollPos / fadeLength);
        if (newOpacity < 0) newOpacity = 0;
        if (newOpacity > 1) newOpacity = 1;
        setOpacity(newOpacity);
      })
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className="HeaderHome">
      <div className="container">
        <div className="menu fading-element" style={{opacity: opacity}}>
          <a href='/'>
            <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
          </a>
          <ul>
            <li className="menu-link active">
              <a href='/' className="active">Maison</a>
            </li>
            <li className="menu-link">
              <a href='/notre-histoire'>Notre Histoire</a>
            </li>
            <li className="menu-link">
              <a href='/nos-produits'>Boutique</a>
            </li>
            <li className="menu-link">
              <a href='/contactez-nous'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

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
