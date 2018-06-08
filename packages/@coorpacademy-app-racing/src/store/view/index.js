import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import isNil from 'lodash/fp/isNil';
import pipe from 'lodash/fp/pipe';
import {getCurrentProgression, showQuestion, showRace} from '../utils/state-extract';
import createPlayerStateToProps from './state-to-props/player';
import loadingStateToProps from './state-to-props/loading';
import createRaceStateToProps from './state-to-props/race';

const hasNotProgression = pipe(getCurrentProgression, isNil);

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  cond([
    [hasNotProgression, createStateToVNode(views.loading, loadingStateToProps)],
    [showQuestion, createStateToVNode(views.player, createPlayerStateToProps(options, store))],
    [showRace, createStateToVNode(views.race, createRaceStateToProps(options, store))],
    [constant(true), createStateToVNode(views.race, createRaceStateToProps(options, store))]
  ]);
