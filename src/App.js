import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="john Doe" email="jdoe@gmail.com" phone="555-6668-999" />
        <Contact />
      </div>
    );
  }
}

export default App;
