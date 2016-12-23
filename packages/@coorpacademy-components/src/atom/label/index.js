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
  children: PropTypes.node
};

export default Label;
