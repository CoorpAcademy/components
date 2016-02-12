import mapValues from 'lodash.mapvalues';
import behaviourFactory from '../behaviour-factory';

const primary = (renderer, skin) => props => ({
  style: {color: skin && skin.primary || value}
})

export default behaviourFactory(primary);
