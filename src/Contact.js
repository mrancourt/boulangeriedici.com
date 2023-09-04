import './styles/Contact.scss'
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Menu from './Menu';
import React from 'react';

function Contact() {
  return (
    <div className="Contact">
      <Menu activeTab="contact" height={0} />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
