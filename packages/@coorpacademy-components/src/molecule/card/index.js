import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import AdaptivIcon from '@coorpacademy/nova-icons/composition/coorpacademy/adaptive';
import CheckIcon from '@coorpacademy/nova-icons/solid/status/check-circle-2';
import LockIcon from '@coorpacademy/nova-icons/solid/locks/lock-1';
import Provider from '../../atom/provider';
import Customer from './customer';
import style from './style.css';

const computeClassName = (backgroundLayout, customClassName, adaptive, locked) =>
  classnames(
    style.card,
    {
      cover: style.backgroundLayoutCover,
      left: style.backgroundLayoutLeft,
      top: style.backgroundLayoutTop
    }[backgroundLayout],
    adaptive && style.adaptive,
    locked && style.locked,
    !locked && style.unlocked,
    customClassName
  );

const Card = (props, context) => {
  const {
    adaptive,
    author,
    backgroundLayout,
    badge,
    certifiedAuthor,
    className: customClassName,
    customer,
    image,
    locked,
    onClick,
    progress,
    title
  } = props;
  const {skin} = context;

  const handleClick = () => !locked && onClick && onClick();
  const primaryColor = get('common.primary', skin);
  const inlineBackgroundStyle = {backgroundImage: `url(${image})`};
  const className = computeClassName(backgroundLayout, customClassName, adaptive, locked);
  const customerTextLayout = backgroundLayout === 'left' ? 'center' : 'top';
  const inlineBadgeStyle = {color: primaryColor};
  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className={style.backgroundContainer}>
        <div className={style.background} style={inlineBackgroundStyle} />
      </div>
      {customer && (
        <Customer className={style.customer} {...customer} textLayout={customerTextLayout} />
      )}
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={classnames(style.author, certifiedAuthor && style.certified)}>
          <span>{author}</span>
          <CheckIcon
            className={style.icon}
            color="inherit"
            borderColor="inherit"
            borderWidth="inherit"
          />
        </div>
        <div className={style.progress}>
          <div className={style.value} style={inlineProgressValueStyle} />
        </div>
        <AdaptivIcon
          className={style.adaptiveIcon}
          color="inherit"
          borderColor="inherit"
          borderWidth="inherit"
        />
      </div>
      {badge && (
        <div className={style.badge} style={inlineBadgeStyle}>
          {badge}
        </div>
      )}
      <div className={style.lockOverlay}>
        <LockIcon color="inherit" className={style.icon} />
      </div>
    </div>
  );
};

Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Card.propTypes = {
  adaptive: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  badge: PropTypes.string,
  certifiedAuthor: PropTypes.bool.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  backgroundLayout: PropTypes.oneOf(['cover', 'top', 'left']),
  customer: PropTypes.shape({
    name: PropTypes.string,
    coorpOriginal: PropTypes.bool.isRequired
  }),
  locked: PropTypes.bool.isRequired
};

export default Card;
