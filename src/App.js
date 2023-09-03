import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Contact from "./Contact"
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';
import Shop from './Shop';
import History from './History';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-produits" element={<Shop />} />
          <Route path="/notre-histoire" element={<History />} />
          <Route path="/contactez-nous" element={<Contact />} />
        </Routes>
      </Router>
      {/*<Contact />*/}
      <Footer />
      <Copyright />
    </>
  )
}

export default App
