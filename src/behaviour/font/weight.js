import mapValues from 'lodash.mapvalues';

const fontBehaviour = {
  style: {
    fontWeight: 'bold',
    fontSize: '50px'
  }
};

const weight = ({h, map, clone}, skin) => (props) => {
  if(!map || !clone) return props.children;

  return map(props.children, (child) => {
    return clone(child, fontBehaviour);
  }).pop();
};

export default weight;
