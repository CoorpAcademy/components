export default {
  props: {
    mainTitle: 'Activity:',
    mainSubtitle: 'How is your progress going in your course?',
    total: {
      stars: 400,
      label: 'Total:'
    },
    recommendation: {
      title: 'Start learning to discover your activity',
      subtitle: 'We recommend',
      courseTitle: 'BigData',
      onClick: () => console.log('start course'),
      cta: 'Start Learning'
    },
    loading: false,
    engines: [
      {
        type: 'learner',
        title: 'Courses',
        stars: 100
      },
      {
        type: 'microlearning',
        title: 'Microlearning',
        stars: 70
      },
      {
        type: 'battle',
        title: 'Battles',
        stars: 230
      }
    ],
    progressions: [
      {
        ref: '05',
        completion: 0.3,
        stars: 400,
        label: 'Big Data',
        level: 'Basic',
        state: 'Continue learning',
        type: 'course',
        adaptive: false,
        onClick: () => {
          console.log('course');
        }
      },
      {
        ref: '04',
        completion: 1,
        stars: 700,
        label: 'Prospectives',
        level: 'Coach',
        state: 'Redo this course',
        type: 'chapter',
        adaptive: true,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '03',
        completion: 0,
        stars: 400,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      }
    ],
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
