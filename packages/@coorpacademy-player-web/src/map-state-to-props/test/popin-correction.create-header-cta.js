import test from 'ava';
import {map, set, find, omit, identity, cloneDeep, isFunction} from 'lodash/fp';

import {mockTranslate} from '@coorpacademy/translate';

import {
  ANSWER_FETCH_REQUEST,
  ANSWER_FETCH_SUCCESS,
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  EXIT_NODE_FETCH_REQUEST,
  EXIT_NODE_FETCH_SUCCESS,
  getCurrentProgressionId,
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RECO_FETCH_REQUEST,
  RECO_FETCH_SUCCESS,
  UI_PROGRESSION_ACTION_TYPES,
  PROGRESSION_UPDATED_ON_MOVE,
  UI_SELECT_ROUTE,
  SET_REDIRECT_URL_AFTER_END_REQUEST,
  SET_REDIRECT_URL_AFTER_END_SUCCESS
} from '@coorpacademy/player-store';
import {createHeaderCTA, openPopinAssistance} from '../popin-correction';
import popinExtraLife from './fixtures/popin-correction/popin-extra-life';
import popinFailure from './fixtures/popin-correction/popin-failure';
import popinRevival from './fixtures/popin-correction/popin-revival';
import popinSuccess from './fixtures/popin-correction/popin-success';
import popinSuccessNode from './fixtures/popin-correction/popin-success-node';
import popinNextLevel from './fixtures/popin-correction/popin-next-level';

const services = {
  Answers: {
    findById: identity
  },
  Analytics: {
    sendProgressionAnalytics: identity
  },
  Progressions: {
    findById: identity,
    findBestOf: identity,
    getEngineConfig: identity,
    acceptExtraLife: identity,
    refuseExtraLife: identity,
    openAssistance: identity
  },
  Content: {
    find: (type, ref) => {
      if (type === 'slide') {
        return Promise.resolve({chapter_id: 'chapId', _id: ref, foo: 'bar'});
      } else if (type === 'chapter') {
        return Promise.resolve({_id: ref, foo: 'baz'});
      }
    },
    getInfo: identity
  },
  Location: {
    getRedirectURLAfterEnd: () => ''
  },
  LeaderBoard: {
    getRank: identity
  },
  Recommendations: {
    find: identity,
    getNext: identity
  },
  ExitNodes: {
    findById: identity
  }
};

const createDispatch = state => {
  const getState = () => state;

  return async action => {
    const dispatched = [];
    const dispatch = maybeAction => {
      if (!isFunction(maybeAction)) {
        dispatched.push(maybeAction);
        return maybeAction;
      }
      return maybeAction(dispatch, getState, {services});
    };

    await dispatch(action);

    return dispatched;
  };
};

const actionTypes = actions => map(({type}) => type, actions);

const metaOf = (actionType, actions) => {
  const action = find(({type}) => type === actionType, actions);

  return action && action.meta;
};

test('should open Assistance', async t => {
  const state = popinSuccess;
  const dispatch = createDispatch(state);
  const linkAssistance = openPopinAssistance(dispatch, {});

  const dispatched = await linkAssistance();
  t.deepEqual(actionTypes(dispatched), [
    UI_PROGRESSION_ACTION_TYPES.OPEN_ASSISTANCE_REQUEST,
    UI_PROGRESSION_ACTION_TYPES.OPEN_ASSISTANCE_SUCCESS
  ]);
});

