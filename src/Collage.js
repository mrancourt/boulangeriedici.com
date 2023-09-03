import React, { useEffect, useRef } from 'react';
import './styles/Collage.scss'

const Collage = ({images}) => {

  const collageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
        if (!collageRef.current) return;

        const scrollY = window.scrollY;
        const images = collageRef.current.querySelectorAll('img');
        
        images[0].style.top = 250 -scrollY * .4 + 'px';
        images[1].style.top = 350 -scrollY * .3 + 'px';
        images[2].style.top = 500 -scrollY * .2 + 'px';
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className="collage" ref={collageRef}>
      {
        images.map((image, i) => <img
          key={image}
          className={`collage-image-${i}`}
          src={image}
          alt={`Image ${i}`} />
        )
      }
    </div>
  )
}

export default Collage
