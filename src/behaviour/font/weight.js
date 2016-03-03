import createBehaviour from '../../util/behaviour';

const specialFont = (renderer, skin) => props => {
  const properties = {
    style: {
      fontWeight: 'bold',
      fontSize: '55px',
      maxWidth: '850px',
      margin: '0 auto'
    }
  };

  return properties;
};

export default createBehaviour(specialFont);
