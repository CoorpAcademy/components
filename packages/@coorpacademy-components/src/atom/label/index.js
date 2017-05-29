import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Label = ({children}) => {
  return (
    <span className={style.default}>
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
