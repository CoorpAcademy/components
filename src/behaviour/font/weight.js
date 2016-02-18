import behaviourFactory from '../behaviour-factory';

const specialFont = (renderer, skin) => props => {
  const {render} = renderer;
  const vTree = render(props.children);

  const properties = {
    style: {
      fontWeight: 'bold',
      fontSize: '55px',
      maxWidth: '850px',
      margin: '0 auto'
    }
  };

  return { vTree, properties };
};

export default behaviourFactory(specialFont);
