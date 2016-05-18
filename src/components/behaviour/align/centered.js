import createBehaviour from '../../../util/behaviour';

const centered = (engine, options) => props => {
  const properties = {
    style: {
      textAlign: 'center'
    }
  };

  return properties;
};

export default createBehaviour(centered);
