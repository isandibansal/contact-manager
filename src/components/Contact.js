import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <div className="ui fluid card">
            <div className="content">
              <div className="header"> {name} </div>
              <div className="meta">
                <span>{phone}</span>
              </div>
              <div className="description">{email}</div>
            </div>
            <div className="extra content">
              <span className="right floated">Joined in 2013</span>
              <span>
                <i className="user icon" />
                75 Friends
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  phone: '091-8289-987'
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
