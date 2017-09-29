import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import isFunction from 'lodash/fp/isFunction';
import find from 'lodash/fp/find';
import {createHeaderCTA} from '../popin-correction';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS
} from '../../../actions/api/progressions';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../../../actions/api/rank';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/slides';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../../../actions/api/exit-nodes';
import {CHAPTER_FETCH_REQUEST, CHAPTER_FETCH_SUCCESS} from '../../../actions/api/chapters';
import {RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS} from '../../../actions/api/recommendations';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
import popinExtraLife from '../../test/fixtures/popin-correction/popin-extra-life';
import popinFailure from '../../test/fixtures/popin-correction/popin-failure';
import popinRevival from '../../test/fixtures/popin-correction/popin-revival';
import popinSuccess from '../../test/fixtures/popin-correction/popin-success';
import {getCurrentProgressionId} from '../../../utils/state-extract';

const services = {
  Progressions: {
    findById: identity,
    findBestOf: identity,
    getEngineConfig: identity,
    acceptExtraLife: identity,
    refuseExtraLife: identity
  },
  Slides: {
    findById: identity
  },
  LeaderBoard: {
    getRank: identity
  },
  Chapters: {
    findById: identity
  },
  Recommendations: {
    find: identity
  },
  ExitNodes: {
    findById: identity
  }
};

const createDispatch = state => async action => {
  const dispatched = [];
  const getState = () => state;
  const dispatch = maybeAction =>
    isFunction(maybeAction)
      ? maybeAction(dispatch, getState, {services})
      : dispatched.push(maybeAction);

  await dispatch(action);

  return dispatched;
};

const actionTypes = actions => map(({type}) => type, actions);

const metaOf = (actionType, actions) => {
  const action = find(({type}) => type === actionType, actions);

  return action && action.meta;
};

test('should create a "Next" CTA when entering a success popin', async t => {
  const state = popinSuccess;
  const translate = identity;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate}, {dispatch})(state);
  const dispatched = await cta.onClick();

  t.is(cta.title, 'Next');
  t.deepEqual(actionTypes(dispatched), [
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CHAPTER_FETCH_REQUEST,
    CHAPTER_FETCH_SUCCESS,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    SLIDE_FETCH_REQUEST,
    SLIDE_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Game over" CTA when entering a success popin', async t => {
  const state = popinFailure;
  const translate = identity;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate}, {dispatch})(state);
  const dispatched = await cta.onClick();

  t.is(cta.title, 'Game over');
  t.deepEqual(actionTypes(dispatched), [
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CHAPTER_FETCH_REQUEST,
    CHAPTER_FETCH_SUCCESS,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    RANK_FETCH_END_REQUEST,
    RANK_FETCH_END_SUCCESS,
    RECO_FETCH_REQUEST,
    RECO_FETCH_SUCCESS,
    EXIT_NODE_FETCH_REQUEST,
    EXIT_NODE_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Refuse" CTA when entering an extra-life popin', async t => {
  const state = popinExtraLife;
  const translate = identity;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate}, {dispatch})(state);
  const dispatched = await cta.onClick();

  t.is(cta.title, 'Game over');
  t.deepEqual(actionTypes(dispatched), [
    PROGRESSION_EXTRALIFEREFUSED_REQUEST,
    PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CHAPTER_FETCH_REQUEST,
    CHAPTER_FETCH_SUCCESS,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Accept" CTA when entering a revival popin', async t => {
  const state = popinRevival;
  const translate = identity;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate}, {dispatch})(state);
  const dispatched = await cta.onClick();

  t.is(cta.title, 'Next');
  t.deepEqual(actionTypes(dispatched), [
    PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
    PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CHAPTER_FETCH_REQUEST,
    CHAPTER_FETCH_SUCCESS,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});
