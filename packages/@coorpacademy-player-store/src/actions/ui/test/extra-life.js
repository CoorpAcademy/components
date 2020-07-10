import test from 'ava';
import {pipe, set} from 'lodash/fp';
import macro from '../../test/helpers/macro';
import mockContentService from '../../test/helpers/mock-content-service';
import {acceptExtraLife, refuseExtraLife} from '../extra-life';
import {UI_PROGRESSION_ACTION_TYPES} from '../progressions';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
} from '../../api/progressions';
import {UI_SELECT_ROUTE} from '../route';
import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../../api/rank';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS,
} from '../../api/contents';
import {PROGRESSION_UPDATED_ON_MOVE} from '../../api/analytics';

test(
  'should dispatch refuse and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.configs.entities.microlearning@1', {
      version: '1',
    }),
    set('data.progressions.entities.foo.engine', {ref: 'microlearning', version: '1'}),
    set('data.progressions.entities.foo.state.nextContent', {type: 'node', ref: 'extraLife'}),
    set('data.progressions.entities.foo.state.content', {type: 'slide', ref: '1.A2.1'})
  )({}),
  (t) => ({
    Analytics: {
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        t.deepEqual(currentProgression.state.nextContent, {type: 'slide', ref: 'slideRef'});
        return 'sent';
      },
    },
    Content: mockContentService(t),
    Progressions: {
      findById: (id) => {
        t.is(id, 'foo');
        throw new Error('some error');
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'chapId');
        return 16;
      },
      refuseExtraLife: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'node', ref: 'extraLife'},
        });
        return {
          content: {type: 'chapter', ref: 'chapId'},
          state: {
            content: {type: 'slide', ref: '1.A2.1'},
            nextContent: {type: 'slide', ref: 'slideRef'},
          },
        };
      },
      getEngineConfig: (engine) => {
        t.deepEqual(engine, {ref: 'microlearning', version: '1'});
        return {foo: 'engine'};
      },
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      },
    },
  }),
  refuseExtraLife(),
  [
    {
      type: PROGRESSION_EXTRALIFEREFUSED_REQUEST,
      meta: {progressionId: 'foo'},
    },
    {
      type: PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: {
        content: {type: 'chapter', ref: 'chapId'},
        state: {
          content: {type: 'slide', ref: '1.A2.1'},
          nextContent: {type: 'slide', ref: 'slideRef'},
        },
      },
    },
    {
      type: PROGRESSION_UPDATED_ON_MOVE,
      meta: {
        id: 'foo',
      },
    },
    {
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
      payload: {id: 'foo'},
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'},
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'},
    },
    {
      type: RANK_FETCH_START_REQUEST,
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'microlearning', version: '1'}},
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'slideRef'},
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1,
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: 16,
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {nbSlides: 20},
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'slideRef'},
      payload: {
        _id: 'slideRef',
        chapter_id: 'chapId',
        foo: 'bar',
      },
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'answer',
      meta: {progressionId: 'foo'},
    },
  ],
  12
);

test(
  'should dispatch accept and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.configs.entities.microlearning@1', {
      version: '1',
    }),
    set('data.progressions.entities.foo.engine', {ref: 'microlearning', version: '1'}),
    set('data.progressions.entities.foo.state.nextContent', {type: 'node', ref: 'extraLife'}),
    set('data.progressions.entities.foo.state.content', {type: 'slide', ref: '1.A2.1'})
  )({}),
  (t) => ({
    Analytics: {
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        t.deepEqual(currentProgression.state.nextContent, {type: 'slide', ref: 'slideRef'});
        return 'sent';
      },
    },
    Content: mockContentService(t),
    Progressions: {
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'chapId');
        return 16;
      },
      acceptExtraLife: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'node', ref: 'extraLife'},
        });
        return {
          content: {type: 'chapter', ref: 'chapId'},
          state: {
            content: {type: 'slide', ref: '1.A2.1'},
            nextContent: {type: 'slide', ref: 'slideRef'},
          },
        };
      },
      getEngineConfig: (engine) => {
        t.deepEqual(engine, {ref: 'microlearning', version: '1'});
        return {foo: 'engine'};
      },
    },
    LeaderBoard: {
      getRank: (...args) => {
        t.pass();
        return 1;
      },
    },
  }),
  acceptExtraLife(),
  [
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
      meta: {progressionId: 'foo'},
    },
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: {
        content: {type: 'chapter', ref: 'chapId'},
        state: {
          content: {type: 'slide', ref: '1.A2.1'},
          nextContent: {type: 'slide', ref: 'slideRef'},
        },
      },
    },
    {
      type: PROGRESSION_UPDATED_ON_MOVE,
      meta: {
        id: 'foo',
      },
    },
    {
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
      payload: {id: 'foo'},
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'},
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'},
    },
    {
      type: RANK_FETCH_START_REQUEST,
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'microlearning', version: '1'}},
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'slideRef'},
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1,
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: 16,
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {nbSlides: 20},
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'slideRef'},
      payload: {
        _id: 'slideRef',
        chapter_id: 'chapId',
        foo: 'bar',
      },
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'},
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'answer',
      meta: {progressionId: 'foo'},
    },
  ],
  12
);
