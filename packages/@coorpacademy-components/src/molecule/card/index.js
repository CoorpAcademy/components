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
  NovaCompositionCoorpacademyPictures as PicturesIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import ContentInfo from '../card-content';
import Customer from './customer';
import Favorite from './favorite';
import Notification from './notification';
import style from './style.css';

const createContentTypeIcon = (whiteColor, adaptiv, type) => {
  if (adaptiv) {
    return (
      <div className={style.specificIcon}>
        <AdaptivIcon color={whiteColor} height={25} />
      </div>
    );
  }
  if (type === 'chapter') {
    return (
      <div className={style.specificIcon}>
        <TimerIcon color={whiteColor} height={25} />
      </div>
    );
  }
  return null;
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
  const contentTypeIcon = createContentTypeIcon(whiteColor, adaptiv, type);
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
      className={cardStyle}
      data-name="card"
      data-lock={disabled}
      data-type={type === 'chapter' ? 'microlearning' : 'learner'}
      disabled={disabled}
      onClick={handleClick}
    >
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
      {customer && <Customer className={style.customer} {...customer} />}
      <ContentInfo
        empty={empty}
        author={author}
        title={title}
        style={style}
        certifiedAuthor={certifiedAuthor}
        renderProgressBar={() => myprogress}
        renderContentTypeIcon={() => contentTypeIcon}
        renderCheckIcon={() => <CheckIcon className={style.authorIcon} color="inherit" />}
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
