import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Contact from "./Contact"
import HeaderBak from './HeaderBak';
import Footer from './Footer';
import Copyright from './Copyright';
import Shop from './Shop';
import History from './History';
import ContactSection from './ContactSection';

function App() {
  return (
    <>
      {/*<HeaderBak />*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-produits" element={<Shop />} />
          <Route path="/notre-histoire" element={<History />} />
          <Route path="/contactez-nous" element={<Contact />} />
        </Routes>
      </Router>
      <ContactSection />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
