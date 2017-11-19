import React, { Component } from 'react';
import map from './images/map.png';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Contact-Map-Wrapper">
          <img src={map} className="Contact-Map" alt="Où nous trouver"/>
        </div>
      </div>
    );
  }
}

export default Contact;
