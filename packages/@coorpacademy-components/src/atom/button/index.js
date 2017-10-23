import React from 'react';
import LinkedInput from 'react-linked-input';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ColorPropType} from '../../util/proptypes';
import Link from '../link';
import style from './style.css';

const ButtonContent = props => {
  const {
    color,
    submitValue = 'submit',
    disabled,
    download,
    href,
    target,
    onClick,
    className = style.button,
    children,
    type
  } = props;
  const dataName = props['data-name'];

  switch (type) {
    case 'link':
      return (
        <Link
          data-name={dataName}
          href={href}
          download={download}
          onClick={onClick}
          disabled={disabled}
          target={target}
          className={className}
          style={props.style}
        >
          {submitValue || children}
        </Link>
      );

    case 'a':
      return (
        <a
          data-name={dataName}
          href={href}
          disabled={disabled}
          target={target}
          className={className}
          onClick={onClick}
          style={props.style}
        >
          {submitValue || children}
        </a>
      );

    default:
      return (
        <LinkedInput
          data-name={dataName}
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
  const {className, type = 'submit'} = props;

  return (
    <div className={classnames([style.button, className])}>
      <ButtonContent
        {...props}
        type={type}
        className={style.buttonContent}
        style={{
          ...props.style
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
  href: PropTypes.string,
  download: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Button;
