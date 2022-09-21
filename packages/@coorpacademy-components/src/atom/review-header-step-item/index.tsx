import React from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';
import propTypes, {Props} from './types';

const Content = ({icon, current, value}: Props) => {
  let child;

  switch (icon) {
    case 'no-answer':
      child = value;
      break;

    case 'right':
      child = (
        <RightIcon className={classnames(style.rightIcon, current && style.currentRightIcon)} />
      );
      break;

    case 'wrong':
      child = (
        <WrongIcon className={classnames(style.wrongIcon, current && style.currentWrongIcon)} />
      );
      break;

    default:
      return null;
  }

  return (
    <span className={style.value} aria-label={`step ${value}`}>
      {child}
    </span>
  );
};

const ReviewHeaderStepItem = (props: Props) => {
  const {icon, current} = props;
  return (
    <div
      className={classnames(
        style.default,
        icon === 'right' && style.right,
        icon === 'wrong' && style.wrong,
        current && style.current
      )}
      data-name="header-step-item"
    >
      <Content {...props} />
    </div>
  );
};

ReviewHeaderStepItem.propTypes = propTypes;

export default ReviewHeaderStepItem;
