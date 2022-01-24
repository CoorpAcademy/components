import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './customer.css';

const Customer = props => {
  const {name, type, coorpOriginal, theme} = props;
  const className = classnames(
    theme === 'coorpmanager' ? style.coorpmanager : null,
    style.customer,
    type === 'chapter' ? style.chapterCustomer : null
  );

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
  theme: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  coorpOriginal: PropTypes.bool.isRequired
};

export default Customer;
