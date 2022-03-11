import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ReviewHeaderStepItem from '../../atom/review-header-step-item';
import style from './style.css';

const ReviewHeaderStep = props => {
  const {steps} = props;

  const items = map(step => <ReviewHeaderStepItem {...step} key={step.value} />, steps);

  return (
    <div className={style.wrapper} data-name="header-steps">
      {items}
    </div>
  );
};

ReviewHeaderStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItem.props))
};

export default ReviewHeaderStep;
