import React from 'react';
import LinkedInput from 'react-linked-input';
import PropTypes from 'prop-types';
import {ColorPropType} from '../../util/proptypes';
import Link from '../link';
import style from './style.css';

const ButtonContent = props => {
  const {
    color,
    submitValue = 'submit',
    disabled,
    href,
    target,
    onClick,
    className,
    children,
    type
  } = props;

  switch (type) {
    case 'link':
      return (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          className={className}
          style={props.style}
        >
          {submitValue || children}
        </Link>
      );

    case 'a':
      return (
        <a href={href} target={target} className={className} onClick={onClick} style={props.style}>
          {submitValue || children}
        </a>
      );

    default:
      return (
        <LinkedInput
          type={type}
          value={submitValue}
          disabled={disabled}
          onClick={onClick}
          className={className}
          style={{
            color,
            ...props.style
          }}
        />
      );
  }
};

const Button = ({children, ...props}) => {
  const {className = style.button, centered, type = 'submit'} = props;

  const centeredStyle = centered
    ? {
        margin: '0 auto',
        display: 'block'
      }
    : {};

  return (
    <ButtonContent
      {...props}
      type={type}
      className={className}
      style={{
        ...props.style,
        ...centeredStyle
      }}
    >
      {children}
    </ButtonContent>
  );
};

Button.propTypes = {
  background: ColorPropType,
  color: ColorPropType,
  submitValue: PropTypes.string,
  centered: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
