import React, { useRef } from 'react';
import './styles/HeroHeader.scss'

function HeroHeader({image, heroTitle}) {
  let backgroundRef = useRef(null);
  let textRef = useRef(null);
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
        setTranslate(0, yScrollPosition * .8, backgroundRef.current);
      }
      if(textRef.current) {
        console.log("textref");
        setTranslate(0, yScrollPosition * .45, textRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="HeroHeader">
      <section>
        <div className="text" ref={textRef}>
          <h1>{heroTitle}</h1>
        </div>
        <img className="background" src={image} alt='Background' ref={backgroundRef} />
      </section>
    </div>
  );
}

export default HeroHeader
