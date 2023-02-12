import React from 'react';
import map from 'lodash/fp/map';
import StatusItem from '../../atom/status-item';
import style from './style.css';
import propTypes from './prop-types';

const ReviewHeaderSteps = props => {
  const {steps} = props;

  const items = map.convert({cap: false})(
    (step, index) => <StatusItem {...step} key={index} />,
    steps
  );

  return (
    <div className={style.wrapper} data-name="header-steps">
      {items}
    </div>
  );
};

ReviewHeaderSteps.propTypes = propTypes;

export default ReviewHeaderSteps;
