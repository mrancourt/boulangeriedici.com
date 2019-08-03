import React from 'react';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="header-fill"/>
      <header className="navbar navshadow">
        <section className="navbar-section"/>
        <dic className="navbar-center">
          <h1>Boulangerie d'ici</h1>
        </dic>
        <section className="navbar-section"/>
      </header>

      <div className="content">
        <Home/>
      </div>

      <footer className="section-footer">
        <div className="docs-footer container grid-xl" id="copyright">
          <p>833 685-7246</p>
        </div>
      </footer>
    </div>
  );
}

export default App;