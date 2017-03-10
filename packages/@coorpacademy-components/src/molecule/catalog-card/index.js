import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import StarRating from '../star-rating';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

const getOrBlank = getOr('');

const CatalogCard = (props, context) => {
  const {translate} = context;
  const learnMore = (
    <span
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: translate('Learn <span>more</span>')
      }}
    />
  );

  const {
    maxRating = 5,
    rating = 0,
    href = '',
    image,
    author,
    title = ''
  } = props;

  return (
    <li className={style.catalogListItem}>
      <div className={style.imageWrapper}>
        <Picture src={image} />
        <div className={style.overlay}>
          <Link
            className={hoverFill}
            href={href}
          >
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
        <StarRating
          rating={rating}
          total={maxRating}
        />
      </div>
    </li>
  );
};

CatalogCard.contextTypes = {
  translate: React.PropTypes.func
};

CatalogCard.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  }),
  href: PropTypes.string
};

export default CatalogCard;
