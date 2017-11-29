import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {editComment, UI_EDIT_COMMENT, postComment, UI_POST_COMMENT} from '../comments';
import {
  SEND_POST_COMMENT_REQUEST,
  SEND_POST_COMMENT_SUCCESS,
  SEND_POST_COMMENT_FAILURE
} from '../../api/comments';

test(
  'should call edit comment and dispatch edit comment action',
  macro,
  {},
  t => ({}),
  editComment('foo'),
  [
    {
      type: UI_EDIT_COMMENT,
      payload: {text: 'foo'}
    }
  ],
  0
);

test(
  'should call post comment and dispatch SUCCESS action on post comment action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'}),
    set('ui.comment.text', 'bar')
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
  postComment('foo'),
  [
    {
      type: UI_POST_COMMENT,
      payload: {}
    },
    {
      type: SEND_POST_COMMENT_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SEND_POST_COMMENT_SUCCESS,
      payload: true,
      meta: {id: 'foo'}
    }
  ],
  3
);

test(
  'should call post comment and dispatch FAILURE action on post comment action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'}),
    set('ui.comment.text', 'bar')
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
  postComment('foo'),
  [
    {
      type: UI_POST_COMMENT,
      payload: {}
    },
    {
      type: SEND_POST_COMMENT_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SEND_POST_COMMENT_FAILURE,
      error: true,
      payload: new Error('some error'),
      meta: {id: 'foo'}
    }
  ],
  4
);
