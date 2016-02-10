import mapValues from 'lodash.mapvalues';

const primary = ({h, map, clone}, skin) => (props) => {
  if(!map || !clone) return props.children;

  return map(props.children, (child) => {
    const properties = {
      style: mapValues(props.on, value => skin && skin.primary || value)
    }

    return clone(child, properties);
  }).pop();
};

export default primary;
