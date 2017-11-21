export default {
  props: {
    mainTitle: 'Activity:',
    mainSubtitle: 'Houw is your progress going in your course?',
    total: {
      stars: 0,
      label: 'Total: '
    },
    recommendation: {
      title: 'Start learning to discover your activity',
      subtitle: 'We recommend',
      courseTitle: 'BigData',
      onClick: () => console.log('start course'),
      cta: 'Start Learning'
    },
    loading: true
  }
};
