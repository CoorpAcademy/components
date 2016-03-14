import createBehaviour from '../../util/behaviour';

const normal = (renderer, skin) => props => {
  const properties = {
    style: {
      'font-size': '12px',
      'font-weight': 'normal'
    }
  };

  return properties;
};

export default createBehaviour(normal);
