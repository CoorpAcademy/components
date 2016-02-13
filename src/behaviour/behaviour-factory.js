const createComponent = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone, resolve} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);
  const vTree = map(props.children, resolve).pop();

  return clone(vTree, properties);
};

const applyBehaviour = ({h}, Behaviour) => Element => props => {
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
