import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Heart = props => {
  const state = props.full ? style.full : style.default;

  return <span className={state} />;
};

Heart.propTypes = {
  full: PropTypes.bool.isRequired
};

export default Heart;
