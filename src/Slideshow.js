import React, { useEffect } from 'react';
import './styles/Slideshow.scss';

const Slideshow = ({autoScroll, id, prevNextButtons = false, children}) => {
  useEffect(() => {
    let tickerSpeed = 0.5;

    let flickity = null;
    let isPaused = false;
    const slideshowEl = document.querySelector(`#slideshow-${id}`);

    const update = () => {
      if (isPaused) return;
      if (flickity.slides && autoScroll) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    // eslint-disable-next-line no-undef
    if (!Flickity) return;
    // eslint-disable-next-line no-undef
    flickity = new Flickity(slideshowEl, {
      imagesLoaded: true,
      contain: true,
      autoPlay: false,
      prevNextButtons: prevNextButtons,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25 });

    flickity.x = 0;

    window.dispatchEvent(new Event('resize'));
    update();

    // Cleanup
    return () => {
      flickity.destroy();
    };

  }, [])

  return (
    <div className="slideshow" id={`slideshow-${id}`}>
      {children}
    </div>
  );
}

export default Slideshow;
