import React, {PropTypes} from 'react';
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
