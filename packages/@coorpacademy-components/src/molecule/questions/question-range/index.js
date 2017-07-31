import React from 'react';
import getOr from 'lodash/fp/getOr';
import PropTypes from 'prop-types';
import Provider from '../../../atom/provider';
import RangeSlider from '../../../atom/range';
import style from './style.css';

const QuestionRange = (props, context) => {
  const {title, minLabel, maxLabel, ...rangeProps} = props;

  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  const titleStyle = {
    color: defaultColor
  };

  return (
    <div className={style.wrapper}>
      <span style={titleStyle} className={style.title}>{title}</span>
      <RangeSlider {...rangeProps} />
      <div className={style.labelWrapper}>
        <span className={style.label}>{minLabel}</span>
        <span className={style.label}>{maxLabel}</span>
      </div>
    </div>
  );
};

QuestionRange.contextTypes = {
  skin: Provider.childContextTypes.skin
};

QuestionRange.propTypes = {
  ...RangeSlider.propTypes,
  title: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string
};

export default QuestionRange;
