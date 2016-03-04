import createDecorator from './decorator';

const createComponent = createProperties => (renderer, skin) => (props) => {
  const {clone, map} = renderer;
  if(!clone || !map) return props.children;

  const properties = createProperties(renderer, skin)(props);
  const child = props.children[0];

  return clone(child, properties);
};

const createWrapper = createProperties => (renderer, skin) => {
  const wrapper = createComponent(createProperties)(renderer, skin);
  wrapper.decorate = createDecorator(renderer)(wrapper);
  return wrapper;
};

export default createWrapper;
