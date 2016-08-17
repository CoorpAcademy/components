export default {
  props: {
    disciplines: [{
      courseNum: 0,
      modules: []
    },
    {
      courseNum: 1,
      modules: []
    }],
    onModuleClick: () => null,
    onDisciplineClick: () => null
  }
};
