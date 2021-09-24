import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    className = cssStyle.button,
    children,
    type,
    style,
    'data-name': dataName
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
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  'data-name': PropTypes.string
};

const Button = props => {
  const {className, isLinkDisabled, type = 'submit', children, style} = props;
  const cNames =
    (isLinkDisabled && classnames([cssStyle.disabledAnchor, className])) ||
    classnames([cssStyle.button, className]);
  return (
    <div className={cNames}>
      <ButtonContent
        {...props}
        type={type}
        className={cssStyle.buttonContent}
        style={{
          ...style
        }}
      >
        {children}
      </ButtonContent>
    </div>
  );
};

Button.propTypes = {
  color: ColorPropType,
  submitValue: PropTypes.string,
  disabled: PropTypes.bool,
  isLinkDisabled: PropTypes.bool,
  href: PropTypes.string,
  download: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  'data-name': PropTypes.string
};

export default Button;
