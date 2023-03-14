import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash/fp/noop';
import {ColorPropType} from '../../util/proptypes';
import Link from '../link';
import cssStyle from './style.css';

const ButtonContent = props => {
  const {
    color,
    submitValue,
    disabled,
    download,
    href,
    target,
    onClick,
    className,
    children,
    type,
    style,
    'data-name': dataName,
    'aria-label': ariaLabel,
    'data-testid': dataTestid,
    useButtonTag,
    buttonRef,
    'data-for': dataFor,
    'data-tooltip-place': dataTooltipPlace,
    'data-tip': dataTip,
    onKeyDown = noop,
    onMouseLeave = noop,
    onMouseOver = noop
  } = props;
  const anchorClassName = (disabled && `${className} ${cssStyle.disabledAnchor}`) || className;
  const anchorOnClick = (disabled && null) || onClick;
  const anchorHref = (disabled && null) || href;
  const inputClassName = (disabled && `${className} ${cssStyle.buttonDisabled}`) || className;

  switch (type) {
    case 'link':
      return (
        <Link
          data-name={dataName}
          href={anchorHref}
          download={download}
          onClick={anchorOnClick}
          target={target}
          className={anchorClassName}
          style={style}
          aria-label={ariaLabel}
        >
          {submitValue || children || 'submit'}
        </Link>
      );

    case 'a':
      return (
        <a
          data-name={dataName}
          href={anchorHref}
          target={target}
          className={anchorClassName}
          onClick={anchorOnClick}
          style={style}
        >
          {submitValue || children}
        </a>
      );

    case 'button':
      if (useButtonTag)
        return (
          <button
            ref={buttonRef}
            type="button"
            data-for={dataFor}
            data-tooltip-place={dataTooltipPlace}
            data-tip={dataTip}
            data-name={dataName}
            data-testid={dataTestid}
            aria-label={ariaLabel.favorite}
            className={className}
            onClick={onClick}
            style={style}
            onKeyDown={onKeyDown}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            tabIndex={0}
          >
            {children}
          </button>
        );
    // falls through in case type is button BUT no button tag is needed, for retro-compatibility
    default:
      return (
        <input
          data-name={dataName}
          type={type}
          value={submitValue}
          disabled={disabled}
          onClick={onClick}
          className={inputClassName}
          style={{
            color,
            ...style
          }}
        />
      );
  }
};

ButtonContent.propTypes = {
  color: ColorPropType,
  submitValue: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  download: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string,
  'data-testid': PropTypes.string,
  useButtonTag: PropTypes.bool,
  // event handlers
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  // for ReactTooltip handling
  buttonRef: PropTypes.string,
  'data-for': PropTypes.string,
  'data-tooltip-place': PropTypes.string,
  'data-tip': PropTypes.bool
};

const Button = props => {
  const {
    className,
    buttonContentClassName,
    isLinkDisabled,
    type = 'submit',
    children,
    useWrapper = true
  } = props;
  const buttonWrapperClassNames = useMemo(
    () =>
      (isLinkDisabled && classnames([cssStyle.disabledAnchor, className])) ||
      classnames([cssStyle.button, className]),
    [className, isLinkDisabled]
  );

  const contentClassName = useMemo(
    () => (buttonContentClassName ? buttonContentClassName : cssStyle.buttonContent),
    [buttonContentClassName]
  );

  return useWrapper ? (
    <div className={buttonWrapperClassNames}>
      <ButtonContent {...props} type={type} className={contentClassName}>
        {children}
      </ButtonContent>
    </div>
  ) : (
    <ButtonContent {...props} type={type} className={contentClassName}>
      {children}
    </ButtonContent>
  );
};

Button.propTypes = {
  isLinkDisabled: PropTypes.bool,
  useWrapper: PropTypes.bool,
  buttonContentClassName: PropTypes.string,
  ...ButtonContent.propTypes
};

export default Button;
