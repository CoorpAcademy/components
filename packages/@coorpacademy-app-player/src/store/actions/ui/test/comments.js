import test from 'ava';
import macro from '../../test/helpers/macro';
import {editComment, UI_EDIT_COMMENT} from '../comments';

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
