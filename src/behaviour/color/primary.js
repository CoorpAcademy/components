import behaviourFactory from '../behaviour-factory';

const primary = (renderer, skin) => props => ({
  style: {color: skin && skin.primary || props.value}
});

export default behaviourFactory(primary);
