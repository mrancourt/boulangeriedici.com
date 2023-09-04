import React from 'react';
import './styles/ContactForm.scss'

function ContactForm() {
  return (
    <div className="ContactForm">
      <div className="container">
      <form className="form-container">
        <div className="input-wrapper">
          <input type="text" placeholder="Nom..." />
            <input type="text" placeholder="Courriel..." />
        </div>
        <textarea rows={8} className="textarea" placeholder="Commentaire..."/>
        <p>
          <a className="link" href='/notre-histoire'>Envoyer{' '}
            <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
          </a>
        </p>
      </form>
      </div>
    </div>
  );
}

export default ContactForm;
