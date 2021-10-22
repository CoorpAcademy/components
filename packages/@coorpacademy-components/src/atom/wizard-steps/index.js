import React from 'react';
import PropTypes from 'prop-types';

const WizardSteps = (props, context) => {
  const {steps} = props;

  const wizard = steps.map((step, index) => {
    return <div key={`step-${index}`}>{step.title}</div>;
  });

  return <div>{wizard}</div>;
};

WizardSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      done: PropTypes.bool
    })
  )
};

export default WizardSteps;
