import createBehaviour from '../../util/behaviour';

const uppercase = (engine, skin) => props => {
  const properties = {
    style: {
      'textTransform': 'uppercase'
    }
  };

  return properties;
};

export default createBehaviour(uppercase);
