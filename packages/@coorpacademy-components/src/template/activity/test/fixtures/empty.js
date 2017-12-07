export default {
  props: {
    mainTitle: 'Activity:',
    mainSubtitle: 'Houw is your progress going in your course?',
    total: {
      stars: 0,
      label: 'Total:'
    },
    engines: [
      {
        type: 'learner',
        title: 'Courses',
        stars: 0
      },
      {
        type: 'microlearning',
        title: 'MicroLearning',
        stars: 0
      }
    ],
    loading: true,
    themeFilter: {
      options: [
        {
          name: 'Digital',
          value: 'Digital',
          selected: true
        },
        {
          name: 'Esprit du temps',
          value: 'Esprit du temps',
          selected: false
        }
      ],
      onChange: value => console.log(value)
    }
  }
};
