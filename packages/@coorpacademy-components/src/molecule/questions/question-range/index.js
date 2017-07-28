import React from 'react';
import PropTypes from 'prop-types';
import RangeSlider from '../../../atom/range';
import style from './style.css';

const QuestionRange = (props, context) => {
  return (
    <div className={style.wrapper}>
      <RangeSlider {...props} />
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
