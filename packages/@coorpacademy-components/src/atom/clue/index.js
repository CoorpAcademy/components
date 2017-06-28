import React from 'react';
import isNull from 'lodash/fp/isNull';
import PropTypes from 'prop-types';
import Loader from '../loader';
import style from './style.css';

const Clue = props => {
  const {text} = props;

  const isLoading = isNull(text);

  return (
    <div className={style.wrapperClue}>
      <div className={isLoading ? style.loadingClue : style.clue}>
        {isLoading ? <Loader /> : <div className={style.clueText}>{text}</div>}
      </div>
    </div>
  );
};

Clue.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

export default Clue;
