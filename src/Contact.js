import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Menu from './Menu';
import './styles/Contact.scss'

function Contact() {
  return (
    <div className="Contact">
      <Menu activeTab="contact" height={100} />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
