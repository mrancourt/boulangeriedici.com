import React, { useEffect, useState } from 'react';
import './styles/Menu.scss'

const tabs = {
  "notre-histoire": "Notre Histoire",
  "nos-produits": "Boutique",
  "contactez-nous": "Contactez-nous",
}

const Menu = ({activeTab, height}) => {

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

  return (
    <div className="container">
      <div className="Menu fading-element" style={style}>
        <a href='/'>
          <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
        </a>
        <ul>
          <li className={`menu-link ${!activeTab ? 'active' : ''}`}>
            <a href='/'>Maison</a>
          </li>

          {Object.keys(tabs).map(tab => (
            <li key={tab} className={`menu-link ${activeTab === tab ? 'active' : ''}`}>
              <a href={`/${tab}`}>{tabs[tab]}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;
