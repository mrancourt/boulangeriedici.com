import React from 'react';
import './styles/ContactForm.scss'

// TODO: hookup with firebase mailer?
function ContactForm() {
  return (
    <div className="ContactForm">
      <div className="container">
      <form className="form-container">
        <div className="input-wrapper">
          <input type="text" placeholder="Nom..." />
            <input type="text" placeholder="Courriel..." />
        </div>
        <textarea rows={8} className="textarea" placeholder="Question ou commentaire..."/>
        <p className="form-link">
          <a className="link" href='/contactez-nous'>Envoyer{' '}
            <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
          </a>
        </p>
      </form>
      </div>
    </div>
  );
}

export default ContactForm;
