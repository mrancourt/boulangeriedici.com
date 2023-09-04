import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home"
import Contact from "./Contact"
import Footer from './Footer';
import Copyright from './Copyright';
import Shop from './Shop';
import Product from './Product'
import History from './History';
import ContactSection from './ContactSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-produits/:productId" element={<Product />} />
          <Route path="/nos-produits/:productId/:name" element={<Product />} />
          <Route path="/nos-produits" element={<Shop />}>
            <Route index element={<div />} />
            <Route path="categorie/:filter" element={<Shop />} />
          </Route>
          <Route path="/notre-histoire" element={<History />} />
          <Route path="/contactez-nous" element={<Contact />} />
        </Routes>
      <ContactSection />
      </Router>
      <Footer />
      <Copyright />
    </>
  )
}

export default App
