import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const ReviewHeaderStepItem = props => {
  const {icon, current, value} = props;
  return (
    <div className={current ? style.current : style.default}>
      <span className={style.value}>{value}</span>
    </div>
  );
};

ReviewHeaderStepItem.propTypes = PropTypes.shape({
  icon: PropTypes.string,
  current: PropTypes.bool,
  value: PropTypes.string
});

export default ReviewHeaderStepItem;
