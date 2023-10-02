import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Menu from './Menu';
import './styles/Contact.scss'
import HeroHeader from './HeroHeader';

function Contact() {
  return (
    <div className="Contact">
      <Menu activeTab="contactez-nous" height={100} />
      <HeroHeader image="/images/unsplash1.jpg" heroTitle="Contactez-nous" />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
