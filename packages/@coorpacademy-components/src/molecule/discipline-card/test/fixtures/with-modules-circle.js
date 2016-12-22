export default {
  props: {
    discipline: {
      label: 'Digital',
      modules: [{
        ref: '0',
        label: 'foo',
        status: 'isActive'
      }, {
        ref: '1',
        label: 'bar',
        status: 'isValid'
      }, {
        ref: '2',
        label: 'baz',
        status: 'isStarted'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null,
    theme: 'circle'
  }
};
