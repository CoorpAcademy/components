import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import mockContentService from '../../test/helpers/mock-content-service';
import {
  UI_REVIVAL_PENDING,
  pending,
  acceptExtraLifeAndReset,
  refuseExtraLifeAndReset
} from '../extra-life';
import {UI_SELECT_PROGRESSION} from '../progressions';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS
} from '../../api/progressions';
import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../../api/rank';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS
} from '../../api/contents';

test(
  'should dispatch revival pending',
  macro,
  {},
  t => ({}),
  pending(),
  [
    {
      type: UI_REVIVAL_PENDING
    }
  ],
  0
);

test(
  'should dispatch refuse and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.engine', {ref: 'microlearning', version: '1'}),
    set('data.progressions.entities.foo.state.nextContent', {type: 'node', ref: 'extraLife'}),
    set('data.progressions.entities.foo.state.content', {type: 'slide', ref: '1.A2.1'})
  )({}),
  t => ({
    Content: mockContentService(t),
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error('some error');
      },
      findBestOf: (type, ref, id) => {
        t.is(ref, 'chapId');
        return 16;
      },
      postExtraLife: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'node', ref: 'extraLife'},
          isAccepted: false
        });
        return {
          content: {type: 'chapter', ref: 'chapId'},
          state: {
            content: {type: 'slide', ref: '1.A2.1'},
            nextContent: {type: 'slide', ref: 'slideRef'}
          }
        };
      },
      getEngineConfig: engine => {
        t.deepEqual(engine, {ref: 'microlearning', version: '1'});
        return {foo: 'engine'};
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    }
  }),
  refuseExtraLifeAndReset('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEREFUSED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: {
        content: {type: 'chapter', ref: 'chapId'},
        state: {
          content: {type: 'slide', ref: '1.A2.1'},
          nextContent: {type: 'slide', ref: 'slideRef'}
        }
      }
    },
    {
      type: UI_SELECT_PROGRESSION,
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
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'microlearning', version: '1'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'microlearning', version: '1'}},
      payload: {foo: 'engine'}
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {nbSlides: 20}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'slideRef'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'slideRef'},
      payload: {
        _id: 'slideRef',
        chapter_id: 'chapId',
        foo: 'bar'
      }
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    }
  ],
  10
);

test(
  'should dispatch accept and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.engine', {ref: 'microlearning', version: '1'}),
    set('data.progressions.entities.foo.state.nextContent', {type: 'node', ref: 'extraLife'}),
    set('data.progressions.entities.foo.state.content', {type: 'slide', ref: '1.A2.1'})
  )({}),
  t => ({
    Content: mockContentService(t),
    Progressions: {
      findBestOf: (type, ref, id) => {
        t.is(ref, 'chapId');
        return 16;
      },
      postExtraLife: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'node', ref: 'extraLife'},
          isAccepted: true
        });
        return {
          content: {type: 'chapter', ref: 'chapId'},
          state: {
            content: {type: 'slide', ref: '1.A2.1'},
            nextContent: {type: 'slide', ref: 'slideRef'}
          }
        };
      },
      getEngineConfig: engine => {
        t.deepEqual(engine, {ref: 'microlearning', version: '1'});
        return {foo: 'engine'};
      }
    },
    LeaderBoard: {
      getRank: (...args) => {
        t.pass();
        return 1;
      }
    }
  }),
  acceptExtraLifeAndReset('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: {
        content: {type: 'chapter', ref: 'chapId'},
        state: {
          content: {type: 'slide', ref: '1.A2.1'},
          nextContent: {type: 'slide', ref: 'slideRef'}
        }
      }
    },
    {
      type: UI_SELECT_PROGRESSION,
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
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'microlearning', version: '1'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'microlearning', version: '1'}},
      payload: {foo: 'engine'}
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {nbSlides: 20}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'slideRef'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'slideRef'},
      payload: {
        _id: 'slideRef',
        chapter_id: 'chapId',
        foo: 'bar'
      }
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    }
  ],
  10
);
