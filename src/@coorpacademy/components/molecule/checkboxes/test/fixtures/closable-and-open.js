export default {
  props: {
    title: 'foo',
    mode: 'closable',
    status: 'open',
    choices: [{
      checked: true,
      label: 'foo'
    },
    {
      checked: false,
      label: 'bar'
    }],
    onToggle: () => true
  }
};
