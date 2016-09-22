import head from 'lodash/fp/head';
import createDecorator from './decorator';

const createComponent = createProperties => (treant, options) => (props, children) => {
  const {clone, map} = treant;

  const child = head(map(c => c, children));
  const properties = createProperties(treant, options)(props, child);

  return clone(child, properties);
};

const createWrapper = createProperties => (treant, options) => {
  const wrapper = createComponent(createProperties)(treant, options);
  wrapper.decorate = createDecorator(treant)(wrapper);
  return wrapper;
};

export default createWrapper;
