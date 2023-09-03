import './styles/ContactInfo.scss'

function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="map-container">
        <img className="map-image" src="./images/map.png"/>
      </div>
      <div>
        <div className="footer-section">
          <h4>Addresse</h4>
          1251 Route du Président-Kennedy <br/>
          Saint-Côme-Linière, QC G0M 1J0 <br/>
          <h4>Téléphone</h4>
          <p>
            1-418-685-4650
          </p>
          <h4>Courriel</h4>
          <p>
            boulangeriedici@gmail.com <br/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
