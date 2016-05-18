import createBehaviour from '../../../util/behaviour';

const normal = (engine, options) => props => {
  const properties = {
    style: {
      fontSize: '12px',
      fontWeight: 'normal'
    }
  };

  return properties;
};

export default createBehaviour(normal);
