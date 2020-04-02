import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, isUndefined, pick} from 'lodash/fp';
import {
  NovaSolidLocksLock11 as LockIcon,
  NovaCompositionCoorpacademyPictures as PicturesIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import CardContentInfo, {MODES} from '../card-content';
import Customer from './customer';
import Favorite from './favorite';
import Notification from './notification';
import style from './style.css';

const isExternalContent = type => {
  switch (type) {
    case 'scorm':
    case 'video':
    case 'article':
      return true;
    default:
      return false;
  }
};

const Card = (props, context) => {
  const {skin} = context;
  const {
    image,
    badge,
    adaptiv,
    disabled = false,
    type = 'course',
    title,
    author,
    customer,
    certifiedAuthor,
    progress,
    favorite,
    onClick,
    onFavoriteClick,
    notification
  } = props;
  const empty = isEmpty(pick(['title', 'type', 'author', 'image'], props));
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const cardStyle = classnames(
    style.course,
    title ? null : style.lazy,
    style.grid,
    empty ? style.empty : null
  );
  const handleClick = e => !disabled && onClick(e);
  const emptyIcon = empty ? <PicturesIcon className={style.emptyIcon} color={whiteColor} /> : null;

  const lock = disabled ? (
    <LockIcon className={style.lockIcon} color={whiteColor} height={40} />
  ) : null;
  const inlineBadgeStyle = {color: primaryColor};

  const externalContent = isExternalContent(type);

  return (
    <div
      className={cardStyle}
      data-name="card"
      data-lock={disabled}
      data-type={type === 'chapter' ? 'microlearning' : 'learner'}
      disabled={disabled}
      onClick={handleClick}
    >
      {
        // fond de la carte pour
      }
      <div className={externalContent ? style.half : style.imageWrapper}>
        <div
          data-name="cover"
          className={style.image}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: image ? `url('${image}')` : 'none'
          }}
        >
          {emptyIcon}
        </div>
      </div>
      {!isUndefined(favorite) && (
        <Favorite
          className={style.favorite}
          favorite={favorite}
          disabled={disabled}
          onFavoriteClick={onFavoriteClick}
        />
      )}
      {notification && <Notification {...notification} />}
      {customer && <Customer className={style.customer} {...customer} />}
      <CardContentInfo
        mode={MODES.CARD}
        adaptiv={adaptiv}
        author={author}
        certifiedAuthor={certifiedAuthor}
        disabled={disabled}
        empty={empty}
        progress={progress}
        style={style}
        title={title}
        type={type}
      />
      {badge && (
        <div className={style.badge} style={inlineBadgeStyle}>
          {badge}
        </div>
      )}
      {disabled ? <div className={style.lockWrapper}>{lock}</div> : null}
    </div>
  );
};
Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};
Card.propTypes = {
  badge: PropTypes.string,
  image: PropTypes.string,
  disabled: PropTypes.bool,
  adaptiv: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  certifiedAuthor: PropTypes.bool,
  customer: PropTypes.shape(Customer.propTypes),
  progress: PropTypes.number,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
  onFavoriteClick: PropTypes.func,
  notification: PropTypes.shape(Notification.propTypes)
};
export default Card;
