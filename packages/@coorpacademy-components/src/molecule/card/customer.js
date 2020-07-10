import React from 'react';
import PropTypes from 'prop-types';
import style from './customer.css';

const Customer = props => {
  const {name, className, coorpOriginal} = props;

  return (
    <div className={className}>
      <div className={style.content}>
        {coorpOriginal ? <span className={style.coorp}>Coorp </span> : null}
        {coorpOriginal ? <span className={style.original}>Original </span> : null}
        {!coorpOriginal && name}
      </div>
    </div>
  );
};

Customer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  coorpOriginal: PropTypes.bool.isRequired
};

export default Customer;
