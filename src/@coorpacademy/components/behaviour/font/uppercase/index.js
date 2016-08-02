import createBehaviour from '../../../util/behaviour';

const uppercase = (treant, options) => props => {
  const properties = {
    style: {
      textTransform: 'uppercase'
    }
  };

  return properties;
};

export default createBehaviour(uppercase);
