import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {selectProgression, UI_SELECT_PROGRESSION} from '../progressions';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS
} from '../../api/progressions';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../../api/rank';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../../api/exit-nodes';
import {CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../../api/contents';
import {RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS} from '../../api/recommendations';
import {UI_SELECT_ROUTE} from '../route';

const slide = {ref: 'bar'};
const slideWithContext = {
  ref: 'bar',
  context: {title: 'some-title', description: 'some-description'}
};

const ContentService = (t, withContext) => ({
  find: (type, ref) => {
    switch (type) {
      case 'chapter':
        t.is(ref, 'baz');
        return 'baz';

      case 'slide':
        t.is(ref, 'bar');
        return withContext ? slideWithContext : slide;

      default:
        throw new Error();
    }
  }
});

test(
  'should select progression and fetch next ExitNode',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  selectProgression('foo'),
  [
    [
      {
        type: UI_SELECT_PROGRESSION,
        payload: {id: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.progressions.entities.foo', null, {})
    ],
    {
      type: PROGRESSION_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should select progression and fetch next slide',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      },
      findBestOf: (type, ref, id) => {
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => 42
    },
    LeaderBoard: {
      getRank: () => {
        return 1;
      }
    },
    Content: ContentService(t)
  }),
  selectProgression('foo'),
  [
    [
      {
        type: UI_SELECT_PROGRESSION,
        payload: {id: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'bar'}),
        set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'baz'}),
        set('data.progressions.entities.foo.engine', {ref: 'qux', version: 'quux'})
      )({})
    ],
    [
      {
        type: RANK_FETCH_START_REQUEST
      },
      set('data.rank.start', null, {})
    ],
    [
      {
        type: RANK_FETCH_START_SUCCESS,
        payload: 1
      },
      set('data.rank.start', 1, {})
    ],
    [
      {
        type: CONTENT_FETCH_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz', null, {})
    ],
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'baz'
    },
    [
      {
        type: PROGRESSION_FETCH_BESTOF_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz.bestScore', null)({})
    ],
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: {type: 'chapter', ref: 'baz'},
        payload: 16
      },
      set('data.contents.chapter.entities.baz.bestScore', 16, {})
    ],
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    [
      {
        type: CONTENT_FETCH_REQUEST,
        meta: {type: 'slide', ref: 'bar'}
      },
      set('data.contents.slide.entities.bar', null, {})
    ],
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slide
    }
  ]
);

test(
  'should select progression and fetch next slide, and show context if available',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      },
      findBestOf: (type, ref, id) => {
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => 42
    },
    LeaderBoard: {
      getRank: () => {
        return 1;
      }
    },
    Content: ContentService(t, true)
  }),
  selectProgression('foo'),
  [
    [
      {
        type: UI_SELECT_PROGRESSION,
        payload: {id: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'bar'}),
        set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'baz'}),
        set('data.progressions.entities.foo.engine', {ref: 'qux', version: 'quux'})
      )({})
    ],
    [
      {
        type: RANK_FETCH_START_REQUEST
      },
      set('data.rank.start', null, {})
    ],
    [
      {
        type: RANK_FETCH_START_SUCCESS,
        payload: 1
      },
      set('data.rank.start', 1, {})
    ],
    [
      {
        type: CONTENT_FETCH_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz', null, {})
    ],
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'baz'
    },
    [
      {
        type: PROGRESSION_FETCH_BESTOF_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz.bestScore', null)({})
    ],
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: {type: 'chapter', ref: 'baz'},
        payload: 16
      },
      set('data.contents.chapter.entities.baz.bestScore', 16, {})
    ],
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    [
      {
        type: CONTENT_FETCH_REQUEST,
        meta: {type: 'slide', ref: 'bar'}
      },
      set('data.contents.slide.entities.bar', null, {})
    ],
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slideWithContext
    },
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'context'
    }
  ]
);

test(
  'should select progression and fetch next ExitNode',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      },
      findBestOf: (type, ref, id) => {
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => 42
    },
    ExitNodes: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
      }
    },
    LeaderBoard: {
      getRank: () => {
        return 1;
      }
    },
    Content: ContentService(t),
    Recommendations: {
      find: () => 'plop'
    }
  }),
  selectProgression('foo'),
  [
    [
      {
        type: UI_SELECT_PROGRESSION,
        payload: {id: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'success', ref: 'bar'}),
        set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'baz'}),
        set('data.progressions.entities.foo.engine', {ref: 'qux', version: 'quux'})
      )({})
    ],
    [
      {
        type: RANK_FETCH_START_REQUEST
      },
      set('data.rank.start', null, {})
    ],
    [
      {
        type: RANK_FETCH_START_SUCCESS,
        payload: 1
      },
      set('data.rank.start', 1, {})
    ],
    [
      {
        type: CONTENT_FETCH_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz', null, {})
    ],
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'baz'
    },
    [
      {
        type: PROGRESSION_FETCH_BESTOF_REQUEST,
        meta: {type: 'chapter', ref: 'baz'}
      },
      set('data.contents.chapter.entities.baz.bestScore', null, {})
    ],
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: {type: 'chapter', ref: 'baz'},
        payload: 16
      },
      set('data.contents.chapter.entities.baz.bestScore', 16, {})
    ],
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    [
      {
        type: RANK_FETCH_END_REQUEST
      },
      set('data.rank.end', null, {})
    ],
    [
      {
        type: RANK_FETCH_END_SUCCESS,
        payload: 1
      },
      set('data.rank.end', 1, {})
    ],
    [
      {
        type: RECO_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.recommendations.entities.foo', null, {})
    ],
    [
      {
        type: RECO_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'plop'
      },
      set('data.recommendations.entities.foo', 'plop', {})
    ],
    [
      {
        type: EXIT_NODE_FETCH_REQUEST,
        meta: {id: 'bar'}
      },
      set('data.exitNodes.entities.bar', null, {})
    ],
    {
      type: EXIT_NODE_FETCH_SUCCESS,
      meta: {id: 'bar'},
      payload: 'bar'
    }
  ]
);
