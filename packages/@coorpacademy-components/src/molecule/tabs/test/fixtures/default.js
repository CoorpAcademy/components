export default {
  props: {
    items: [
      {
        title: 'course',
        count: 34,
        'aria-label': 'All course',
        onClick: () => console.log('course'),
        isActive: true
      },
      {
        title: 'microlearning',
        count: 23,
        'aria-label': 'All microlearning',
        onClick: () => console.log('microlearning'),
        isActive: false
      },
      {
        title: 'SCORM',
        count: 2,
        'aria-label': 'All SCORM',
        onClick: () => console.log('SCORM'),
        isActive: false
      }
    ]
  }
};
