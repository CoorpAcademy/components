export default {
  props: {
    discipline: {
      label: 'Digital',
      modules: [{
        label: 'foo',
        status: 'success'
      }, {
        label: 'bar',
        status: 'success'
      }, {
        label: 'baz',
        status: 'success'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
