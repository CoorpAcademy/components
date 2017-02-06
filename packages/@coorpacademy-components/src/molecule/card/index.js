import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Picture from '../../atom/picture';
import style from './style.css';

const getOrBlank = getOr('');

const Card = (props, context) => {
  const {translate = identity} = context;
  const {
    image,
    time,
    adaptiv,
    certification,
    type,
    title,
    author,
    href
  } = props;

  const certif = certification ? (
    <div className={style.certification} />
  ) : null;

  return (
    <div className={style.catalogListItem}>
      <div className={style.imageWrapper}>
        {certif}
        <span className={style.timer}>{time}</span>
        <div className={style.overlay} />
        <Picture src={image} />
      </div>
      <div className={style.progress} />
      <div className={style.infoWrapper}>
        <div className={style.type}>
          {type}
        </div>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.author}>
          {author}
        </div>
      </div>
    </div>
  );
};

Card.contextTypes = {
  translate: React.PropTypes.func
};

Card.propTypes = {
  image: PropTypes.string,
  time: PropTypes.string,
  adaptiv: PropTypes.bool,
  certification: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  href: PropTypes.string
};

export default Card;
