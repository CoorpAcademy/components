import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const Life = props => {
  const {count = 3, fail = false, className} = props;

  return (
    <div className={classnames(style.default, className)}>
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
  fail: PropTypes.bool,
  className: PropTypes.string
};

export default Life;
