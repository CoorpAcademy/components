import test from 'ava';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
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
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'node',
    ref: 'extraLife'
  })
);

test(
  'should call accept extra life and succeed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);
        const contentRef = get('content.ref', payload);

        t.true(isAccepted);
        t.is(contentRef, 'extraLife');
        t.is(id, 'foo');
        return 'foo';
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
      payload: 'foo'
    }
  ]
);

test(
  'should call accept extra life and fail',
  macro,
  initState({}),
  t => ({
    Progressions: {
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);
        const contentRef = get('content.ref', payload);

        t.true(isAccepted);
        t.is(contentRef, 'extraLife');
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
  'should call refuse extra life and succeed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);
        const contentRef = get('content.ref', payload);

        t.false(isAccepted);
        t.is(contentRef, 'extraLife');
        t.is(id, 'foo');
        return 'foo';
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
      payload: 'foo'
    }
  ]
);

test(
  'should call refuse extra life and fail',
  macro,
  initState({}),
  t => ({
    Progressions: {
      postExtraLife: (id, payload) => {
        const isAccepted = get('isAccepted', payload);
        const contentRef = get('content.ref', payload);

        t.false(isAccepted);
        t.is(contentRef, 'extraLife');
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
