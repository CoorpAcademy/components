const behaviour = createProperties => (renderer, skin) => (props) => {
  let {h, map, clone} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  return map(props.children, (child) => {
    return clone(child, properties);
  }).pop();
};

export default behaviour;
