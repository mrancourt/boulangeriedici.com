import React from 'react';
import './styles/HeaderBak.scss'

function HeaderBak() {
  return (
    <div className="HeaderBak">
      <a href='/'>
        <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
      </a>
      <ul className="menu">
        <li className="menu-link active">
          <a href='/' className="active">Maison</a>
        </li>
        <li className="menu-link">
          <a href='/notre-histoire'>Notre Histoire</a>
        </li>
        <li className="menu-link">
          <a href='/nos-produits'>Boutique</a>
        </li>
        <li className="menu-link">
          <a href='/contactez-nous'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderBak;
