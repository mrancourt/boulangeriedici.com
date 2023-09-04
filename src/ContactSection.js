import './styles/ContactSection.scss'

function Contact() {
  const path = window.location.pathname

  // TODO: make this less hacky
  if (path === '/contactez-nous') {
    return null
  }

  return (
    <a href="/contactez-nous">
      <div className="ContactSection">
        <h1>Contact</h1>
      </div>
    </a>
  );
}

export default Contact;
