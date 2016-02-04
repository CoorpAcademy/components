import mapValues from 'lodash.mapvalues';

const primary = ({h, map, clone}, skin) => (props) => {
  if(!map || !clone) return props.children;

  return map(props.children, (child) => {
    return clone(child, {
      style: mapValues(props.on, (value) => skin && skin.primary || value)
    });
  });
};

export default primary;
