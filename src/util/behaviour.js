import createDecorator from './decorator';
import createWrapper from './wrapper';

const createBehaviour = createProperties => (engine, skin) => {
  const {map, resolve} = engine;
  const wrapper = createWrapper(createProperties)(engine, skin);

  const render = (props) => ({
    ...props,
    children: map(resolve, props.children)
  });

  const behaviour = (props) => {
    return wrapper(render(props));
  };

  behaviour.decorate = createDecorator(engine)(behaviour);

  return behaviour;
};

export default createBehaviour;
