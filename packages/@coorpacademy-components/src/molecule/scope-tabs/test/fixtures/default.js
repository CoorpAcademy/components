export default {
  props: {
    levels: [{
      name: 'Base',
      status: 'isActive'
    }, {
      name: 'Advanced',
      status: 'isLocked'
    }, {
      name: 'Coach',
      status: 'isStarted'
    }],
    selected: 1,
    onClick: () => true
  }
};
