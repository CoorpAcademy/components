export default {
  props: {
    discipline: {
      label: 'Digital',
      modules: [{
        label: 'foo',
        status: 'isActive'
      }, {
        label: 'bar',
        status: 'isValid'
      }, {
        label: 'baz',
        status: 'isStarted'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null,
    theme: 'circle'
  }
};
