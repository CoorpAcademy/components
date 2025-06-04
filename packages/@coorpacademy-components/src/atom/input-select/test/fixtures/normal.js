export default {
  props: {
    options: [
      {value: 'en', label: 'English'},
      {value: 'fr', label: 'Français'},
      {value: 'es', label: 'Español'}
    ],
    value: 'en',
    onChange: value => console.log('Selected:', value),
    placeholder: 'Language',
    'aria-label': 'Language select'
  }
};
