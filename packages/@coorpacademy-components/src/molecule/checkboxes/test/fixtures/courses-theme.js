export default {
  props: {
    title: 'foo',
    theme: 'courses',
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
    onToggle: () => true
  }
};
