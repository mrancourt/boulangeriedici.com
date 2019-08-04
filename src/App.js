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
              image: './images/pain4.jpg',
              amount: -.9,
            }
          ]}
          style={{
            height: '100vh',
          }}
        >
          <div className="header">
            <h2>
              <a className="text-gray text" href="#points_de_vente">Points de vente</a>
            </h2>
            <h2>
              <a className="text-gray text" href="#contact">Contact</a>
            </h2>
          </div>
          <div className="brand animated fadeIn">
            <h1>
              <span className="logo_1">
                Boulangerie
              </span>
              <span className="logo_2">
                d'ici
              </span>
            </h1>
          </div>
        </ParallaxBanner>

        <section id="histoire" className="light">
          <div className="container">
            <h2>Notre Histoire</h2>
            <div className="columns">
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-6 col-4 col-mx-auto">
                <div className="timeline">
                  <div className="timeline-item" id="timeline-example-1">
                    <div className="timeline-left">
                      <a className="timeline-icon tooltip"
                         data-tooltip="Fondation - Février 1997">
                      </a>
                    </div>
                    <div className="timeline-content">
                      <div className="tile">
                        <div className="tile-content">
                          <p className="tile-subtitle">Février 1997</p>
                          <p className="tile-title">
                            La Boulangerie d'ici, en activité depuis le 7 février
                            1997
                          </p>
                          <p className="tile-title">
                            Se spécialise dans la confection du pain au
                            levain. Caractérisé par son goût légèrement
                            acidulé, le pain au levain est plus facile à digérer
                            et se conserve plus longtemps que les pains à la
                            levure, naturellement, sans agent de
                            conservation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item" id="timeline-example-2">
                    <div className="timeline-left">
                      <a className="timeline-icon icon-lg tooltip"
                         data-tooltip="February 2017">
                      </a>
                    </div>
                    <div className="timeline-content">
                      <div className="tile">
                        <div className="tile-content">
                          <p className="tile-subtitle">Lorem ipsum</p>
                          <p className="tile-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec tempus venenatis libero eu sollicitudin.
                            Vestibulum metus ex, pretium in accumsan a, fringilla in ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item" id="timeline-example-3">
                    <div className="timeline-left">
                      <a className="timeline-icon icon-lg tooltip"
                         data-tooltip="Transfert de propriété - Juillet 2019">
                      </a>
                    </div>
                    <div className="timeline-content">
                      <div className="tile">
                        <div className="tile-content">
                          <p className="tile-subtitle">Juillet 2019</p>
                          <p className="tile-title">
                            Pellentesque faucibus turpis odio, eu malesuada eros tristique sed.
                            Curabitur tempor imperdiet elit ut condimentum.
                            Curabitur dapibus nisl at metus efficitur convallis.
                            Aenean id condimentum lorem.
                            Pellentesque ornare nunc sit amet mauris auctor sodales.
                            Nulla fermentum et elit in dignissim.
                            In sagittis lorem sed mi consequat, eget blandit risus accumsan.
                            Phasellus vestibulum ac sem eu eleifend. Integer a molestie mi, nec semper risus.
                            Aliquam fermentum luctus sem, a pharetra turpis tristique pharetra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParallaxBanner
          layers={[
            {
              image: './images/pain3.jpg',
              amount: -.9,
            }
          ]}
          style={{
            height: '300px',
          }}
        />

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
                  <p className="title">Marché St-Benoit</p>
                  <p className="address">130 Rue Principale</p>
                </div>


                <p className="location">
                  Beauceville
                </p>

                <div className="point-of-sale">
                  <p className="title">IGA Beauceville</p>
                  <p className="address">630D Boulevard Renault D</p>
                </div>

                <div className="point-of-sale">
                  <p className="title">Metro Lac Etchemin</p>
                  <p className="address">1575 QC-277, Lac-Etchemin</p>
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
                      <td width={120}>Mardi</td>
                      <td>5AM–11AM</td>
                    </tr>
                    <tr>
                      <td>Jeudi</td>
                      <td>5AM–11AM</td>
                    </tr>
                    <tr>
                      <td>Vendredi</td>
                      <td>5AM–11AM</td>
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
                  <a href="tel:833-685-7246">833-685-7246</a>
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