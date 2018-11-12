import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import Life from '../../../../../atom/life';
import style from './lives.css'; // eslint-disable-line css-modules/no-unused-class

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
  count: PropTypes.number.isRequired
};

export default Lives;
