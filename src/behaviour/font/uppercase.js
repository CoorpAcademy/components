import createBehaviour from '../../util/behaviour';

const uppercase = (renderer, skin) => props => {
  const properties = {
    style: {
      'textTransform': 'uppercase'
    }
  };

  return properties;
};

export default createBehaviour(uppercase);
