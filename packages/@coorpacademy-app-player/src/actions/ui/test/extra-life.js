import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import macro from '../../test/helpers/macro';
import {
  UI_REVIVAL_PENDING,
  pending,
  acceptExtraLifeAndReset,
  refuseExtraLifeAndReset
} from '../extra-life';
import {UI_SELECT_PROGRESSION} from '../progressions';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS
} from '../../api/progressions';

test('should dispatch revival pending', macro, {}, t => ({}), pending(), [
  {
    type: UI_REVIVAL_PENDING
  }
]);

test(
  'should dispatch refuse and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.nextContent', {type: 'node', ref: 'extraLife'})
  )({}),
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      },
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);

        t.false(isAccepted);
        t.is(id, 'foo');
        return 'foo';
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
      payload: 'foo',
      meta: {progressionId: 'foo'}
    },
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
  'should dispatch accept and reset progression',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.nextContent', {type: 'node', ref: 'extraLife'})
  )({}),
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      },
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);

        t.true(isAccepted);
        return 'foo';
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
      payload: 'foo',
      meta: {progressionId: 'foo'}
    },
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
