import React, { useEffect, useState } from 'react';
import './styles/Menu.scss'

const tabs = {
  "notre-histoire": "Notre Histoire",
  "nos-produits": "Boutique",
  "contactez-nous": "Contactez-nous",
}

const Menu = ({activeTab, height}) => {

  // TODO: see if that really make sense in mobile?
  const [opacity, setOpacity] = useState(1);
  const style = {
    opacity: opacity
  }
  
  if (height !== undefined) {
    style.height = height
  }

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', function () {
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

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="Menu fading-element" style={style}>
      <nav>
        <div className="logo">
          <a href="/" className="logo">
            <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
          </a>
        </div>
        <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuActive ? 'active' : ''}`}>
          <li className={`menu-link ${!activeTab ? 'active' : ''}`}>
            <a href='/'>Maison</a>
          </li>

          {Object.keys(tabs).map(tab => (
            <li key={tab} className={`menu-link ${activeTab === tab ? 'active' : ''}`}>
              <a href={`/${tab}`}>{tabs[tab]}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu;
