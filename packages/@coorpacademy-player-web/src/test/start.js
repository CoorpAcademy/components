import test from 'ava';
import start from '../start';

test('it should start app', t => {
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

  const app = start(options, store);
  t.is(app, 'bar');
});
