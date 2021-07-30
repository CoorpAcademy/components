import test from 'ava';
import reducer from '../location';
import {
  SET_REDIRECT_URL_AFTER_END_REQUEST,
  SET_REDIRECT_URL_AFTER_END_SUCCESS
} from '../../../actions/ui/location';
import macro from '../../test/helpers/macro';

test(
  'should update clean redirectURLAfterEnd',
  macro,
  reducer,
  {},
  {
    type: SET_REDIRECT_URL_AFTER_END_REQUEST
  },
  {
    redirectURLAfterEnd: ''
  }
);

test(
  'should update redirectURLAfterEnd',
  macro,
  reducer,
  {},
  {
    type: SET_REDIRECT_URL_AFTER_END_SUCCESS,
    payload: 'http://www.google.com'
  },
  {
    redirectURLAfterEnd: 'http://www.google.com'
  }
);
