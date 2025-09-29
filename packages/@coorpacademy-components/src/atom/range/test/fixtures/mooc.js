export default {
  props: {
    value: [20, 80],
    multi: true,
    theme: 'mooc',
    min: 0,
    max: 120,
    step: 1,
    minLabel: 'Min',
    maxLabel: 'Max',
    onChange: (...args) => console.log('onChange', ...args),
    onChangeEnd: (...args) => console.log('onChangeEnd', ...args)
  }
};