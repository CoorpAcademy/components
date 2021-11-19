export default {
  props: {
    theme: 'coorpmanager',
    placeholder: 'Select language(s)',
    title: 'Input Name',
    description: 'You should select a language',
    multiple: true,
    error: false,
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
