import createDecorator from './decorator';
import createWrapper from './wrapper';

const createBehaviour = createProperties => (treant, options) => {
  const {map, resolve} = treant;
  const wrapper = createWrapper(createProperties)(treant, options);

  const render = children => map(resolve, children);
  const behaviour = (props, children) => wrapper(props, render(children));

  behaviour.decorate = createDecorator(treant)(behaviour);

  return behaviour;
};

export default createBehaviour;
