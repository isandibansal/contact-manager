import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '771-9877-2631'
      },
      {
        id: '2',
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '772-1877-1631'
      },
      {
        id: '3',
        name: 'Williams Johnsan',
        email: 'william@gmail.com',
        phone: '911-6777-2631'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
