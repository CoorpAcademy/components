import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const CenteredText = ({children}) =>
  <div className={style.center}>
    {children}
  </div>;

CenteredText.propTypes = {
  children: PropTypes.node
};

export default CenteredText;
