import React, { useEffect, useRef } from "react";
import './styles/HeaderHistory.scss'

function HeaderHistory() {
  let backgroundRef = useRef(null);
  let backgroundMaskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        if (backgroundRef.current) {
          backgroundRef.current.style.top = value * 0.8 + 'px';
        }
        if (backgroundMaskRef.current) {
          backgroundMaskRef.current.style.top = value * 0.8 + 'px';
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
      <section>
        <div className="text">
          <h1>Histoire</h1>
        </div>
        <img className="background" src='images/history-background.png' alt='Background' ref={backgroundRef} />
        <img className="background-mask" src='/images/history-mask-transparent.png' alt='Background' ref={backgroundMaskRef} />
      </section>
    </div>
  )
}

export default HeaderHistory
