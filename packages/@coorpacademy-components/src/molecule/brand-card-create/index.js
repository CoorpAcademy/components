import React, {PropTypes} from 'react';
import Link from '../../atom/link';
import style from './style.css';

const BrandCardCreate = props => {
  const {
    edit,
    editHref
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.circle1}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
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
