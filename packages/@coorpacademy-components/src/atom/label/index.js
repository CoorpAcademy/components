import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import style from './style.css';

const Label = ({children, innerHtml = false}) => {
  return (
    <span className={classnames(style.defaultStyle, innerHtml ? style.innerHTML : null)}>
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  innerHtml: PropTypes.bool
};

export default Label;
