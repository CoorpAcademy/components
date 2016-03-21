import test from 'ava';
import bundler from '../bundler';

test('should partial component with engin', t => {
  const engine = {};
  const components = {
    createComponent: (engine) => (props) => engine
  };
  const _components = bundler(engine, components);
  const component = _components.createComponent();
  t.is(component(), engine);
});
