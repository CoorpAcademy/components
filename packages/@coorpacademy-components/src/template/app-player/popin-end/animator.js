import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import min from 'lodash/fp/min';
import max from 'lodash/fp/max';
import identity from 'lodash/fp/identity';
import AnimationLoop, {AnimationFrameType} from '../../../atom/animation-loop';
import Summary from './summary';

export const ANIMATION_PERIOD = 50;
export const FIRST_FRAME = 10;

export const getTargetedValue = (props, path) => {
  const expression = get(path, props);
  const match = expression && expression.match(/^\+([0-9]+)$/);

  return Number(getOr('0', '1', match));
};

export const updateCounter = (target, frame) => {
  const incremented = max([0, frame.index - FIRST_FRAME]);

  return min([incremented, target]);
};

export const formatCounter = (props, path, counter) =>
  get(path, props) ? set(path, `+${Math.floor(counter)}`) : identity;

export const updateChildProps = (childProps, props) => {
  const {frame} = props;
  const targetedStars = getTargetedValue(childProps, 'summary.header.stars');
  const targetedRank = getTargetedValue(childProps, 'summary.header.rank');
  const stars = updateCounter(targetedStars, frame);
  const rank = updateCounter(targetedRank, frame);
  return pipe(
    formatCounter(childProps, 'summary.header.rank', rank),
    formatCounter(childProps, 'summary.header.stars', stars),
    set('summary.header.bumpStars', stars === targetedStars),
    set('summary.header.bumpRank', rank === targetedRank)
  )(childProps);
};

const SummaryCounterAnimation = props => {
  const child = React.Children.only(props.children);
  const childProps = updateChildProps(child.props, props);

  return React.cloneElement(child, childProps);
};

const summaryReaderType = PropTypes.shape({
  props: PropTypes.shape({
    summary: Summary.propTypes
  })
});

SummaryCounterAnimation.propTypes = {
  frame: AnimationFrameType.isRequired,
  children: summaryReaderType.isRequired
};

const Animator = props => (
  <AnimationLoop period={ANIMATION_PERIOD}>
    <SummaryCounterAnimation>{props.children}</SummaryCounterAnimation>
  </AnimationLoop>
);

Animator.propTypes = {
  children: summaryReaderType.isRequired
};

export default Animator;
