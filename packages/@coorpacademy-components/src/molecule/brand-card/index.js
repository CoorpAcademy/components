import React, {PropTypes} from 'react';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import style from './style.css';

const BrandCard = props => {
  const {
    title,
    edit,
    editHref,
    see,
    seeHref,
    image
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Picture className={style.picture} src={image}/>
      </div>
      <div className={style.information}>
        <h3>{title}</h3>
        <div className={style.edit}>
          <Link href={editHref}>{edit}</Link>
        </div>
        <div className={style.see}>
          <Link target='_blank' href={seeHref}>{see}</Link>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired,
  editHref: PropTypes.string.isRequired,
  see: PropTypes.string.isRequired,
  seeHref: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default BrandCard;
