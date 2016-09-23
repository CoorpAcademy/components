import createBehaviour from '../../../util/behaviour';

const normal = (treant, options) => props => {
  const properties = {
    style: {
      fontSize: '12px',
      fontWeight: 'normal'
    }
  };

  return properties;
};

export default createBehaviour(normal);
