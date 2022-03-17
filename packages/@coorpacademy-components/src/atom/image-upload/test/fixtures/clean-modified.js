import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: {
    ...props,
    previewContent: {},
    modified: true
  }
};
