import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  postComment,
  SEND_POST_COMMENT_REQUEST,
  SEND_POST_COMMENT_SUCCESS,
  SEND_POST_COMMENT_FAILURE
} from '../comments';

test(
  'should call post comment and dispatch SUCCESS action on post comment action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}})
  )({}),
  t => ({
    Comments: {
      post: (content, message) => {
        t.deepEqual(content, {ref: '1.B', level: 'base'});
        t.is(message, 'bar');
        return true;
      }
    }
  }),
  postComment('foo', {ref: '1.B', level: 'base'}, 'bar'),
  [
    {
      type: SEND_POST_COMMENT_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: SEND_POST_COMMENT_SUCCESS,
      payload: true,
      meta: {progressionId: 'foo'}
    }
  ],
  2
);

test(
  'should call post comment and dispatch FAILURE when posting fails',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}})
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Comments: {
      post: (content, message) => {
        t.deepEqual(content, {ref: '1.B', level: 'base'});
        t.is(message, 'bar');
        throw new Error('some error');
      }
    }
  }),
  postComment('foo', {ref: '1.B', level: 'base'}, 'bar'),
  [
    {
      type: SEND_POST_COMMENT_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: SEND_POST_COMMENT_FAILURE,
      error: true,
      payload: new Error('some error'),
      meta: {progressionId: 'foo'}
    }
  ],
  3
);
