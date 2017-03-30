import React, {PropTypes} from 'react';

const CartHeader = ({title}) => {
  return (
    <div className="title-container">
      <div className="title">{title}</div>
    </div>
  );
};

CartHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default CartHeader;
