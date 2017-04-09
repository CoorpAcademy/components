import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Star = props => {
  const state = props.popular ? style.popular : style.default;

  return (
    <span className={state}>★</span>
  );
};

Star.propTypes = {
  popular: PropTypes.bool.isRequired
};

export default Star;
