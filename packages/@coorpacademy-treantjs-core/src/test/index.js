import test from 'ava';
import _map from 'lodash/fp/map';

import {
  h,
  clone,
  map,
  resolve,
  walker
} from '../';

test('should create element', t => {
  _map(
    fun => t.truthy(fun),
    [
      h,
      clone,
      map,
      resolve,
      walker
    ]
  );
});
