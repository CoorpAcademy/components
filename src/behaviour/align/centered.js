import createBehaviour from '../../util/behaviour';

const centered = (renderer, skin) => props => {
  const properties = {
    style: {
      'textAlign': 'center'
    }
  };

  return properties;
};

export default createBehaviour(centered);
