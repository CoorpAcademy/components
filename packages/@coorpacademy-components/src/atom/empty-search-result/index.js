import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const EmptySearchResult = props => {
  const {firstMessage, secondMessage, isBulk = false} = props;
  return (
    <div className={style.container}>
      <span className={isBulk ? style.firstMessageBulk : style.firstMessage}>{firstMessage}</span>
      <span className={isBulk ? style.secondMessageBulk : style.secondMessage}>
        {secondMessage}
      </span>
    </div>
  );
};

EmptySearchResult.propTypes = {
  firstMessage: PropTypes.string.isRequired,
  secondMessage: PropTypes.string.isRequired,
  isBulk: PropTypes.bool
};

export default EmptySearchResult;
