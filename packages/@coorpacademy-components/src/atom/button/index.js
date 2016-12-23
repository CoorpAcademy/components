import React, {PropTypes} from 'react';
import * as CustomPropTypes from '../../util/proptypes';
import Link from '../link';
import addClassName from '../../util/add-class-name';
import style from './style.css';
import {hoverFill} from './hover-fill.css';

const Button = ({children, ...props}) => {
  const {
    className,
    color,
    submitValue,
    centered,
    disabled,
    href,
    type = 'submit',
    target = '_blank',
    onClick
  } = props;

  const centeredStyle = centered ? {
    margin: '0 auto',
    display: 'block'
  } : {};

  let buttonContent;
  switch (type) {
    case 'link':
      buttonContent = (
        <Link href={href} target={target}>
          {submitValue || children}
        </Link>
      );
      break;

    case 'a':
      buttonContent = (
        <a
          href={href}
          target={target}
        >
          {submitValue || children}
        </a>
      );
      break;

    default:
      buttonContent = (
        <input
          type={type}
          value={submitValue}
          disabled={disabled}
          onClick={onClick}
          style={{
            color
          }}
        />
      );
  }

  return (
    <div
      style={centeredStyle}
      {...addClassName(`${style.button} ${hoverFill}`)({
        className
      })}
    >
      {buttonContent}
    </div>
  );
};

Button.propTypes = {
  background: CustomPropTypes.color,
  color: CustomPropTypes.color,
  submitValue: PropTypes.string,
  centered: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
