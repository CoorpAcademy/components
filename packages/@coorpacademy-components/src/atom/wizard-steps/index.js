import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const WizardSteps = props => {
  const {steps} = props;

  const wizard = steps.map((step, index) => {
    return (
      <div
        className={classnames(style.step, step.done && style.done, step.current && style.current)}
        key={`step-${index}`}
        data-step={index}
      >
        <div className={style.label}>
          <div className={style.title}>{step.title}</div>
        </div>
        <div className={style.outerDot}>
          <div className={style.dot}> </div>
        </div>
      </div>
    );
  });

  return <div className={style.container}>{wizard}</div>;
};

WizardSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      done: PropTypes.bool,
      current: PropTypes.bool
    })
  )
};

export default WizardSteps;
