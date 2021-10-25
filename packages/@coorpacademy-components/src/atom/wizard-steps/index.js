import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const WizardSteps = (props, context) => {
  const {steps} = props;

  const wizard = steps.map((step, index) => {
    return (
      <div className={style.step} key={`step-${index}`} data-step="{index}">
        <label className={style.label}>{step.title}</label>
        <div className={style.dot}></div>
    </div>
    );
  });

  return <div className={style.container}>{wizard}</div>;
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
