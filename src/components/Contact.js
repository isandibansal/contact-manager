import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  deleteClickHandler = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  showContactDetails = () => {
    let showContact = this.state.showContactInfo;
    this.setState({
      showContactInfo: !showContact
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    let contactsDetails;
    if (showContactInfo) {
      contactsDetails = (
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      );
    } else {
      contactsDetails = null;
    }

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.showContactDetails}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.deleteClickHandler.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ float: 'right', cursor: 'pointer', color: 'red' }}
                />
              </h4>
              {contactsDetails}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.defaultProps = {
  contact: {
    name: 'john Doe',
    email: 'johndoe@gmail.com',
    phone: '881-9871-007'
  }
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
