import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Menu from './Menu';
import './styles/Contact.scss'
import Header from './Header';

function Contact() {
  return (
    <div className="Contact">
      <Menu activeTab="contact" height={100} />
      <Header title="Contactez-nous" imagePath="/images/products/hamburger.jpg" />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
