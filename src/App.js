import React from 'react';
import Home from "./Home";
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faBreadSlice, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParallaxBanner
          className="principal"
          layers={[
            {
              image: './images/pain9.jpg',
              amount: .2,
            }
          ]}
          style={{
            height: '100vh',
          }}
        >
          <div className="header">
            <h3>
              <a className="text" href="#points_de_vente">Points de vente</a>
            </h3>
            <h3>
              <a className="text" href="#contact">Contact</a>
            </h3>
          </div>
          <div className="brand animated fadeIn">
            <img src="/images/logo.png" alt="Boulangerie d'ici"/>
          </div>
        </ParallaxBanner>

        <section id="points_de_vente" className="light">
          <div className="container">
            <h2 className="pos-title">
              Points de vente
            </h2>

            <div className="columns">
              <div className="column col-lg-12">
                <p className="location">
                  Saint-Georges
                </p>

                <div className="point-of-sale">
                  <p className="title">Dépanneur L'Essentiel</p>
                  <p className="address">12755 36e Avenue</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">IGA extra St-Georges de Beauce</p>
                  <p className="address">8980 Boulevard Lacroix</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">IGA Rodrigue et Filles</p>
                  <p className="address">1950 Boulevard Dionne</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">IGA families Rodrigue et Groleau</p>
                  <p className="address">911 150e Rue</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Le Jardin des Sages</p>
                  <p className="address">10435 1 Avenue</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Le Grand Marché</p>
                  <p className="address">12120, 1e Avenue</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Naturosanté</p>
                  <p className="address">8585 Boulevard Lacroix</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Metro Laval Veilleux</p>
                  <p className="address">17850 Boulevard Lacroix</p>
                </div>
              </div>
              <div className="column col-lg-12">

                <p className="location">
                  Saint-Benoît-Labre
                </p>

                <div className="point-of-sale">
                  <p className="title">Marché Saint-Benoît</p>
                  <p className="address">130 Rue Principale</p>
                </div>


                <p className="location">
                  Beauceville
                </p>

                <div className="point-of-sale">
                  <p className="title">IGA Beauceville</p>
                  <p className="address">630D Boulevard Renault D</p>
                </div>

                <p className="location">
                  Lac-Etchemin
                </p>

                <div className="point-of-sale">
                  <p className="title">Metro Lac Etchemin</p>
                  <p className="address">1575 Route 277</p>
                </div>

                <p className="location">
                  Notre-Dame-des-Pins
                </p>

                <div className="point-of-sale">
                  <p className="title">Marché Gourmand Un des 2</p>
                  <p className="address">111 30e Rue suite 101</p>
                </div>

                <p className="location">
                  Saint-Joseph
                </p>

                <div className="point-of-sale">
                  <p className="title">IGA Marché Pierre Jobidon</p>
                  <p className="address">1021 Avenue du Palais #101</p>
                </div>

                <p className="location">
                  Saint-Prosper
                </p>

                <div className="point-of-sale">
                  <p className="title">Colette Fleuriste</p>
                  <p className="address">2715, 20E Avenue</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">L'Inter-Marché</p>
                  <p className="address">2600-2798 25e Avenue</p>
                </div>

                <p className="location">
                  Saint-Victor
                </p>

                <div className="point-of-sale">
                  <p className="title">Les Marchés Tradition</p>
                  <p className="address">137 Rue Commerciale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParallaxBanner
          layers={[
            {
              image: './images/pain3.jpg',
              amount: .5,
            }
          ]}
          style={{
            height: '300px',
          }}
        />

        <footer id="contact">
          <section>
            <div className="container">
              <div className="columns">
                <div className="column col-md-12">
                <span className="title">
                  Heures d'ouverture
                </span>
                  <table>
                    <tbody>
                    <tr>
                      <td>Ouvert selon l'humeur du boulanger</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="column col-md-12 section">
                  <span className="title">
                    Nous Trouver
                  </span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                  1251 Route du Président-Kennedy
                  <br/>
                  Saint-Côme-Linière, QC G0M 1J0
                  <br/>
                  <FontAwesomeIcon icon={faPhone} />{' '}
                  <a href="tel:1-833-685-7246">1-833-685-7246</a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;