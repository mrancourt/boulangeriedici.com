import React, { useState } from 'react';
import './styles/ContactForm.scss'

function ContactForm() {
  const [requestEmail, setRequestEmail] = useState('');
  const [requestName, setRequestName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://us-central1-boulangerie-d-ici.cloudfunctions.net/sendEmail';

    setSending(true);

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ requestEmail, requestName, message })
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setError(null);
          setSending(false);
          return;
        }

        return response.text();
      })
      .then((error) => {
        if (error) {
          setError(error);
        }
        setSending(false);
      })
      .catch((error) => {
        setSending(false);
        setError("Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.");
      });
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div>
          {error && <div className="message error">{error}</div>}
        </div>
        {success ? (
          <div className="success-message text-center">
            <h3>Merci de nous avoir contactés</h3>
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
            <div className="success-icon"><img src='/images/success_icon.png' alt='success-icon' /></div>
          </div>
        ) : (
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input type="text" placeholder="Nom..." onChange={e => setRequestName(e.target.value)} />
              <input type="text" placeholder="Courriel..." onChange={e => setRequestEmail(e.target.value)} />
            </div>
            <textarea rows={8} className="textarea" placeholder="Question ou commentaire..." onChange={e => setMessage(e.target.value)}/>
            <p className="form-link">

              {sending ? (
                <div className="loading-dots">
                  <span/><span/><span/>
                </div>
              ) : (
                <button className="link" type="submit">
                  Envoyer{' '}
                  <img src='/images/right-arrow.png' height={12} alt='Right arrow' />
                </button>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
