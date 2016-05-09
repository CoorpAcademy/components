import createDecorator from './decorator';
import createWrapper from './wrapper';

const createBehaviour = createProperties => (engine, options) => {
  const {map, resolve} = engine;
  const wrapper = createWrapper(createProperties)(engine, options);

  const render = children => map(resolve, children);
  const behaviour = (props, children) => wrapper(props, render(children));

  behaviour.decorate = createDecorator(engine)(behaviour);

  return behaviour;
};

export default createBehaviour;
