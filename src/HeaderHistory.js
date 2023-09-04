import React, { useEffect, useState, useRef } from "react";

import './styles/HeaderHistory.scss'
import Menu from './Menu';

function HeaderHistory() {
  const backgroundRef = useRef(null);
  const backgroundMaskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        if (backgroundRef.current) {
          backgroundRef.current.style.top = value * 0.5 + 'px';
        }
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className="HeaderHistory">
      <Menu activeTab="notre-histoire" height={0} />

      <section>
        <img src="./images/history-background.png" className="background" ref={backgroundRef}/>
        <div className="text-container">
          <h1>Notre Histoire</h1>
        </div>
      </section>
    </div>
  )
}

export default HeaderHistory
