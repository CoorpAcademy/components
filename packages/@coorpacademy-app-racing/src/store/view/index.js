import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import isNil from 'lodash/fp/isNil';
import pipe from 'lodash/fp/pipe';
import {getCurrentProgression, showLoading} from '../utils/state-extract';
import createGameStateToProps from './state-to-props/game';
import loadingStateToProps from './state-to-props/loading';

const hasNotProgression = pipe(getCurrentProgression, isNil);

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  cond([
    [hasNotProgression, createStateToVNode(views.loading, loadingStateToProps)],
    [showLoading, createStateToVNode(views.loading, loadingStateToProps)],
    [constant(true), createStateToVNode(views.game, createGameStateToProps(options, store))]
  ]);
