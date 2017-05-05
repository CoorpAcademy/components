import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../star-rating';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

const CatalogCard = (props, context) => {
  const {translate} = context;
  const learnMore = (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: translate('Learn <span>more</span>')
      }}
    />
  );

  const {maxRating = 5, rating = 0, href = '', image, author, title = ''} = props;

  return (
    <li className={style.catalogListItem}>
      <div className={style.imageWrapper}>
        <Picture src={image} />
        <div className={style.overlay}>
          <Link className={hoverFill} href={href}>
            {learnMore}
          </Link>
        </div>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.title}>
          <Link href={href}>
            {title}
          </Link>
        </div>
        <div className={style.subtitle}>
          <Link href={author.href}>
            {translate('by {{name}}', author)}
          </Link>
        </div>
        <StarRating rating={rating} total={maxRating} />
      </div>
    </li>
  );
};

CatalogCard.contextTypes = {
  translate: PropTypes.func
};

CatalogCard.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  title: PropTypes.string,
  image: Picture.propTypes.src,
  author: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  }),
  href: PropTypes.string
};

export default CatalogCard;
