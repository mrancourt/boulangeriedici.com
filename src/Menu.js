import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <header className="App-menu">
          <div className="Container">
            <h1 className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              La Boulangerie d'ici
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Menu;
