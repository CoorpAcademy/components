const createComponent = createProperties => (renderer, skin) => (props) => {
  const {h, map, clone, resolve} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);
  const vTree = map(props.children, resolve).pop();

  return clone(vTree, properties);
};

const createDecorator = (renderer, skin, createProperties) => Element => props => {
  const {h} = renderer;
  const Behaviour = createComponent(createProperties)(renderer, skin);

  return  <Behaviour>
            <Element>
              {props.children}
            </Element>
          </Behaviour>;
};

const createBehaviour = createProperties => (renderer, skin) => {
  const wrapper = createComponent(createProperties)(renderer, skin);
  const decorate = createDecorator(renderer, skin, createProperties);
  wrapper.decorate = decorate;
  return wrapper;
}

const factory = createProperties => (renderer, skin) => createBehaviour(createProperties)(renderer, skin);
export default factory;
