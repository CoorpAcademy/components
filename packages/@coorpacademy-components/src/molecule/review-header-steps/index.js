import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ReviewHeaderStepItem from '../../atom/review-header-step-item';
import style from './style.css';

const ReviewHeaderSteps = props => {
  const {steps} = props;

  const items = map.convert({cap: false})(
    (step, index) => <ReviewHeaderStepItem {...step} key={index} />,
    steps
  );

  return (
    <div className={style.wrapper} data-name="header-steps">
      {items}
    </div>
  );
};

ReviewHeaderSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItem.props))
};

export default ReviewHeaderSteps;
