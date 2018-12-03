import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
