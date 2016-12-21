import React from 'react';
import {checker, createValidate} from '../../util/validation';
import Link from '../link';
import addClassName from '../../util/add-class-name';
import style from './style.css';
import {hoverFill} from './hover-fill.css';

const conditions = checker.shape({
  props: checker.shape({
    background: checker.color.optional,
    color: checker.color.optional,
    submitValue: checker.string,
    centered: checker.bool.optional,
    disabled: checker.bool.optional,
    href: checker.string.optional,
    target: checker.oneOf(['_self', '_blank', '_parent', '_top']).optional,
    onClick: checker.func.optional
  }),
  children: checker.none
});

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

Button.validate = createValidate(conditions);
export default Button;
