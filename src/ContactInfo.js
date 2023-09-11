import React from 'react';
import './styles/ContactInfo.scss'

function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="map-container hide-on-mobile">
        <iframe width="520" height="400" frameBorder="0" scrolling="no"
                title="map"
                marginHeight="0" marginWidth="0"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1251%20Route%20du%20Pr%C3%A9sident-Kennedy%20%20Saint-C%C3%B4me-Lini%C3%A8re+(Boulangerie%20D'ici)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
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
