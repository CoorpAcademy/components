import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import min from 'lodash/fp/min';
import max from 'lodash/fp/max';
import identity from 'lodash/fp/identity';
import AnimationLoop, {AnimationPropType} from '../../../atom/animation-loop';

export const BEGIN_TIME = 500;

const computeProgressionStep = (childProps, props) => {
  const {animation} = props;

  return {
    ...childProps,
    player: {
      ...childProps.player,
      progressionStep: animation.time < BEGIN_TIME
        ? {...childProps.player.progressionStep, current: max([0, childProps.player.progressionStep.current - 1])}
        : childProps.player.progressionStep
    }
  };
};

const ProgressionStepAnimation = props => {
  const child = React.Children.only(props.children);
  const childProps = computeProgressionStep(child.props, props);

  return React.cloneElement(child, childProps);
};

const Animator = props => (
  <AnimationLoop>
    <ProgressionStepAnimation>{props.children}</ProgressionStepAnimation>
  </AnimationLoop>
);

export default Animator;
