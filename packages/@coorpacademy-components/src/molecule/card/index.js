import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, isUndefined, pick} from 'lodash/fp';
import {
  NovaSolidLocksLock11 as LockIcon,
  NovaCompositionCoorpacademyPictures as PicturesIcon
} from '@coorpacademy/nova-icons';
import {isExternalContent, EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import CardContentInfo, {MODES} from '../card-content';
import Customer from './customer';
import Favorite from './favorite';
import Notification from './notification';
import style from './style.css';

const CardBackground = ({type, image, empty}, {skin}) => {
  const externalContent = isExternalContent(type);
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);

  if (externalContent && EXTERNAL_CONTENT_ICONS[type]) {
    const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
    const iconColor = EXTERNAL_CONTENT_ICONS[type].color;
    const backgroundIcon = (
      <div className={style.externalIconCircleWrapper}>
        <IconType className={style.externalIcon} />
      </div>
    );

    return (
      <div className={style.imageWrapper}>
        <div
          data-name="cover"
          style={{backgroundColor: iconColor}}
          className={style.externalContentHeader}
        >
          {backgroundIcon}
        </div>
      </div>
    );
  }

  const emptyIcon = empty ? <PicturesIcon className={style.emptyIcon} color={whiteColor} /> : null;
  return (
    <div
      className={classnames(
        style.imageWrapper,
        type === 'chapter' ? style.chapterImageWrapper : null
      )}
    >
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
  );
};

CardBackground.contextTypes = {
  skin: Provider.childContextTypes.skin
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
    addFavoriteToolTip,
    removeFavoriteToolTip,
    onClick,
    onFavoriteClick,
    notification
  } = props;
  const empty = isEmpty(pick(['title', 'type', 'author', 'image'], props));
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const cardStyle = classnames(
    type === 'chapter' ? style.chapter : style.course,
    title ? null : style.lazy,
    style.grid,
    empty ? style.empty : null
  );
  const handleClick = e => !disabled && onClick(e);

  const lock = disabled ? (
    <LockIcon className={style.lockIcon} color={whiteColor} height={40} />
  ) : null;
  const inlineBadgeStyle = {color: primaryColor};
  const getType = contentType => {
    switch (contentType) {
      case 'chapter':
        return 'microlearning';
      case 'course':
        return 'learner';
      default:
        return contentType;
    }
  };
  return (
    <div
      className={cardStyle}
      data-name="card"
      data-lock={disabled}
      data-type={getType(type)}
      disabled={disabled}
      onClick={handleClick}
    >
      <CardBackground type={type} image={image} empty={empty} />
      {!isUndefined(favorite) && (
        <Favorite
          className={style.favorite}
          favorite={favorite}
          disabled={disabled}
          onFavoriteClick={onFavoriteClick}
          addFavoriteToolTip={addFavoriteToolTip}
          removeFavoriteToolTip={removeFavoriteToolTip}
        />
      )}
      {notification && <Notification {...notification} />}
      {customer && (
        <Customer
          className={classnames(style.customer, type === 'chapter' ? style.chapterCustomer : null)}
          {...customer}
        />
      )}
      <CardContentInfo
        mode={MODES.CARD}
        adaptiv={adaptiv}
        author={author}
        certifiedAuthor={certifiedAuthor}
        disabled={disabled}
        empty={empty}
        progress={progress}
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
  addFavoriteToolTip: PropTypes.string,
  removeFavoriteToolTip: PropTypes.string,
  onClick: PropTypes.func,
  onFavoriteClick: PropTypes.func,
  notification: PropTypes.shape(Notification.propTypes)
};
export default Card;
