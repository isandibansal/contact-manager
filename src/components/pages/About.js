import React from 'react';

const About = props => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple contact Manager App version 1.0</p>
      <p>Params : {props.match.params.id}</p>
    </div>
  );
};

export default About;
