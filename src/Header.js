import './styles/Header.scss'
import React from 'react';

// TODO: redo this
function Header({title, subTitle, imagePath}) {
  return (
    <div className="Header">
      <div className="hero">
        <img src={imagePath} alt="Hero Image" />
        <div className="hero-content">
          <div className="hero-title">{title}</div>
          <div className="hero-subtitle">{subTitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
