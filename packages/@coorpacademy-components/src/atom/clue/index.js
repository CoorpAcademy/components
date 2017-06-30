import React from 'react';
import isNil from 'lodash/fp/isNil';
import PropTypes from 'prop-types';
import Loader from '../loader';
import style from './style.css';

const Clue = props => {
  const {text} = props;

  const isLoading = isNil(text);

  return (
    <div className={style.wrapperClue}>
      <div className={isLoading ? style.loadingClue : style.clue}>
        {isLoading ? <Loader /> : <div className={style.clueText}>{text}</div>}
      </div>
    </div>
  );
};

Clue.propTypes = {
  text: PropTypes.string
};

export default Clue;
