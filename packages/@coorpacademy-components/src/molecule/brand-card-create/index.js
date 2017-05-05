import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import style from './style.css';

const BrandCardCreate = props => {
  const {edit, editHref} = props;

  return (
    <div className={style.wrapper}>
      <div className={style.circle1} />
      <div className={style.circle2} />
      <div className={style.circle3} />
      <div className={style.edit}>
        <Link href={editHref}><span>{edit}</span></Link>
      </div>
    </div>
  );
};

BrandCardCreate.propTypes = {
  edit: PropTypes.string.isRequired,
  editHref: PropTypes.string.isRequired
};
export default BrandCardCreate;
