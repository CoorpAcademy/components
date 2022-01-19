export default {
  props: {
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'Xoxoxo',
      description: 'Type to find the courses',
      onChange: value => console.log(value)
    },
    'courses-selection-aria-label': 'Courses results',
    courses: [],
    emptyMessages: {
      firstMessage: 'No results...',
      secondMessage: 'Try something else'
    },
    switchButton: {
      type: 'switch',
      title: 'Show selected courses only',
      value: false,
      onChange: value => console.log(value),
      titlePosition: 'right',
      disabled: true,
      theme: 'coorpmanager'
    }
  }
};
