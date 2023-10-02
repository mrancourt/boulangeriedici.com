import React from 'react';
import './styles/Footer.scss'

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="footer-section hide-on-mobile">
          <h2>Plan du Site</h2>
          <ul>
            <li>
              <a href='/'>Maison</a>
            </li>
            <li>
              <a href='/notre-histoire'>Notre Histoire</a>
            </li>
            <li>
              <a href='/nos-produits'>Boutique</a>
            </li>
            <li>
              <a href='/nos-produits'>Points de vente</a>
            </li>
            <li>
              <a href='/contactez-nous'>Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Nous Trouver</h2>
          1251 Route du Président-Kennedy <br/>
          Saint-Côme-Linière, QC G0M 1J0 <br/>
          <p>
            <a href="mailto:boulangeriedici@gmail.com">boulangeriedici@gmail.com</a> <br/>
          </p>
          <p>
            <a href="tel:1-833-685-7246">1-418-685-4650</a>
          </p>
        </div>
        <div className="footer-section">
          <h2>Heures d'ouverture</h2>
          Ouvert selon l'humeur du Boulanger
        </div>
      </div>
    </div>
  );
}

export default Footer;
