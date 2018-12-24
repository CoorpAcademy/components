import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import isUndefined from 'lodash/fp/isUndefined';
import pick from 'lodash/fp/pick';
import {
  NovaSolidLocksLock11 as LockIcon,
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaCompositionCoorpacademyPictures as PicturesIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Customer from './customer';
import Favorite from './favorite';
import Notification from './notification';
import style from './style.css';

const viewStyle = {
  grid_course: classnames(style.grid, style.course),
  list_course: classnames(style.list, style.course),
  grid_chapter: classnames(style.grid, style.chapter),
  list_chapter: classnames(style.list, style.chapter)
};

const Card = (props, context) => {
  const {skin} = context;
  const {
    view = 'grid',
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

  const lazyClass = title ? style.default : style.lazy;
  const empty = isEmpty(pick(['title', 'type', 'author', 'image'], props));
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const cardStyle = viewStyle[`${view}_${type}`];
  const handleClick = e => !disabled && onClick(e);

  const emptyIcon = empty ? <PicturesIcon className={style.emptyIcon} color={whiteColor} /> : null;
  const adaptivIcon = adaptiv ? (
    <div className={style.adaptiv}>
      <AdaptivIcon color={whiteColor} height={25} />
    </div>
  ) : null;
  const lock = disabled ? (
    <LockIcon className={style.lockIcon} color={whiteColor} height={40} />
  ) : null;

  const inlineBadgeStyle = {color: primaryColor};
  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };
  const myprogress = !empty ? (
    <div className={style.progressWrapper}>
      <div data-name="progress" className={style.progress} style={inlineProgressValueStyle} />
    </div>
  ) : null;

  return (
    <div
      className={classnames(cardStyle, empty ? style.empty : null)}
      data-name="card"
      data-lock={disabled}
      data-type={type === 'chapter' ? 'microlearning' : 'learner'}
      onClick={handleClick}
    >
      <div className={lazyClass} disabled={disabled} data-type={disabled ? 'lock' : 'unlock'}>
        <div disabled={disabled}>
          <div className={style.imageWrapper}>
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
          {adaptivIcon}
          {customer && <Customer className={style.customer} {...customer} />}
          <div data-name="info" className={style.infoWrapper}>
            <div className={classnames(style.title, empty ? style.empty : null)}>
              <div data-name="title" title={title}>
                {title}
              </div>
            </div>
            <div
              data-name="author"
              title={author}
              className={classnames(
                style.author,
                certifiedAuthor && style.certified,
                empty ? style.empty : null
              )}
            >
              <span>{author}</span>
              <CheckIcon className={style.icon} color="inherit" />
            </div>
          </div>
          {myprogress}
          {badge && (
            <div className={style.badge} style={inlineBadgeStyle}>
              {badge}
            </div>
          )}
        </div>
        {disabled ? <div className={style.lockWrapper}>{lock}</div> : null}
      </div>
    </div>
  );
};

Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Card.propTypes = {
  view: PropTypes.oneOf(['list', 'grid']),
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
