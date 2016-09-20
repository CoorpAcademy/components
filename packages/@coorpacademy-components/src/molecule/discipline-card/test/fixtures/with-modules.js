export default {
  props: {
    discipline: {
      modules: [{
        label: 'foo',
        status: 'success'
      }, {
        label: 'bar',
        status: 'locked'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
