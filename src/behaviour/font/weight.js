import behaviourFactory from '../behaviour-factory';

const specialFont = (renderer, skin) => props => ({
  style: {
    fontWeight: 'bold',
    fontSize: '55px',
    maxWidth: '850px',
    margin: '0 auto'
  }
});

export default behaviourFactory(specialFont);
