import React, { Component } from 'react';
import './App.css';

import { Provider } from './context';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
