import React, { useEffect, useRef } from "react";
import './styles/HeaderHistory.scss'

function HeaderHistory() {
  let backgroundRef = useRef(null);
  let backgroundMaskRef = useRef(null);
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
        console.log("update background");
        setTranslate(0, yScrollPosition * 0.8, backgroundRef.current);
      }
      if (backgroundMaskRef.current) {
        console.log("update background mask");
        setTranslate(0, yScrollPosition * 0.8, backgroundMaskRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="HeaderHistory">
      <section>
        <div className="text">
          <h1>Notre Histoire</h1>
        </div>
        <img className="background" src='images/history-background.png' alt='Background' ref={backgroundRef} />
        <img className="background-mask" src='/images/history-mask-transparent.png' alt='Background' ref={backgroundMaskRef} />
      </section>
    </div>
  )
}

export default HeaderHistory
