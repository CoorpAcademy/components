import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ReviewHeaderStepItem from '../../atom/review-header-step-item';

const ReviewHeaderStep = props => {
  const {steps} = props;

  const items = map(step => <ReviewHeaderStepItem {...step} />, steps);

  return <div>{items}</div>;
};

ReviewHeaderStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItem.props))
};

export default ReviewHeaderStep;
