import './styles/PointOfSales.scss'
import React from 'react';
import Menu from './Menu';
import data from './data/pos.json';
import Header from './Header';

function renderSection(city, section) {
  return (
    <React.Fragment key={city}>
      <p className="location">{city}</p>
      {data[section][city].map(point => (
        <div className="point-of-sale" key={point.name}>
          <p className="title">{point.name}</p>
          <p className="address">{point.address}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

function DataDisplay({ section }) {
  const cities = Object.keys(data[section]);
  const halfLength = Math.ceil(cities.length / 2);

  return (
    <section id={section.toLowerCase().replace(/ /g, "_")} className="light">
      <div className="container">
        <h2 className="pos-title">{section}</h2>
        <div className="columns">
          <div className="column">
            {cities.slice(0, halfLength).map(city => renderSection(city, section))}
          </div>
          <div className="column">
            {cities.slice(halfLength).map(city => renderSection(city, section))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PointOfSales() {
  return (
    <div className="PointOfSales">
      <Menu height={100} />
      <Header title="Points de ventes" imagePath="/images/products/miche-blanche.jpg" />
      <DataDisplay section="Points de vente" />
      <DataDisplay section="Restaurants" />
    </div>
  );
}

export default PointOfSales;
