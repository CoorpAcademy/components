import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import Life from '../../../../../atom/life';
import style from './lives.css';

const Lives = ({count}, context) => {
  if (isNil(count)) {
    return null;
  }

  return (
    <div className={style.wrapper}>
      <Life count={count} className={style.life} mode="small" />
    </div>
  );
};

Lives.propTypes = {
  count: PropTypes.number
};

export default Lives;
