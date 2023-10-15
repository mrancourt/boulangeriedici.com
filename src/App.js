import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home"
import Contact from "./Contact"
import Footer from './Footer';
import Copyright from './Copyright';
import Shop from './Shop';
import Product from './Product'
import History from './History';
import ContactSection from './ContactSection';
import ScrollToTop from './ScrollToTop';
import PointOfSales from './PointOfSales';

function App() {
  // This breaks the nice scroling, double check if needed for mobile
  // var scale = 'scale(1)';
  // document.body.style.webkitTransform = scale;
  // document.body.style.msTransform = scale;
  // document.body.style.transform = scale;

  return (
    <>
      <Router>
        <ScrollToTop exceptPrefixes={["nos-produits/categorie"]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/points-de-vente" element={<PointOfSales />} />
          <Route path="/nos-produits/:productId" element={<Product />} />
          <Route path="/nos-produits/:productId/:name" element={<Product />} />
          <Route path="/nos-produits" element={<Shop />}>
            <Route index element={<div />} />
            <Route path="categorie/:filter" element={<Shop />} />
          </Route>
          <Route path="/notre-histoire" element={<History />} />
          <Route path="/contactez-nous" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <ContactSection />
      </Router>
      <Footer />
      <Copyright />
    </>
  )
}

export default App
