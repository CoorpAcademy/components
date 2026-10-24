export default {
  props: {
    options: [
      {label: 'My assignments', value: 'my'},
      {label: 'All assignments', value: 'all'}
    ],
    value: 'my',
    onChange: value => console.log(value),
    'aria-label': 'Assignment scope'
  }
};
