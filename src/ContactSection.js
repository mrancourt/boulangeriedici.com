import React, { useRef } from 'react';
import './styles/ContactSection.scss'

// TODO: redo contact zoom effect, it's not so great
// TODO: fix mobile
function Contact() {
  const path = window.location.pathname
  const backgroundRef = useRef(null);
  const requestRef = React.useRef(null);

  let xScrollPosition;
  let yScrollPosition;
  let documentHeight;
  let windowHeight;

  const animate = time => {
    if (xScrollPosition !== window.scrollX || yScrollPosition !== window.scrollY) {
      yScrollPosition = window.scrollY;
      documentHeight = document.body.scrollHeight;
      windowHeight = window.innerHeight;

      let scrollPercent = (yScrollPosition / (documentHeight - windowHeight)) * 100;
      let variant = (20 * scrollPercent / 100);
      let bgSize = `${100 + variant}%`;
      
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundSize = bgSize
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);


  // TODO: make this less hacky
  if (path === '/contactez-nous') {
    return null
  }

  return (
    <a href="/contactez-nous">
      <div className="ContactSection" ref={backgroundRef}>
        <h1>Contact</h1>
      </div>
    </a>
  );
}

export default Contact;
