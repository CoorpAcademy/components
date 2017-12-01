import test from 'ava';
import reducer from '../comments';
import {SEND_POST_COMMENT_REQUEST} from '../../../actions/api/comments';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

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
  {entities: {foo: {isSent: false}}}
);

test(
  'should set status as sent',
  macro,
  reducer,
  {entities: {foo: {isSent: false}}},
  {
    type: SEND_POST_COMMENT_REQUEST,
    meta: {progressionId: 'foo'}
  },
  {entities: {foo: {isSent: true}}}
);
