export default {
  props: {
    value: 0.5,
    multi: false,
    onChange: (...args) => console.log('onChange', ...args)
  }
};
