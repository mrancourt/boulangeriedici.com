import React, { useState } from 'react';
import './styles/Menu.scss'

const tabs = {
  "notre-histoire": "Notre Histoire",
  "nos-produits": "Boutique",
  "points-de-vente": "Points de vente",
  "contactez-nous": "Contactez-nous",
}

const Menu = ({activeTab}) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="Menu fading-element">
      <nav>
        <div className="logo">
          <a href="/" className="logo">
            <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
          </a>
        </div>
        <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"/>
          <span className="bar"/>
          <span className="bar"/>
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
