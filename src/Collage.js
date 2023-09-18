// TODO: finish responsivness

import React, { useEffect, useRef } from 'react';
import './styles/Collage.scss'

const Collage = ({images, styles}) => {

  let xScrollPosition;
  let yScrollPosition;

  const collageRef = useRef(null)
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.addEventListener('scroll', function () {
  //       if (!collageRef.current) return;
  //
  //       const scrollY = window.scrollY;
  //       const images = collageRef.current.querySelectorAll('img');
  //
  //       if (images.length > 0) {
  //         // TODO: revisit if window.screen.height bight be better.
  //         if (window.screen.width < 768) {
  //           // mobile
  //           // images[0].style.top = 250 -scrollY * .4 + 'px';
  //           // images[1].style.top = 250 -scrollY * .3 + 'px';
  //           // images[2].style.top = 300 -scrollY * .2 + 'px';
  //         } else {
  //           // desktop
  //           // images[0].style.top = 250 -scrollY * .4 + 'px';
  //           // images[1].style.top = 350 -scrollY * .3 + 'px';
  //           // images[2].style.top = 500 -scrollY * .2 + 'px';
  //         }
  //       }
  //     })
  //   }
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // });


  const requestRef = React.useRef()

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }
  
  const animate = time => {
    if (xScrollPosition !== window.scrollX || yScrollPosition !== window.scrollY) {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      const images = collageRef.current.querySelectorAll('img');

      if (images.length) {
        if (images[0]) {
          setTranslate(0, yScrollPosition * -0.6, images[0]);
        }

        if (images[1]) {
          setTranslate(0, yScrollPosition * -0.4, images[1]);
        }

        if (images[2]) {
          setTranslate(0, yScrollPosition * -0.2, images[2]);
        }
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="collage" ref={collageRef}>
      {
        images.map((image, i) => <img
          key={image}
          className={`collage-image-${i}`}
          src={image}
          alt={image}
          style={styles ? styles[i] : null}
          />
        )
      }
    </div>
  )
}

export default Collage
