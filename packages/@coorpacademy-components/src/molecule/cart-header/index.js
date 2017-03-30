import React, {PropTypes} from 'react';

import style from './style.css';

const CartHeader = ({title}) => {
  return (
    <div className={style.titleContainer}>
      <div className={style.headerTitle}>{title}</div>
    </div>
  );
};

CartHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default CartHeader;
