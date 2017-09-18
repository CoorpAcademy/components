import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import style from './style.css';

const BrandCard = props => {
  const {title, edit, editHref, see, seeHref, image, description} = props;
  const descriptionView = description
    ? <div className={style.descriptionWrapper}>
        <div className={style.description}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
      </div>
    : null;
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Picture className={style.picture} src={image} />
        {descriptionView}
      </div>
      <div className={style.information}>
        <h3>{title}</h3>
        <div className={style.edit}>
          <Link href={editHref}>{edit}</Link>
        </div>
        <div className={style.see}>
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
  editHref: PropTypes.string.isRequired,
  see: PropTypes.string.isRequired,
  seeHref: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default BrandCard;
