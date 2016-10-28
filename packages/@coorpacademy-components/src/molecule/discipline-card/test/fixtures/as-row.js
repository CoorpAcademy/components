export default {
  props: {
    theme: 'circle',
    row: true,
    discipline: {
      label: 'as Row',
      courseNum: 0,
      modules: [{
        label: 'foo',
        status: 'isRestarted'
      }, {
        label: 'bar',
        status: 'isPaying'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
