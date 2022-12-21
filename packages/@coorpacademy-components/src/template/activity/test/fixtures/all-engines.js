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
        stars: 2100,
        active: true,
        onClick: () => console.log('learner')
      },
      {
        type: 'microlearning',
        title: 'Microlearning',
        stars: 0,
        disabled: true,
        onClick: () => console.log('microlearning'),
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
        stars: 23830,
        onClick: () => console.log('battle')
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
      },
      {
        type: 'scorm',
        title: 'Animated resources',
        stars: 70,
        onClick: () => console.log('scorm')
      },
      {
        type: 'video',
        title: 'Videos',
        stars: 50,
        onClick: () => console.log('video')
      },
      {
        type: 'article',
        title: 'Articles',
        stars: 50,
        onClick: () => console.log('article')
      },
      {
        type: 'podcast',
        title: 'Podcasts',
        stars: 0,
        onClick: () => console.log('podcast')
      },
      {
        type: 'review',
        title: 'Review',
        stars: 0,
        onClick: () => console.log('review')
      }
    ],
    progressions: [
      {
        ref: '09',
        completion: 0.3,
        stars: 400,
        disabled: false,
        label: 'Big Data',
        level: 'Basic',
        steps: 3,
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
        maxStars: 800,
        disabled: false,
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
        ref: '07',
        completion: 1,
        stars: 700,
        disabled: false,
        label: 'Prospectives - Base Level',
        state: 'Launch a battle',
        level: 'Coach',
        type: 'battle',
        adaptive: false,
        onClick: () => {
          console.log('battle');
        }
      },
      {
        ref: '08',
        completion: 1,
        stars: 700,
        disabled: false,
        steps: 5,
        label: 'Jedi certification',
        state: 'See certification',
        type: 'certification',
        level: '',
        adaptive: false,
        onClick: () => {
          console.log('certification');
        }
      },
      {
        ref: '03',
        completion: 0,
        stars: 400,
        disabled: false,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '05',
        completion: 0.75,
        stars: 400,
        disabled: true,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'podcast',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '06',
        completion: 0.75,
        stars: 400,
        disabled: false,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '07',
        completion: 0.5,
        stars: 400,
        disabled: false,
        label: 'Lead generation',
        level: '',
        state: 'Start learning',
        type: 'scorm',
        adaptive: false,
        onClick: () => {
          console.log('scorm');
        }
      },
      {
        ref: '08',
        completion: 0.75,
        stars: 400,
        disabled: false,
        label: 'Youtube Video',
        level: '',
        state: 'Start learning',
        type: 'video',
        adaptive: false,
        onClick: () => {
          console.log('video');
        }
      },
      {
        ref: '09',
        completion: 0.25,
        stars: 400,
        disabled: false,
        label: 'Mooc Article',
        level: '',
        state: 'Start learning',
        type: 'article',
        adaptive: false,
        onClick: () => {
          console.log('article');
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
