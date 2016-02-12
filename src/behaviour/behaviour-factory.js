const createComponent = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  return map(props.children, (child) => {
    return clone(child, properties);
  }).pop();
};

const applyBehaviour = (renderer, Behaviour) => Element => props => {
  const {h} = renderer;
  return  <Behaviour>
            <Element>
              {props.children}
            </Element>
          </Behaviour>;
};

const createBehaviour = createProperties => (renderer, skin) => {
  const wrapper = createComponent(createProperties)(renderer, skin);
  const behaviour = applyBehaviour(renderer, wrapper);
  behaviour.component = wrapper;
  return behaviour;
}

const factory = createProperties => (renderer, skin) => createBehaviour(createProperties)(renderer, skin);
export default factory;
