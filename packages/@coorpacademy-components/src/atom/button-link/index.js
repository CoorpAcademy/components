import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {getOr, keys, noop} from 'lodash/fp';
import classnames from 'classnames';
import Link from '../link';
import {ICONS} from '../../util/button-icons';
import style from './style.css';

const getButtonContent = (icon, label) => {
  const {type, position} = icon;
  const Icon = getOr(null, type, ICONS);

  if (!Icon) {
    return (
      <div className={style.buttonContent}>
        <span className={style.label}>{label}</span>
      </div>
    );
  }

  return (
    <div className={style.buttonContent}>
      {position === 'left' ? <Icon className={style.icon} /> : null}
      <span className={style.label}>{label}</span>
      {position === 'right' ? <Icon className={style.icon} /> : null}
    </div>
  );
};

const ButtonLink = props => {
  const {
    type,
    label,
    disabled,
    icon = {},
    'data-name': dataName,
    'data-testid': dataTestId = 'button-link',
    'aria-label': ariaLabel,
    link,
    onClick = noop,
    onKeyDown = noop,
    className,
    customStyle
  } = props;
  const contentView = getButtonContent(icon, label);
  const styleButton = classnames(
    className,
    style.button,
    type === 'primary' && style.primary,
    type === 'secondary' && style.secondary,
    type === 'tertiary' && style.tertiary,
    type === 'text' && style.text,
    type === 'dangerous' && style.dangerous,
    link && style.link,
    disabled && style.disabled
  );

  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const handleOnKeyDown = useCallback(event => onKeyDown(event), [onKeyDown]);

  if (link) {
    return (
      <Link
        {...link}
        style={customStyle}
        className={styleButton}
        data-name={dataName}
        data-testid={dataTestId}
        aria-label={ariaLabel || label}
        title={ariaLabel || label}
      >
        {contentView}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel || label}
      // why ??
      // title={ariaLabel || label}
      data-name={dataName}
      data-testid={dataTestId}
      style={customStyle}
      className={styleButton}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      tabIndex={0}
    >
      {contentView}
    </button>
  );
};

ButtonLink.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  label: PropTypes.string,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  'data-testid': PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left']),
    type: PropTypes.oneOf(keys(ICONS))
  }),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  customStyle: PropTypes.shape({})
};

export default ButtonLink;
