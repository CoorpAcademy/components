export default {
  props: {
    theme: 'digital',
    totalStars: 400,
    headerRecommandationTitle: 'Start learning to discover your activity',
    headerRecommandationSubtitle: 'We recommend',
    headerCourseTitle: 'BigData',
    courseTitle: 'Courses',
    courseStars: 100,
    microlearningTitle: 'MicroLearning',
    microlearningStars: 70,
    boltTitle: 'Battles',
    boltStars: 230,
    url: '/#',
    cta: 'Start Learning',
    progressions: [
      {
        completion: 30,
        stars: '400',
        label: 'Big Data',
        level: 'Basic',
        state: 'Continue learning',
        type: 'course'
      },
      {
        completion: 100,
        stars: '700',
        label: 'Prospectives',
        level: 'Coach',
        state: 'Redo this course',
        type: 'chapter'
      },
      {
        completion: 0,
        stars: '400',
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter'
      }
    ],
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
    ]
  }
};
