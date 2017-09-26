import test from 'ava';
import macro from '../../test/helpers/macro';
import {UI_REVIVAL_PENDING, pending} from '../extra-life';

test('should dispatch revival pending', macro, {}, t => ({}), pending(), [
  {
    type: UI_REVIVAL_PENDING
  }
]);
