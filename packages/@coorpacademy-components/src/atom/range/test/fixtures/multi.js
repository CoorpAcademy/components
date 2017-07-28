import Default from './default';

const {props} = Default;

export default {
  props: {
    ...props,
    multi: true,
    value: [0.2, 0.7]
  }
};
