import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {selectProgression, UI_SELECT_PROGRESSION} from '../progressions';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_FAILURE
} from '../../api/progressions';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../api/slides';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../../api/exit-nodes';

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
  'should select progression and fetch next Slide',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Slides: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
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
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'bar'})
      )({})
    ],
    [
      {
        type: SLIDE_FETCH_REQUEST,
        meta: {id: 'bar'}
      },
      set('data.slides.entities.bar', null, {})
    ],
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {id: 'bar'},
      payload: 'bar'
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
      }
    },
    ExitNodes: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
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
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'success', ref: 'bar'})
      )({})
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
