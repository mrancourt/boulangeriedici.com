import './styles/Filters.scss'
import React from 'react';

function Filters() {
  return (
    <div className="Filters">
      <a className="link dark active" href='/notre-histoire'>Tous</a>
      <a className="link dark" href='/notre-histoire'>Pains au levain</a>
      <a className="link dark" href='/notre-histoire'>Pains à la levure</a>
      <a className="link dark" href='/notre-histoire'>Baguettes</a>
      <a className="link dark" href='/notre-histoire'>Petits Pains</a>
    </div>
  );
}

export default Filters;
