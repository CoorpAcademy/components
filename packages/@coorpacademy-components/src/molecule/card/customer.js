import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import style from './customer.css';

export const THEMES = {
  default: null,
  coorpmanager: style.coorpmanager
};

const Customer = props => {
  const {name, type, coorpOriginal, theme, disabled, 'aria-label': ariaLabel} = props;
  const className = classnames(
    THEMES[theme],
    style.customer,
    type === 'chapter' ? style.chapterCustomer : null
  );

  return (
    <div className={className} disabled={disabled} aria-label={ariaLabel}>
      <div className={style.content}>
        {coorpOriginal ? <span className={style.coorp}>Coorp </span> : null}
        {coorpOriginal ? <span className={style.original}>Original </span> : null}
        {!coorpOriginal && name}
      </div>
    </div>
  );
};

Customer.propTypes = {
  theme: PropTypes.oneOf(keys(THEMES)),
  type: PropTypes.string,
  name: PropTypes.string,
  coorpOriginal: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string
};

export default Customer;
