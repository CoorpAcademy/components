export default {
  props: {
    type: 'select',
    title: 'Couleur',
    onChange: () => true,
    options: [{
      name: 'foo',
      value: 'A',
      selected: false
    }, {
      name: 'bar',
      value: 'B',
      selected: true
    }, {
      name: 'baz',
      value: 'C',
      selected: false
    }]
  }
};
