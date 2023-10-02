import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: {
    ...props,
    modified: true
  }
};
