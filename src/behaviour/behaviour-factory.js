const createComponent = createProperties => (renderer, skin) => (props) => {
  const {clone} = renderer;
  if(!clone) return props.children;

  const { properties, vTree } = createProperties(renderer, skin)(props);
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
