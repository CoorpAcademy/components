import test from 'ava';
import bundler from '../bundler';

test('should partial component with engin', t => {
  const engine = {};
  const components = {
    createComponent: (engine) => (props) => engine
  };
  const bundle = bundler(engine, components);
  const component = bundle.createComponent();
  t.is(component(), engine);
});
