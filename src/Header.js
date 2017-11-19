import React, { Component } from 'react';
import jmIga from './images/jm_iga.jpg';
//import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Container">
          <img src={jmIga} alt="logo" width={960} />
        </div>
      </div>
    );
  }
}

export default Header;
