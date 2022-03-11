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
        <RightIcon className={current ? style.currentRightIcon : style.rightIcon} />
      </span>
    );
  }

  if (icon === 'wrong') {
    return (
      <span className={style.value} aria-label={`step ${value}`}>
        <WrongIcon className={current ? style.currentWrongIcon : style.wrongIcon} />
      </span>
    );
  }
};

const ReviewHeaderStepItem = props => {
  const {icon, current} = props;
  return (
    <div
      className={classnames(
        icon === 'right' ? style.right : null,
        icon === 'wrong' ? style.wrong : null,
        current ? style.current : style.default
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
