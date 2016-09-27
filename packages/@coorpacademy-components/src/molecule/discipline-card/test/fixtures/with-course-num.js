export default {
  props: {
    discipline: {
      label: 'Title CourseNum',
      courseNum: 0,
      modules: [{
        label: 'foo',
        status: 'success'
      }, {
        label: 'bar',
        status: 'success'
      }]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
