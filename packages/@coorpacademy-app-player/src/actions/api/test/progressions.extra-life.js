import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  acceptExtraLife,
  refuseExtraLife,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_FAILURE
} from '../progressions';

const initState = pipe(
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent', 'bar')
);

test(
  'should accept extra life',
  macro,
  initState({}),
  t => ({
    Progressions: {
      acceptExtraLife: id => {
        t.is(id, 'foo');
        return 'baz';
      }
    }
  }),
  acceptExtraLife('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'baz'
    }
  ]
);

test(
  'should refuse extra life',
  macro,
  initState({}),
  t => ({
    Progressions: {
      acceptExtraLife: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  acceptExtraLife('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should refuse extra life',
  macro,
  initState({}),
  t => ({
    Progressions: {
      refuseExtraLife: id => {
        t.is(id, 'foo');
        return 'baz';
      }
    }
  }),
  refuseExtraLife('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEREFUSED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'baz'
    }
  ]
);

test(
  'should refuse extra life',
  macro,
  initState({}),
  t => ({
    Progressions: {
      refuseExtraLife: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  refuseExtraLife('foo'),
  [
    {
      type: PROGRESSION_EXTRALIFEREFUSED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_EXTRALIFEREFUSED_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);
