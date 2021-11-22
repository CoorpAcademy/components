import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const EmptySearchResult = props => {
  const {firstMessage, secondMessage} = props;
  return (
    <div className={style.container}>
      <span className={style.firstMessage}>{firstMessage}</span>
      <span className={style.secondMessage}>{secondMessage}</span>
    </div>
  );
};

EmptySearchResult.propTypes = {
  firstMessage: PropTypes.string.isRequired,
  secondMessage: PropTypes.string.isRequired
};

export default EmptySearchResult;
