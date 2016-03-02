import createDecorator from './decorator';
import createWrapper from './wrapper';

const createBehaviour = createProperties => (renderer, skin) => {
  const {map, resolve} = renderer;
  const wrapper = createWrapper(createProperties)(renderer, skin);

  const render = (props) => ({
    ...props,
    children: map(resolve, props.children)
  });

  const behaviour = (props) => {
    return wrapper(render(props));
  };

  behaviour.decorate = createDecorator(renderer, behaviour);

  return behaviour;
};

export default createBehaviour;
