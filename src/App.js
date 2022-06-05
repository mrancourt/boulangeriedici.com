import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParallaxBanner
          className="principal"
          layers={[
            {
              image: './images/etienne-baguettes.jpg',
              amount: -0.15,
            },
          ]}
          style={{
            height: '100vh',
          }}
        >
          <div className="header desktop">
            <h3>
              <a className="text" href="#points_de_vente">
                Points de vente
              </a>
            </h3>
            <h3 className="logo-header">
              <a href="/">
                <img src="/images/logo.png" alt="Boulangerie d'ici" />
              </a>
            </h3>
            <h3>
              <a className="text" href="#contact">
                Contact
              </a>
            </h3>
          </div>

          <div className="header mobile">
            <div>
              <h3 className="logo-header">
                <a href="/">
                  <img src="/images/logo.png" alt="Boulangerie d'ici" />
                </a>
              </h3>
            </div>
            <div>
              <h3>
                <a className="text" href="#points_de_vente">
                  Points de vente
                </a>
              </h3>
              <h3>
                <a className="text" href="#contact">
                  Contact
                </a>
              </h3>
            </div>
          </div>

          <div className="brand animated fadeIn">
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="Boulangerie d'ici" />
            </div>
          </div>
        </ParallaxBanner>

        <section id="points_de_vente" className="light">
          <div className="container">
            <h2 className="pos-title">Points de vente</h2>

            <div className="columns">
              <div className="column col-lg-12">
                <p className="location">Saint-Côme-Linière</p>

                <div className="point-of-sale">
                  <p className="title">Les Marchés Tradition</p>
                  <p className="address">940 Rue Principale</p>
                </div>

                <p className="location">Saint-Georges</p>

                <div className="point-of-sale">
                  <p className="title">Dépanneur L'Essentiel</p>
                  <p className="address">
                    12755 36<sup>e</sup> Avenue
                  </p>
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
                  <p className="address">
                    911 150<sup>e</sup> Rue
                  </p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Le Jardin des Sages</p>
                  <p className="address">
                    10435 1<sup>e</sup> Avenue
                  </p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Le Grand Marché</p>
                  <p className="address">
                    12120, 1<sup>e</sup> Avenue
                  </p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Les Roy de la Pomme</p>
                  <p className="address">
                    1020 Av. de Saint-Jean-de-la-Lande
                  </p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Naturosanté</p>
                  <p className="address">8585 Boulevard Lacroix</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Metro Laval Veilleux</p>
                  <p className="address">17850 Boulevard Lacroix</p>
                </div>

                <p className="location">Saint-Prosper</p>

                <div className="point-of-sale">
                  <p className="title">L'Inter-Marché</p>
                  <p className="address">
                    2600-2798 25<sup>e</sup> Avenue
                  </p>
                </div>
              </div>
              <div className="column col-lg-12">
                <p className="location">Beauceville</p>

                <div className="point-of-sale">
                  <p className="title">IGA Beauceville</p>
                  <p className="address">630D Boulevard Renault D</p>
                </div>

                <p className="location">Lac-Etchemin</p>

                <div className="point-of-sale">
                  <p className="title">Metro Lac Etchemin</p>
                  <p className="address">1575 Route 277</p>
                </div>

                <p className="location">Notre-Dame-des-Pins</p>

                <div className="point-of-sale">
                  <p className="title">Marché Gourmand Un des 2</p>
                  <p className="address">111 30e Rue suite 101</p>
                </div>

                <p className="location">Saint-Benoît-Labre</p>

                <div className="point-of-sale">
                  <p className="title">Marché Saint-Benoît</p>
                  <p className="address">130 Rue Principale</p>
                </div>

                <p className="location">Saint-Joseph</p>

                <div className="point-of-sale">
                  <p className="title">IGA Marché Pierre Jobidon</p>
                  <p className="address">1021 Avenue du Palais #101</p>
                </div>

                <p className="location">Saint-Victor</p>

                <div className="point-of-sale">
                  <p className="title">Les Marchés Tradition</p>
                  <p className="address">137 Rue Commerciale</p>
                </div>

                <p className="location">Saint-Zacharie</p>

                <div className="point-of-sale">
                  <p className="title">Cado-Gaz inc.</p>
                  <p className="address">
                    713, 15<sup>e</sup> Rue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<ParallaxBanner*/}
        {/*layers={[*/}
        {/*{*/}
        {/*image: './images/pain6.jpg',*/}
        {/*amount: .5,*/}
        {/*}*/}
        {/*]}*/}
        {/*style={{*/}
        {/*height: '300px',*/}
        {/*}}*/}
        {/*/>*/}

        <section id="points_de_vente" className="light">
          <div className="container">
            <h2 className="pos-title">Restaurants</h2>

            <div className="columns">
              <div className="column col-lg-12">
                <p className="location">Saint-Georges</p>

                <div className="point-of-sale">
                  <p className="title">Restaurant 1668</p>
                  <p className="address">
                    12120 1<sup>e</sup> Avenue
                  </p>
                </div>

                <div className="point-of-sale">
                  <p className="title">VG Café</p>
                  <p className="address">
                    11780 1<sup>e</sup> Avenue
                  </p>
                </div>
              </div>

              <div className="column col-lg-12">
                <p className="location">Saint-Côme-Linière</p>

                <div className="point-of-sale">
                  <p className="title">Resto-Bar Le Brûlé</p>
                  <p className="address">1327 Rue Principale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParallaxBanner
          layers={[
            {
              image: './images/pain.jpg',
              amount: 0.5,
            },
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
                  <span className="title">Heures d'ouverture</span>
                  <table>
                    <tbody>
                      <tr>
                        <td>Ouvert selon l'humeur du boulanger</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="column col-md-12 section">
                  <span className="title">Nous Trouver</span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> 1251 Route du Président-Kennedy
                  <br />
                  Saint-Côme-Linière, QC G0M 1J0
                  <br />
                  <FontAwesomeIcon icon={faEnvelope} />{' '}
                  <a href="mailto:boulangeriedici@gmail.com">boulangeriedici@gmail.com</a>
                  <br />
                  <FontAwesomeIcon icon={faPhone} /> <a href="tel:1-833-685-7246">1-418-685-4650</a>
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
