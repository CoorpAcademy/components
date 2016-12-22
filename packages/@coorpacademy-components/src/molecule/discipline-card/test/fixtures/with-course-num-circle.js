export default {
  props: {
    discipline: {
      label: 'Title CourseNum',
      courseNum: 0,
      modules: [{
        ref: '0',
        label: 'foo',
        status: 'isRestarted'
      }, {
        ref: '1',
        label: 'bar',
        status: 'isPaying'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null,
    theme: 'circle'
  }
};
