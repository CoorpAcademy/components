export default {
  props: {
    list: [{
      label: 'plop',
      value: 1,
      selected: false
    }, {
      label: 'plup',
      value: 2,
      selected: true
    }],
    onChange: () => null
  }
};
