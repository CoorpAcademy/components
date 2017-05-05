export default {
  props: {
    discipline: {
      ref: 0,
      label: 'Title CourseNum',
      courseNum: 0,
      modules: [
        {
          ref: '0',
          label: 'foo',
          status: 'isRestarted'
        },
        {
          ref: '1',
          label: 'bar',
          status: 'isPaying'
        }
      ]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
