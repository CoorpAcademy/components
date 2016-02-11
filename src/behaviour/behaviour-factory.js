const createComponent = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  return map(props.children, (child) => {
    return clone(child, properties);
  }).pop();
};

const createBehaviour = (renderer, skin) => createProperties => {
  const {h} = renderer;
  const Behaviour = createComponent(createProperties)(renderer, skin);

  const enhanceComponent = properties => Element => props => {
    return  <Behaviour {...properties}>
              <Element>
                {props.children}
              </Element>
            </Behaviour>;
  };

  enhanceComponent.asComponent = () => Behaviour;
  return enhanceComponent;
}

const factory = createProperties => (renderer, skin) => createBehaviour(renderer, skin)(createProperties);
export default factory;
