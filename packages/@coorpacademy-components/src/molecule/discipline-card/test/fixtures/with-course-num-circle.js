export default {
  props: {
    discipline: {
      label: 'Title CourseNum',
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
    onModuleClick: () => null,
    theme: 'circle'
  }
};
