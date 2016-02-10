import mapValues from 'lodash.mapvalues';
import behaviour from '../behaviour';

const primary = (renderer, skin) => props => ({
  style: mapValues(props.on, value => skin && skin.primary || value)
})

export default behaviour(primary);
