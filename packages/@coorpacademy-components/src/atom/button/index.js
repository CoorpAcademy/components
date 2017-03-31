// @flow
import React, {type Children} from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../util/proptypes';
import Link from '../link';
import addClassName from '../../util/add-class-name';
import {type LinkTarget} from '../../types';
import style from './style.css';
import {hoverFill} from './hover-fill.css';

export type Props = {
  children?: Children,
  color?: string,
  submitValue?: string,
  className?: string,
  centered: boolean,
  disabled: boolean,
  href?: string,
  type?: string,
  target?: LinkTarget,
  style?: Object,
  onClick?: Function
};

const Button = (props: Props) => {
  const {
    className,
    color,
    submitValue = 'submit',
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
        <Link
          href={href}
          target={target}
        >
          {submitValue || props.children}
        </Link>
      );
      break;

    case 'a':
      buttonContent = (
        <a
          href={href}
          target={target}
        >
          {submitValue || props.children}
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
      style={{
        ...props.style,
        ...centeredStyle
      }}
      {...addClassName(`${style.button} ${hoverFill}`)({
        className
      })}
    >
      {buttonContent}
    </div>
  );
};

Button.propTypes = {
  color: CustomPropTypes.color,
  submitValue: PropTypes.string,
  centered: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Button;
