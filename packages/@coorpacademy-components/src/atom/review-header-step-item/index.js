import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const Content = ({icon, current, value}) => {
  if (!icon) {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        {value}
      </span>
    );
  }

  if (icon === 'right') {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        <RightIcon className={classnames(style.rightIcon, current && style.currentRightIcon)} />
      </span>
    );
  }

  if (icon === 'wrong') {
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

ReviewHeaderStepItem.propTypes = {
  icon: PropTypes.string,
  current: PropTypes.bool,
  value: PropTypes.string
};

export default ReviewHeaderStepItem;
