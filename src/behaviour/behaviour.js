const createBehaviour = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  return map(props.children, (child) => {
    return clone(child, properties);
  }).pop();
};

const createElement = createProperties => (Element, properties) => (renderer, skin) => props => {
  const {h} = renderer;
  const Behaviour = createBehaviour(createProperties)(renderer, skin);
  console.log(Element);
  return  <Behaviour {...properties}>
            <Element>
              {props.children}
            </Element>
          </Behaviour>
}

export default createProperties => ({
  createComponent: createBehaviour(createProperties),
  on: createElement(createProperties)
})
