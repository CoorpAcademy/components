export default {
  props: {
    theme: 'cockpit',
    placeholder: 'Select language(s)',
    options: [
      {
        name: 'English',
        value: 'en',
        selected: true
      },
      {
        name: 'German',
        value: 'de',
        selected: false
      },
      {
        name: 'Thai',
        value: 'th',
        selected: false
      },
      {
        name: 'Spanish',
        value: 'es',
        selected: false
      }
    ],
    onChange: () => true
  }
};
