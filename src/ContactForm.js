import './styles/ContactForm.scss'
import React from 'react';

function ContactForm() {
  return (
    <div className="ContactForm">
      <input type='text' placeholder="Nom..." />
      <input type='text' placeholder="Courriel..." />
      <div>
        <textarea placeholder="Message..."  cols={80} rows={16} />
      </div>
      <div>
        <a className="link" href='/notre-histoire'>Envoyer{' '}
          <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
        </a>
      </div>

    </div>
  );
}

export default ContactForm;
