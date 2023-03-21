import React, {useCallback} from 'react';
import {noop} from 'lodash/fp';
import classnames from 'classnames';
import Link from '../link';
import {ICONS} from '../../util/button-icons';
import propTypes, {ButtonLinkProps, IconType} from './types';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const getButtonContent = (icon?: IconType, label?: string) => {
  const {type, position} = icon || {type: '', position: ''};
  const Icon = type && ICONS[type];

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

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    type,
    label,
    disabled,
    icon,
    'data-name': dataName,
    'data-testid': dataTestId = 'button-link',
    'aria-label': ariaLabel,
    link,
    onClick = noop,
    onKeyDown = noop,
    className,
    customStyle,
    useTitle = true
  } = props;
  const contentView = getButtonContent(icon, label);
  const styleButton = classnames(
    style[`${className}`],
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
        {...(useTitle && {
          title: ariaLabel || label
        })}
        style={customStyle}
        className={styleButton}
        data-name={dataName}
        data-testid={dataTestId}
        aria-label={ariaLabel || label}
      >
        {contentView}
      </Link>
    );
  }

  return (
    <button
      {...(useTitle && {
        title: ariaLabel || label
      })}
      type="button"
      aria-label={ariaLabel || label}
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

ButtonLink.propTypes = propTypes;

export default ButtonLink;
