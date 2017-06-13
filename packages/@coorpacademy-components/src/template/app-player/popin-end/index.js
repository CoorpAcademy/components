import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../atom/link';
import style from './style.css';

const PopinEnd = props => {
  const {success, header} = props;
  const {cta} = header || {};

  const ctaElement = cta ? <Link href={cta.href}>{cta.title}</Link> : null;

  return (
    <div className={style.wrapper}>
      <p>End</p>
      <p>success: {success}</p>
      {ctaElement}
    </div>
  );
};

PopinEnd.propTypes = {
  success: PropTypes.bool
};

export default PopinEnd;