test('should create a "Next" CTA when entering a success popin', async t => {
  const state = popinSuccess;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next'
  });
  const dispatched = await cta.onClick();
  t.deepEqual(actionTypes(dispatched), [
    UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    SET_REDIRECT_URL_AFTER_END_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    ENGINE_CONFIG_FETCH_REQUEST,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    RANK_FETCH_START_SUCCESS,
    SET_REDIRECT_URL_AFTER_END_SUCCESS,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    CONTENT_INFO_FETCH_SUCCESS,
    CONTENT_FETCH_SUCCESS,
    UI_SELECT_ROUTE
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Next" CTA when entering a success exit popin', async t => {
  const state = popinSuccessNode;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next'
  });
  const dispatched = await cta.onClick();
  t.deepEqual(actionTypes(dispatched), [
    UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    CONTENT_FETCH_SUCCESS,
    RANK_FETCH_START_REQUEST,
    SET_REDIRECT_URL_AFTER_END_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    ENGINE_CONFIG_FETCH_REQUEST,
    CONTENT_INFO_FETCH_REQUEST,
    RECO_FETCH_REQUEST,
    RANK_FETCH_END_REQUEST,
    NEXT_CONTENT_FETCH_REQUEST,
    EXIT_NODE_FETCH_REQUEST,
    RANK_FETCH_START_SUCCESS,
    SET_REDIRECT_URL_AFTER_END_SUCCESS,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    CONTENT_INFO_FETCH_SUCCESS,
    RECO_FETCH_SUCCESS,
    RANK_FETCH_END_SUCCESS,
    NEXT_CONTENT_FETCH_SUCCESS,
    EXIT_NODE_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Game over" CTA when entering a failure exit popin', async t => {
  const state = popinFailure;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Game over',
    nextStepTitle: '__Click to continue'
  });
  const dispatched = await cta.onClick();
  t.deepEqual(actionTypes(dispatched), [
    UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    SET_REDIRECT_URL_AFTER_END_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    ENGINE_CONFIG_FETCH_REQUEST,
    CONTENT_INFO_FETCH_REQUEST,
    RECO_FETCH_REQUEST,
    RANK_FETCH_END_REQUEST,
    NEXT_CONTENT_FETCH_REQUEST,
    EXIT_NODE_FETCH_REQUEST,
    RANK_FETCH_START_SUCCESS,
    SET_REDIRECT_URL_AFTER_END_SUCCESS,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    CONTENT_INFO_FETCH_SUCCESS,
    RECO_FETCH_SUCCESS,
    RANK_FETCH_END_SUCCESS,
    NEXT_CONTENT_FETCH_SUCCESS,
    EXIT_NODE_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create a "Quit" CTA when entering an extra-life popin', async t => {
  const state = popinExtraLife;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Quit'
  });
  const dispatched = await cta.onClick();
  const actions = actionTypes(dispatched);

  t.deepEqual(actions, [
    PROGRESSION_EXTRALIFEREFUSED_REQUEST,
    PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
    PROGRESSION_UPDATED_ON_MOVE,
    UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    SET_REDIRECT_URL_AFTER_END_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    ENGINE_CONFIG_FETCH_REQUEST,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    ANSWER_FETCH_REQUEST,
    RANK_FETCH_START_SUCCESS,
    SET_REDIRECT_URL_AFTER_END_SUCCESS,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    CONTENT_INFO_FETCH_SUCCESS,
    ANSWER_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should create an "Accept" CTA when entering a revival popin', async t => {
  const state = popinRevival;
  const progressionId = getCurrentProgressionId(state);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next'
  });
  const dispatched = await cta.onClick();
  t.deepEqual(actionTypes(dispatched), [
    PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
    PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
    PROGRESSION_UPDATED_ON_MOVE,
    UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    SET_REDIRECT_URL_AFTER_END_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    ENGINE_CONFIG_FETCH_REQUEST,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    ANSWER_FETCH_REQUEST,
    RANK_FETCH_START_SUCCESS,
    SET_REDIRECT_URL_AFTER_END_SUCCESS,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    CONTENT_INFO_FETCH_SUCCESS,
    ANSWER_FETCH_SUCCESS
  ]);

  t.deepEqual(metaOf(PROGRESSION_FETCH_REQUEST, dispatched), {id: progressionId});
});

test('should return null for the next content title if the progression content is not a level', t => {
  const state = cloneDeep(popinNextLevel);
  state.data.progressions.entities[0].content.type = 'chapter';
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next'
  });
});

test('should return null for the next content title if the previous and current slide are in the same chapter', t => {
  const state = cloneDeep(popinNextLevel);
  const currentSlideRef = state.data.progressions.entities[0].state.nextContent.ref;
  const prevSlideRef = state.data.progressions.entities[0].state.content.ref;
  state.data.contents.slide.entities[currentSlideRef].chapter_id =
    state.data.contents.slide.entities[prevSlideRef].chapter_id;
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next'
  });
});

test('should not set nextStepTitle for the next content title if slide, chapter or level content are not found', t => {
  const state = cloneDeep(popinNextLevel);
  const dispatch = createDispatch(state);
  const createHeader = createHeaderCTA({translate: mockTranslate}, {dispatch});

  t.is(createHeader(set('data.contents.slide', {}, state)).nextStepTitle, undefined);
  t.is(createHeader(set('data.contents.chapter', {}, state)).nextStepTitle, undefined);
  t.is(createHeader(set('data.contents.level', {}, state)).nextStepTitle, undefined);
});

test('should return the index of the next chapter out of the total number of chapters along with its title', t => {
  const state = cloneDeep(popinNextLevel);
  const dispatch = createDispatch(state);
  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);

  t.deepEqual(omit('onClick', cta), {
    title: '__Next chapter',
    nextStepTitle: '2/4 Some chapter name'
  });
});

test('should return null for the next content title if next content is an exitnode', t => {
  const state = cloneDeep(popinNextLevel);
  const dispatch = createDispatch(state);
  state.data.progressions.entities[0].state.nextContent = {
    type: 'exitnode',
    ref: 'successExitNode'
  };

  const ctaSuccess = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);
  t.deepEqual(omit('onClick', ctaSuccess), {
    title: '__Next chapter'
  });

  state.data.progressions.entities[0].state.nextContent = {
    type: 'exitnode',
    ref: 'failureExitNode'
  };
  const ctaFailure = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);
  t.deepEqual(omit('onClick', ctaFailure), {
    title: '__Next chapter'
  });
});

test('should return null for the next content title if next content is an extralife', t => {
  const state = cloneDeep(popinNextLevel);
  const dispatch = createDispatch(state);
  state.data.progressions.entities[0].state.nextContent = {
    type: 'node',
    ref: 'extralife'
  };

  const cta = createHeaderCTA({translate: mockTranslate}, {dispatch})(state);
  t.deepEqual(omit('onClick', cta), {
    title: '__Next chapter'
  });
});
