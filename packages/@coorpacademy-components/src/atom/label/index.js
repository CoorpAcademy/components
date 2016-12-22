import React, {PropTypes} from 'react';
import style from './style.css';

const Label = ({children}) => {
  return (
    <span className={style.default}>
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
      ])
    )
  ])
};

export default Label;
