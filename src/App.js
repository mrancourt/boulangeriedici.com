import React, { Component } from 'react';
import './App.css';
import Menu from "./Menu";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <About/>
        <Contact/>
      </div>
    );
  }
}

export default App;
