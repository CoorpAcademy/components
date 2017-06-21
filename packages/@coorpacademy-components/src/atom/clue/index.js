import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Clue = props => {
  const {text} = props;

  return (
    <div className={style.wrapperClue}>
      <div className={style.clue}>
        <div className={style.clueText}>{text}</div>
      </div>
    </div>
  );
};

Clue.propTypes = {
  text: PropTypes.string
};

export default Clue;
