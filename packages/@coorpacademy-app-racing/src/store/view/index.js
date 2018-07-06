import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import isNil from 'lodash/fp/isNil';
import pipe from 'lodash/fp/pipe';
import {
  getCurrentProgression,
  isSpectator,
  showGameOver,
  showLoading,
  showQuestion,
  showRace
} from '../utils/state-extract';
import createQuestionStateToProps from './state-to-props/question';
import loadingStateToProps from './state-to-props/loading';
import createRaceStateToProps from './state-to-props/race';

const hasNotProgression = pipe(
  getCurrentProgression,
  isNil
);

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  cond([
    [hasNotProgression, createStateToVNode(views.loading, loadingStateToProps)],
    [showGameOver, createStateToVNode(views.race, createRaceStateToProps(options, store))],
    [isSpectator, createStateToVNode(views.race, createRaceStateToProps(options, store))],
    [showLoading, createStateToVNode(views.question, loadingStateToProps)],
    [showQuestion, createStateToVNode(views.question, createQuestionStateToProps(options, store))],
    [showRace, createStateToVNode(views.race, createRaceStateToProps(options, store))],
    [constant(true), createStateToVNode(views.race, createRaceStateToProps(options, store))]
  ]);
