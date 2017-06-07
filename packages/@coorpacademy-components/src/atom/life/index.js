import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Life = props => {
  const {count = 3, fail = false} = props;

  return (
    <div className={style.default}>
      <div className={style.livesCounter}>
        x{count}
      </div>
      <div className={style.heartBackground} />
      <div className={style.heart} />
      {fail ? <div className={style.bolt} /> : null}
    </div>
  );
};

Life.propTypes = {
  count: PropTypes.number,
  fail: PropTypes.bool
};

export default Life;
