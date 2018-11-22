import test from 'ava';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import find from 'lodash/fp/find';
import omit from 'lodash/fp/omit';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import cloneDeep from 'lodash/fp/cloneDeep';
import isFunction from 'lodash/fp/isFunction';
import {createHeaderCTA, openPopinAssistance} from '../popin-correction';
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
} from '../@coorpacademy/player-store/es/actions/api/progressions';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../@coorpacademy/player-store/es/actions/api/rank';
import {
  SEND_PROGRESSION_ANALYTICS_REQUEST,
  SEND_PROGRESSION_ANALYTICS_SUCCESS
} from '../@coorpacademy/player-store/es/actions/api/analytics';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../@coorpacademy/player-store/es/actions/api/answers';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS
} from '../@coorpacademy/player-store/es/actions/api/contents';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../@coorpacademy/player-store/es/actions/api/exit-nodes';
import {RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS} from '../@coorpacademy/player-store/es/actions/api/recommendations';
import {
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS
} from '../@coorpacademy/player-store/es/actions/api/next-content';
import {
  UI_SELECT_PROGRESSION,
  UI_PROGRESSION_UPDATED,
  OPEN_ASSISTANCE_REQUEST,
  OPEN_ASSISTANCE_SUCCESS
} from '../@coorpacademy/player-store/es/actions/ui/progressions';
import {UI_SELECT_ROUTE} from '../@coorpacademy/player-store/es/actions/ui/route';
import popinExtraLife from '../../test/fixtures/popin-correction/popin-extra-life';
import popinFailure from '../../test/fixtures/popin-correction/popin-failure';
import popinRevival from '../../test/fixtures/popin-correction/popin-revival';
import popinSuccess from '../../test/fixtures/popin-correction/popin-success';
import popinSuccessNode from '../../test/fixtures/popin-correction/popin-success-node';
import popinNextLevel from '../../test/fixtures/popin-correction/popin-next-level';
import {getCurrentProgressionId} from '../@coorpacademy/player-store/es/utils/state-extract';

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

const createDispatch = state => async action => {
  const dispatched = [];
  const getState = () => state;
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
  t.deepEqual(actionTypes(dispatched), [OPEN_ASSISTANCE_REQUEST, OPEN_ASSISTANCE_SUCCESS]);
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
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CONTENT_FETCH_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,

    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
    CONTENT_FETCH_REQUEST,
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
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CONTENT_FETCH_REQUEST,
    CONTENT_FETCH_SUCCESS,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_INFO_FETCH_SUCCESS,
    RECO_FETCH_REQUEST,
    RANK_FETCH_END_REQUEST,
    NEXT_CONTENT_FETCH_REQUEST,
    EXIT_NODE_FETCH_REQUEST,
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
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CONTENT_FETCH_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    CONTENT_INFO_FETCH_REQUEST,
    RECO_FETCH_REQUEST,
    RANK_FETCH_END_REQUEST,
    NEXT_CONTENT_FETCH_REQUEST,
    EXIT_NODE_FETCH_REQUEST,
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
    UI_PROGRESSION_UPDATED,
    SEND_PROGRESSION_ANALYTICS_REQUEST,
    SEND_PROGRESSION_ANALYTICS_SUCCESS,
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CONTENT_FETCH_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_INFO_FETCH_SUCCESS,
    CONTENT_FETCH_REQUEST,
    ANSWER_FETCH_REQUEST,
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
    UI_PROGRESSION_UPDATED,
    SEND_PROGRESSION_ANALYTICS_REQUEST,
    SEND_PROGRESSION_ANALYTICS_SUCCESS,
    UI_SELECT_PROGRESSION,
    PROGRESSION_FETCH_REQUEST,
    RANK_FETCH_START_REQUEST,
    RANK_FETCH_START_SUCCESS,
    CONTENT_FETCH_REQUEST,
    PROGRESSION_FETCH_BESTOF_REQUEST,
    PROGRESSION_FETCH_BESTOF_SUCCESS,
    ENGINE_CONFIG_FETCH_REQUEST,
    ENGINE_CONFIG_FETCH_SUCCESS,
    CONTENT_INFO_FETCH_REQUEST,
    CONTENT_INFO_FETCH_SUCCESS,
    CONTENT_FETCH_REQUEST,
    ANSWER_FETCH_REQUEST,
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
