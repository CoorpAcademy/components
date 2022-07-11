import React from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';
import propTypes from './prop-types';

export const ICON_VALUES = {
  right: 'right',
  wrong: 'wrong',
  'no-answer': 'no-answer'
};

const Content = ({icon, current, value}) => {
  if (icon === ICON_VALUES['no-answer']) {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        {value}
      </span>
    );
  }

  if (icon === ICON_VALUES.right) {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        <RightIcon className={classnames(style.rightIcon, current && style.currentRightIcon)} />
      </span>
    );
  }

  if (icon === ICON_VALUES.wrong) {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        <WrongIcon className={classnames(style.wrongIcon, current && style.currentWrongIcon)} />
      </span>
    );
  }
};

const ReviewHeaderStepItem = props => {
  const {icon, current} = props;
  return (
    <div
      className={classnames(
        style.default,
        icon === ICON_VALUES.right && style.right,
        icon === ICON_VALUES.wrong && style.wrong,
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
