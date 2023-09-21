import React, {useMemo, memo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, isUndefined, pick, keys} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyPadlock as LockIcon,
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

const CardBackground = ({type, image, empty, 'aria-label': ariaLabel}, {skin}) => {
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
            aria-label={ariaLabel}
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
          aria-label={ariaLabel}
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

  const emptyIcon = empty ? (
    <PicturesIcon className={style.emptyIcon} style={{color: whiteColor}} />
  ) : null;
  return (
    <div
      className={classnames(
        style.imageWrapper,
        type === 'chapter' ? style.chapterImageWrapper : null
      )}
    >
      <div
        data-name="cover"
        aria-label={ariaLabel}
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
  empty: PropTypes.bool,
  'aria-label': PropTypes.string
};

const Card = memo(function Card(props, context) {
  const {skin} = context;
  const {
    image,
    badge,
    adaptiv,
    disabled: hidden = false,
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
    theme = 'default',
    disabledContent,
    'aria-label': cardArialabel,
    'background-aria-label': backgroundAriaLabel,
    'favorite-aria-label': favoriteAriaLabel,
    'selectable-aria-label': selectableAriaLabel,
    'customer-aria-label': customerAriaLabel,
    'badge-aria-label': badgeAriaLabel,
    'disabled-aria-label': disabledArialabel,
    'card-content-aria-label': cardContentLabelAriaLabel
  } = props;
  const empty = isEmpty(pick(['title', 'type', 'author', 'image'], props));
  const primaryColor = get('common.primary', skin);
  const cardStyle = classnames(
    THEMES[theme],
    type === 'chapter' ? style.chapter : style.course,
    title ? null : style.lazy,
    style.grid,
    empty ? style.empty : null
  );
  const disabled = hidden && (!isSelected || isUndefined(isSelected));
  const handleClick = useMemo(() => e => onClick(e), [onClick]);
  const lock = disabled ? (
    <div className={style.lockContent}>
      <LockIcon className={style.lockIcon} height={48} />
      <span aria-label={disabledArialabel}>{disabledContent}</span>
    </div>
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
      aria-label={cardArialabel}
    >
      <CardBackground type={type} image={image} empty={empty} aria-label={backgroundAriaLabel} />
      {isUndefined(isSelected) && !isUndefined(favorite) ? (
        <Favorite
          className={style.favorite}
          favorite={favorite}
          disabled={disabled}
          onFavoriteClick={onFavoriteClick}
          addFavoriteToolTip={addFavoriteToolTip}
          removeFavoriteToolTip={removeFavoriteToolTip}
          aria-label={favoriteAriaLabel}
        />
      ) : null}
      <Selectable isSelected={isSelected} hidden={hidden} aria-label={selectableAriaLabel} />
      {notification ? <Notification {...notification} /> : null}
      {customer ? (
        <Customer
          {...customer}
          theme={theme}
          type={type}
          disabled={disabled}
          aria-label={customerAriaLabel}
        />
      ) : null}
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
        aria-label={cardContentLabelAriaLabel}
      />
      {badge ? (
        <div className={style.badge} style={inlineBadgeStyle} aria-label={badgeAriaLabel}>
          {badge}
        </div>
      ) : null}
      {disabled ? (
        <div className={style.lockWrapper} aria-label={disabledArialabel}>
          {lock}
        </div>
      ) : null}
    </div>
  );
});

Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export const cardPropTypes = {
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
  theme: PropTypes.oneOf(keys(THEMES)),
  disabledContent: PropTypes.string,
  'aria-label': PropTypes.string,
  'background-aria-label': PropTypes.string,
  'favorite-aria-label': Favorite.propTypes['aria-label'],
  'selectable-aria-label': Selectable.propTypes['aria-label'],
  'customer-aria-label': Customer.propTypes['aria-label'],
  'badge-aria-label': PropTypes.string,
  'disabled-aria-label': PropTypes.string,
  'card-content-aria-label': CardContentInfo.propTypes['aria-label']
};

Card.propTypes = cardPropTypes;

export default Card;
