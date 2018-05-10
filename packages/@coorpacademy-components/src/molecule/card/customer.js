import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './customer.css';

const computeClassName = (customClassName, textLayout) =>
  classnames(
    style.customer,
    customClassName,
    {
      top: style.topTextLayout,
      center: style.centerTextLayout
    }[textLayout]
  );

const Customer = props => {
  const {name, className: customClassName, coorpOriginal, textLayout} = props;
  const className = computeClassName(customClassName, textLayout);

  return (
    <div className={className}>
      <div className={style.content}>
        {coorpOriginal && <span className={style.coorp}>Coorp</span>}
        {coorpOriginal && <span className={style.original}>Original</span>}
        {!coorpOriginal && name}
      </div>
    </div>
  );
};

Customer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  coorpOriginal: PropTypes.bool.isRequired,
  textLayout: PropTypes.oneOf(['top', 'center'])
};

export default Customer;
