import createBehaviour from '../../../util/behaviour';

const centered = (treant, options) => props => {
  const properties = {
    style: {
      textAlign: 'center'
    }
  };

  return properties;
};

export default createBehaviour(centered);
