import createBehaviour from '../../util/behaviour';

const normal = (renderer, skin) => props => {
  const properties = {
    style: {
      'fontSize': '12px',
      'fontWeight': 'normal'
    }
  };

  return properties;
};

export default createBehaviour(normal);
