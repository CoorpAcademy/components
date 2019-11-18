export default {
  props: {
    levels: [
      {
        name: 'Base',
        label: 'foo',
        status: 'isActive'
      },
      {
        name: 'Advanced',
        label: 'bar'
      },
      {
        name: 'Coach',
        label: 'fuz',
        status: 'isStarted'
      }
    ],
    selected: 2,
    onClick: () => true
  }
};
