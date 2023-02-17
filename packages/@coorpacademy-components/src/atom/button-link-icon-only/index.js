import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr, keys} from 'lodash/fp';
import classnames from 'classnames';
import {ICONS} from '../../util/button-icons';
import Link from '../link';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const getButtonContent = icon => {
  const Icon = getOr(null, icon, ICONS);

  if (!Icon) {
    return <div className={style.buttonContent} />;
  }

  return (
    <div className={style.buttonContent}>
      <Icon className={style.icon} />
    </div>
  );
};

const getSizeStyle = size => {
  switch (size) {
    case 'small':
      return style.small;
    case 'responsive':
      return style.responsive;
    default:
      return style.default;
  }
};

const ButtonLinkIconOnly = props => {
  const {
    size = 'default',
    disabled,
    icon,
    'data-name': dataName,
    'aria-label': ariaLabel,
    link,
    onClick,
    className
  } = props;
  const contentView = getButtonContent(icon);
  const styleButton = classnames(
    getSizeStyle(size),
    link && style.link,
    disabled && style.disabled,
    style[className]
  );

  const handleOnClick = useMemo(() => () => onClick(), [onClick]);

  if (link) {
    return (
      <Link
        {...link}
        className={styleButton}
        data-name={dataName}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {contentView}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      data-name={dataName}
      title={ariaLabel}
      className={styleButton}
      onClick={handleOnClick}
    >
      {contentView}
    </button>
  );
};

ButtonLinkIconOnly.propTypes = {
  size: PropTypes.oneOf(['default', 'small', 'responsive']),
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.oneOf(keys(ICONS)),
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default ButtonLinkIconOnly;
