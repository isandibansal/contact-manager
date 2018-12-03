import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <React.Fragment>
      <div className="ui secondary menu violet inverted">
        <a className="item" href="/">
          {branding}
        </a>
        <div className="right menu">
          <a className="ui item" href="/">
            Home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
