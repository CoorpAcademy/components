import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidLocksLock11 as LockIcon} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import Description from './description';
import style from './style.css';

const BrandCard = props => {
  const {
    title,
    edit,
    editHref,
    onEditClick,
    see,
    seeHref,
    image,
    description,
    maintenance = false
  } = props;
  const maintenanceView = maintenance ? (
    <div className={style.lockWrapper}>
      <LockIcon className={style.lockIcon} height={80} />
    </div>
  ) : null;
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Picture className={style.picture} src={image} />
        {maintenanceView}
        <Description description={description} className={style.descriptionWrapper} />
      </div>
      <div className={style.information} data-name={`info-${title}`}>
        <h3>{title}</h3>
        <div className={style.edit}>
          <Link href={editHref} onClick={onEditClick} data-name={`edit-${title}`}>
            {edit}
          </Link>
        </div>
        <div className={style.see} data-name={`see-${title}`}>
          <Link target="_blank" href={seeHref}>
            {see}
          </Link>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  edit: PropTypes.string.isRequired,
  editHref: PropTypes.string,
  onEditClick: PropTypes.func,
  see: PropTypes.string.isRequired,
  seeHref: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  maintenance: PropTypes.bool
};
export default BrandCard;
