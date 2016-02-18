const createComponent = createProperties => (renderer, skin) => (props) => {
  const {map, clone, resolve} = renderer;
  if(!map || !clone) return props.children;

  const properties = createProperties(renderer, skin)(props);

  const vTree = map(resolve, props.children).pop();
  return clone(vTree, properties);
};

const createDecorator = ({h}, Behaviour) => Element => props => {
  return  (
    <Behaviour>
      <Element>
        {props.children}
      </Element>
    </Behaviour>
  );
};

const createBehaviour = createProperties => (renderer, skin) => {
  const behaviour = createComponent(createProperties)(renderer, skin);
  behaviour.decorate = (Element) => createDecorator(renderer, behaviour)(Element);
  return behaviour;
};

const factory = createProperties => (renderer, skin) => createBehaviour(createProperties)(renderer, skin);
export default factory;
