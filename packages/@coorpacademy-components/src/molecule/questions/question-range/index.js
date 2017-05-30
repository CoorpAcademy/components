import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const QuestionRange = (props, context) => {
  return (
    <div className={style.wrapper}>
      QuestionRange
    </div>
  );
};

QuestionRange.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      onChange: PropTypes.func,
      leftLabel: PropTypes.string,
      rightLabel: PropTypes.string
    })
  )
};

export default QuestionRange;
