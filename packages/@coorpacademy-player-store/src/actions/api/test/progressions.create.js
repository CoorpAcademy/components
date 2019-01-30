import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';

import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../rank';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS
} from '../contents';

import {
  createProgression,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS,
  PROGRESSION_CREATE_REQUEST,
  PROGRESSION_CREATE_SUCCESS
} from '../progressions';
import {UI_PROGRESSION_ACTION_TYPES} from '../../ui/progressions';
import {UI_SELECT_ROUTE} from '../../ui/route';

const slide = {_id: 'bar', chapter_id: 'baz', foo: 1};

const engine = {
  ref: 'learner',
  version: 'test'
};

const content = {
  type: 'level',
  ref: '1B'
};

const engineOptions = {
  lives: 888
};

const DataLayer = t => ({
  find: (type, ref) => {
    switch (type) {
      case 'chapter':
        t.is(ref, 'baz');
        return {_id: 'baz', foo: 3};

      case 'slide':
        t.is(ref, 'bar');
        return slide;

      case 'level':
        t.is(ref, content.ref);
        return {level: 'base', ref: '1B'};

      default:
        t.fail();
    }
  },
  getInfo: (contentRef, engineRef, version) => {
    t.is(contentRef, content.ref);
    t.is(engineRef, engine.ref);
    t.is(version, engine.version);
    return 'info';
  }
});

test(
  'should throw error if progression has no state',
  macro,
  set('data.progressions.entities.foo._id', 'foo', {}),
  t => ({
    Progressions: {
      create: (_engine, _content, _engineOptions) => {
        return {
          _id: 'foo',
          engine: _engine,
          content: _content,
          engineOptions: _engineOptions,
          state: {
            nextContent: {type: 'slide', ref: slide._id}
          }
        };
      },
      findById: id => {
        t.is(id, 'foo');
        return {
          _id: 'foo',
          state: {
            nextContent: {type: 'slide', ref: slide._id}
          },
          content,
          engine
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'level');
        t.is(ref, '1B');
        return 16;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: DataLayer(t, false)
  }),
  createProgression(engine, content, engineOptions),
  [
    {
      type: PROGRESSION_CREATE_REQUEST,
      meta: {}
    },
    {
      type: PROGRESSION_CREATE_SUCCESS,
      meta: {},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {
            type: 'slide',
            ref: slide._id
          }
        },
        engine,
        content,
        engineOptions
      }
    },
    {
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'level', ref: '1B'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'level', ref: '1B'},
      payload: {level: 'base', ref: '1B'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'level', ref: '1B'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'level', ref: '1B'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: content
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: content,
      payload: 'info'
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'bar'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slide
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: {_id: 'baz', foo: 3}
    },
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'answer'
    }
  ],
  10
);
