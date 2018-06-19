export default {
  props: {
    mainTitle: 'Activity:',
    mainSubtitle: 'How is your progress going in your course?',
    total: {
      stars: 13400,
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
        stars: 2100
      },
      {
        type: 'microlearning',
        title: 'Microlearning',
        stars: 0,
        disabled: true,
        toolTip: {
          preMessage:
            'This feature is currently unavailable on your platform. If you want to activate it, contact your manager or',
          linkMessage: 'click here',
          endMessage: 'so we may pass the message on.',
          onClick: console.log
        }
      },
      {
        type: 'battle',
        title: 'Battles',
        stars: 23830
      },
      {
        type: 'certifications',
        title: 'Certifications',
        stars: 500
      },
      {
        type: 'bonus',
        title: 'Bonus',
        stars: 20,
        disabled: true,
        toolTip: {
          preMessage:
            'This feature is currently unavailable on your platform. If you want to activate it, contact your manager or',
          linkMessage: 'click here',
          endMessage: 'and we will pass the message on.',
          onClick: console.log
        }
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
