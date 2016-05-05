import createDecorator from './decorator';

const createComponent = createProperties => (engine, options) => props => {
  const {clone, map} = engine;

  const properties = createProperties(engine, options)(props);
  const child = map(c => c, props.children)[0];

  return clone(child, properties);
};

const createWrapper = createProperties => (engine, options) => {
  const wrapper = createComponent(createProperties)(engine, options);
  wrapper.decorate = createDecorator(engine)(wrapper);
  return wrapper;
};

export default createWrapper;
