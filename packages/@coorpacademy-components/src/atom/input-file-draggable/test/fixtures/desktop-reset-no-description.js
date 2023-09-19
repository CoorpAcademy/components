import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: {
    ...props,
    onReset: () => console.log('reset')
  }
};
