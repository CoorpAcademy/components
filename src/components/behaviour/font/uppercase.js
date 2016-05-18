import createBehaviour from '../../../util/behaviour';

const uppercase = (engine, options) => props => {
  const properties = {
    style: {
      textTransform: 'uppercase'
    }
  };

  return properties;
};

export default createBehaviour(uppercase);
