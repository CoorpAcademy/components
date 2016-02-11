const createComponent = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  return map(props.children, (child) => {
    return clone(child, properties);
  }).pop();
};

const createBehaviour = createProperties => (renderer, skin) => {
  const {h} = renderer;
  const Behaviour = createComponent(createProperties)(renderer, skin);

  const enhanceComponent = options => Element => props => {
    return  <Behaviour {...options}>
              <Element>
                {props.children}
              </Element>
            </Behaviour>;
  };

  enhanceComponent.component = Behaviour;
  return enhanceComponent;
}

const factory = createProperties => (renderer, skin) => createBehaviour(createProperties)(renderer, skin);
export default factory;
