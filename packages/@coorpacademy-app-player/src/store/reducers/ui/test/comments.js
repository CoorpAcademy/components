import test from 'ava';
import reducer from '../comments';
import {UI_EDIT_COMMENT, UI_POST_COMMENT} from '../../../actions/ui/comments';
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
  {type: UI_POST_COMMENT},
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
