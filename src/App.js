import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { initClient } from './services/contentfulClient';
import loadContent from './services/service';
import TypesPointsDeVente from './components/TypesPointsDeVente';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      typesPointsDeVente: [],
    };
  }

  componentDidMount() {
    initClient().then(() => {
      loadContent('typePointsDeVente').then((content) => {
        this.setState({ typesPointsDeVente: content });
      });
      loadContent('heuresDouverture').then((content) => {
        this.setState({ heuresDouverture: content[0] });
      });
      loadContent('contact').then((content) => {
        this.setState({ contact: content[0] });
      });
      loadContent('imagePrincipale').then((content) => {
        this.setState({ imagePrincipale: content[0] });
      });
      loadContent('imageSections').then((content) => {
        this.setState({ imageSections: content[0] });
      });
    });
  }

  render() {
    const { typesPointsDeVente, heuresDouverture, imagePrincipale, imageSections, contact } = this.state;

    return (
      <ParallaxProvider>
        <div className="App">
          {imagePrincipale && (
            <ParallaxBanner
              className="principal"
              layers={[
                {
                  image: imagePrincipale.fields.image.fields.file.url,
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
          )}

          <TypesPointsDeVente types={typesPointsDeVente} />

          {imageSections && (
            <ParallaxBanner
              layers={[
                {
                  image: imageSections.fields.image[0].fields.file.url,
                  amount: 0.2,
                },
              ]}
              style={{
                height: '300px',
              }}
            />
          )}

          <footer id="contact">
            <section>
              <div className="container">
                <div className="columns">
                  <div className="column col-md-12">
                    <span className="title">Heures d'ouverture</span>
                    <table>
                      <tbody>
                        <tr>
                          <td>{heuresDouverture && heuresDouverture.fields.heuresDouverture}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="column col-md-12 section">
                    <span className="title">Nous Trouver</span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {contact && contact.fields.adresse1}
                    <br />
                    {contact && contact.fields.adresse2}
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />{' '}
                    <a href={`mailto:${contact && contact.fields.email}`}>{contact && contact.fields.email}</a>
                    <br />
                    <FontAwesomeIcon icon={faPhone} />{' '}
                    <a href="tel:1-833-685-7246">{contact && contact.fields.telephone}</a>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
