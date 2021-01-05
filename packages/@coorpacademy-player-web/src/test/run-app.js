import test from 'ava';
import {isFunction} from 'lodash/fp';
import runApp from '../run-app';

test('it should run app', t => {
  const options = {
    progression: {
      id: 'foo'
    }
  };

  t.plan(3);
  const store = {
    dispatch: action => {
      t.true(isFunction(action));
      return 'bar';
    }
  };

  const app = runApp(options, store);
  t.is(app, 'bar');
});
