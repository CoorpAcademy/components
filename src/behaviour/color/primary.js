import behaviourFactory from '../behaviour-factory';

const primary = (renderer, skin) => props => {
  const {render} = renderer;
  const vTree = render(props.children);

  const properties = {
    style: {
      color: skin && skin.primary || props.value
    }
  };

  return { vTree, properties };
};

export default behaviourFactory(primary);
