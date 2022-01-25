import React, {useMemo, memo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, isUndefined, pick, keys} from 'lodash/fp';
import {
  NovaSolidLoginLocked as LockIcon,
  NovaCompositionCoorpacademyPictures as PicturesIcon
} from '@coorpacademy/nova-icons';
import {isExternalContent, EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import CardContentInfo, {MODES} from '../card-content';
import Customer from './customer';
import Favorite from './favorite';
import Selectable from './selectable';
import Notification from './notification';
import style from './style.css';

export const THEMES = {
  default: null,
  coorpmanager: style.coorpmanager
};

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

    if (image) {
      const _backgroundIcon = (
        <div
          className={classnames(
            style.externalIconCircleWrapper,
            style.externalIconCircleWithImageWrapper
          )}
          style={{
            backgroundColor: iconColor
          }}
        >
          <IconType className={style.externalIconWithImage} />
        </div>
      );

      return (
        <div className={style.imageWrapper}>
          <div
            data-name="cover"
            style={{
              backgroundColor: iconColor,
              backgroundImage: `url('${image}')`
            }}
            className={classnames(style.externalContentHeader, style.externalBackground)}
          >
            {_backgroundIcon}
          </div>
        </div>
      );
    }
    return (
      <div className={style.imageWrapper}>
        <div
          data-name="cover"
          style={{
            backgroundColor: iconColor
          }}
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

CardBackground.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  empty: PropTypes.bool
};

const Card = memo(function Card(props, context) {
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
    isSelected,
    notification,
    badgeCategory,
    badgeLabel,
    theme = 'default'
  } = props;
  const empty = isEmpty(pick(['title', 'type', 'author', 'image'], props));
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const cardStyle = classnames(
    THEMES[theme],
    type === 'chapter' ? style.chapter : style.course,
    title ? null : style.lazy,
    style.grid,
    empty ? style.empty : null
  );
  const handleClick = useMemo(() => e => !disabled && onClick(e), [disabled, onClick]);
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
      {isUndefined(isSelected) && !isUndefined(favorite) ? (
        <Favorite
          className={style.favorite}
          favorite={favorite}
          disabled={disabled}
          onFavoriteClick={onFavoriteClick}
          addFavoriteToolTip={addFavoriteToolTip}
          removeFavoriteToolTip={removeFavoriteToolTip}
        />
      ) : null}
      <Selectable isSelected={isSelected} />
      {notification ? <Notification {...notification} /> : null}
      {customer ? <Customer {...customer} theme={theme} type={type} disabled={disabled} /> : null}
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
        badgeCategory={badgeCategory}
        badgeLabel={badgeLabel}
        theme={theme}
      />
      {badge ? (
        <div className={style.badge} style={inlineBadgeStyle}>
          {badge}
        </div>
      ) : null}
      {disabled ? <div className={style.lockWrapper}>{lock}</div> : null}
    </div>
  );
});

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
  isSelected: PropTypes.bool,
  notification: PropTypes.shape(Notification.propTypes),
  badgeCategory: CardContentInfo.propTypes.badgeCategory,
  badgeLabel: CardContentInfo.propTypes.badgeLabel,
  theme: PropTypes.oneOf(keys(THEMES))
};
export default Card;
