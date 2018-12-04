import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = props => {
  const { label, name, value, placeholder, type, onChange, error } = props;

  let classes;
  if (error) {
    classes = 'is-invalid';
  }

  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control form-control-lg ${classes}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: 'text'
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextInputGroup;
