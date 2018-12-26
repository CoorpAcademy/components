import test from 'ava';
import runApp from '../run-app';

test('it should run app', t => {
  const options = {
    progression: {
      id: 'foo'
    }
  };

  const store = {
    dispatch: action => {
      t.is(action.constructor.name, 'AsyncFunction');
      return 'bar';
    }
  };

  const app = runApp(options, store);
  t.is(app, 'bar');
});
