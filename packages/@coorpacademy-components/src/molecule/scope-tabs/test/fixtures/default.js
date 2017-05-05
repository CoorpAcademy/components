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
        label: 'bar',
        status: 'isLocked'
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
