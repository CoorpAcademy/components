import createDecorator from './decorator';

const createComponent = createProperties => (engine, skin) => (props) => {
  const {clone, map} = engine;
  if(!clone || !map) return props.children;

  const properties = createProperties(engine, skin)(props);
  const child = props.children[0];

  return clone(child, properties);
};

const createWrapper = createProperties => (engine, skin) => {
  const wrapper = createComponent(createProperties)(engine, skin);
  wrapper.decorate = createDecorator(engine)(wrapper);
  return wrapper;
};

export default createWrapper;
