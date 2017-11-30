import test from 'ava';
import reducer from '../comments';
import {UI_EDIT_COMMENT} from '../../../actions/ui/comments';
import {SEND_POST_COMMENT_REQUEST} from '../../../actions/api/comments';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {text: null, isSent: false});

test(
  'should reset comment as not sent',
  macro,
  reducer,
  undefined,
  {
    type: UI_SELECT_PROGRESSION,
    payload: {
      id: 'foo'
    }
  },
  {text: null, isSent: false}
);

test(
  'should set status as sent',
  macro,
  reducer,
  {text: 'foo', isSent: false},
  {type: SEND_POST_COMMENT_REQUEST},
  {text: 'foo', isSent: true}
);

test(
  'should edit message',
  macro,
  reducer,
  {text: 'foo', isSent: false},
  {
    type: UI_EDIT_COMMENT,
    payload: {
      text: 'bar'
    }
  },
  {text: 'bar', isSent: false}
);
