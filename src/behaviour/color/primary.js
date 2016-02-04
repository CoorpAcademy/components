import mapValues from 'lodash.mapvalues';

const primary = (h, {skin, map, clone}) => (props) => {
  return map(props.children, (child) => {
    return clone(child, {
      style: mapValues(props.on, (value) => skin && skin.primary || value)
    });
  });
};

export default primary;
