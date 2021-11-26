export default {
  props: {
    theme: 'coorpmanager',
    placeholder: 'Select language(s)',
    title: 'Input Name',
    description: 'You should select a language',
    multiple: false,
    disabled: true,
    error: 'Select at least one',
    hint: 'Hint',
    options: [
      {
        name: '🇬🇧 English',
        value: 'en',
        selected: true
      },
      {
        name: '🇩🇪 German',
        value: 'de',
        selected: false
      },
      {
        name: '🇹🇭 Thai',
        value: 'th',
        selected: false
      },
      {
        name: '🇪🇸 Spanish',
        value: 'es',
        selected: false
      }
    ],
    onChange: value => console.log('onChange', value),
    onError: () => true
  }
};
