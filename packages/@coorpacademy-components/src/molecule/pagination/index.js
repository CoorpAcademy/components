import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import style from './style.css';

const Pagination = props => {
  const {value, nextHref, previousHref} = props;

  return (
    <div className={style.wrapper}>
      <div className={style.value}>{value}</div>
      <div className={style.buttons}>
        <Link className={previousHref ? style.button : style.disabled} href={previousHref}>
          ⟨
        </Link>
        <Link className={nextHref ? style.button : style.disabled} href={nextHref}>
          ⟩
        </Link>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  value: PropTypes.string.isRequired,
  nextHref: PropTypes.string,
  previousHref: PropTypes.string
};

export default Pagination;
