export default {
  props: {
    title: 'foo',
    mode: 'closable',
    choices: [
      {
        checked: true,
        label: 'foo'
      },
      {
        checked: false,
        label: 'bar'
      }
    ],
    onToggle: () => true,
    onOpen: () => true
  }
};
