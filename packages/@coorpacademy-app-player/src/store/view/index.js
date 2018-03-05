import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import {
  getStepContent,
  getCurrentProgression,
  getRoute,
  isCurrentProgressionMoving
} from '../utils/state-extract';
import {popinCorrectionStateToProps} from './state-to-props/popin-correction';
import popinEndStateToProps from './state-to-props/popin-end';
import loadingStateToProps from './state-to-props/loading';
import {createSlideStateToProps} from './state-to-props/slide';

const hasNoCurrentProgression = pipe(getCurrentProgression, isNil);
const hasNoContent = pipe(getStepContent, isNil);
const matchRoute = route => pipe(getRoute, isEqual(route));
const matchContentType = contentType => pipe(getStepContent, get('type'), isEqual(contentType));
const matchContentRef = contentType => pipe(getStepContent, get('ref'), isEqual(contentType));
const _createStateToProps = (options, store) => name => state =>
  ({
    loading: loadingStateToProps,
    popinCorrection: popinCorrectionStateToProps(options, store),
    popinEnd: popinEndStateToProps(options, store),
    slide: createSlideStateToProps(options, store)
  }[name](state));

export const _selectMapStateToVNode = (
  options,
  store,
  views,
  createStateToVNode,
  createStateToProps
) => {
  const stateToProps = createStateToProps(options, store);

  return cond([
    [hasNoCurrentProgression, createStateToVNode(views.loading, stateToProps('loading'))],
    [hasNoContent, createStateToVNode(views.loading, stateToProps('loading'))],
    [isCurrentProgressionMoving, createStateToVNode(views.loading, stateToProps('loading'))],
    [
      matchRoute('correction'),
      createStateToVNode(views.popinCorrection, stateToProps('popinCorrection'))
    ],
    [
      matchContentRef('extraLife'),
      createStateToVNode(views.popinCorrection, stateToProps('popinCorrection'))
    ],
    [matchContentType('slide'), createStateToVNode(views.player, stateToProps('slide'))],
    [matchContentType('success'), createStateToVNode(views.popinEnd, stateToProps('popinEnd'))],
    [matchContentType('failure'), createStateToVNode(views.popinEnd, stateToProps('popinEnd'))],
    [constant(true), createStateToVNode(views.loading, stateToProps('loading'))]
  ]);
};

export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  _selectMapStateToVNode(options, store, views, createStateToVNode, _createStateToProps);
