import React from 'react';

const TypesPointsDeVente = ({ types = [] }) =>
  types.map((type) => <TypePointsDeVente type={type.fields.type} locations={type.fields.locations} />);

const TypePointsDeVente = ({ type, locations = [] }) => (
  <section key={type} id={type} className="light">
    <div className="container">
      <h2 className="pos-title">{type}</h2>
      <div className="columns">
        <div className="column col-lg-12">
          <Locations locations={locations} column={1} />
        </div>
        <div className="column col-lg-12">
          <Locations locations={locations} column={2} />
        </div>
      </div>
    </div>
  </section>
);

const Locations = ({ locations, column }) =>
  locations
    .filter((location) => location.fields.column === column)
    .map((location) => <Location location={location.fields.location} clients={location.fields.clients} />);

const Location = ({ location, clients = [] }) => (
  <div key={location}>
    <p className="location">{location}</p>
    {clients.map((client) => (
      <Client client={client.fields} />
    ))}
  </div>
);

const Client = ({ client }) => (
  <div key={client.nom} className="point-of-sale">
    <p className="title">{client.nom}</p>
    <p className="address">{client.adresse}</p>
  </div>
);

export default TypesPointsDeVente;
