import React, {useCallback} from 'react';
import {noop} from 'lodash/fp';
import classnames from 'classnames';
import Link from '../link';
import FaIcon from '../icon';
import {ICONS} from '../../util/button-icons';
import propTypes, {ButtonLinkProps, IconType} from './types';
import style from './style.css';

const getButtonContent = (icon?: IconType, content?: string | React.ReactNode) => {
  const {type, faIcon, position} = icon || {type: '', position: ''};
  const Icon = type && ICONS[type];

  if (!Icon && !faIcon) {
    return (
      <div className={style.buttonContent}>
        <span className={style.label}>{content}</span>
      </div>
    );
  }

  const iconComponent = faIcon ? (
    <FaIcon
      {...{
        iconName: faIcon.name,
        iconColor: faIcon.color,
        backgroundColor: faIcon.backgroundColor,
        size: {
          faSize: faIcon.size,
          wrapperSize: faIcon.size
        }
      }}
    />
  ) : (
    <Icon className={style.icon} theme="coorpmanager" />
  );

  return (
    <div className={style.buttonContent}>
      {position === 'left' ? iconComponent : null}
      {content ? <span className={style.label}>{content}</span> : null}
      {position === 'right' ? iconComponent : null}
    </div>
  );
};

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    type,
    label,
    content,
    disabled = false,
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
  const contentView = getButtonContent(icon, content ?? label);
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
      disabled={disabled}
    >
      {contentView}
    </button>
  );
};

ButtonLink.propTypes = propTypes;

export default ButtonLink;
